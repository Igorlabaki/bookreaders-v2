import {createContext,ReactNode,useState} from 'react'
import {User, getAuth,signInWithPopup,GoogleAuthProvider,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword, AuthErrorCodes} from 'firebase/auth'
import app, { db } from '../../service/firebase'
import { useRouter } from 'next/router'
import { collection, getDocs} from 'firebase/firestore'


interface ContextProvider {
    children: ReactNode
}

interface user{
    password:string,
    email:string,
    username:string
}

interface FirebaseContext{
    user:           User | null,
    users?:         user[],
    error?:           string,
    login:          (email:string, password:string) => void,
    register:       (email:string, password:string) => void,
    loginGoogle:    () => void,
    logout:         () => void
    getUsers:       () => void
}

export const FirebaseContext = createContext<FirebaseContext>({
    user:           null,
    login:          () => {},
    register:       () => {},
    loginGoogle:    () => {},
    logout:         () => {}, 
    getUsers:       () => {} 
})

const auth = getAuth(app)

export function FireBaseContextProvider({children}: ContextProvider){
    
    const usersCollectionRef                = collection(db,"users")
    const [user, setuser]                   = useState<User | null>(null);
    const [users, setusers]                 = useState([]);
    const [error,setError]                  = useState(null)
    const router                            = useRouter()

    function showError(msg,time = 3000){
        setError(msg)
        setTimeout(() => setError(null),time )
      }
    

    const login = async (email:string, password:string) => {
        try {
             await signInWithEmailAndPassword(auth, email,password)
             setuser(auth.currentUser)
             setError("")
             router.push('/discover')
        } catch (error) {
            if(error.code == AuthErrorCodes.INVALID_PASSWORD){
                showError('Password are wrong')
            }else{
                showError('Email not found!')
            }
        }
    }

    const register = async (email:string, password:string) => {
        try {
            if(password.length >= 6){
                await createUserWithEmailAndPassword(auth, email,password)
                setuser(auth.currentUser)
            }
            else{
                showError('Password must be at least 6 characters.')
            }
        } catch (error) {
            showError('Email already exists!')
        }
    }

   const loginGoogle = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider())
            setuser(auth.currentUser)
            console.log(user.email)
            router.push('/discover')
        } catch (error) {
                console.error(error)
        }
   }

   const getUsers = async () => {
       const data = await getDocs(usersCollectionRef)
       setusers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
   }

   const logout = async () => {
        try {
            await signOut(auth)
            router.push('/')
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <FirebaseContext.Provider value={{
            login,
            loginGoogle,
            logout,
            register,
            error,
            user,
            users,
            getUsers
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}