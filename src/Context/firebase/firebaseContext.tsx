import {createContext,ReactNode,useState} from 'react'
import {User, getAuth,signInWithPopup,GoogleAuthProvider,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../../service/firebase'
import { useRouter } from 'next/router'


interface ContextProvider {
    children: ReactNode
}
interface FirebaseContext{
    user:   User | null,
    login:  (email:string, password:string) => void,
    register:  (email:string, password:string) => void,
    loginGoogle:  () => void,
    logout: () => void
}

export const FirebaseContext = createContext<FirebaseContext>({
    user:  null,
    login: () => {} ,
    register: () => {} ,
    loginGoogle:  () => {},
    logout: () => {} 
})

const auth = getAuth(app)

export function FireBaseContextProvider({children}: ContextProvider){
    
    const [user, setuser] = useState<User | null>(null);
    const router = useRouter()

    const login = async (email:string, password:string) => {
        try {
             await signInWithEmailAndPassword(auth, email,password)
             setuser(auth.currentUser)
             router.push('/discover')
             console.log(user.email)
        } catch (error) {
             console.error(error)
        }
    }

    const register = async (email:string, password:string) => {
        try {
             await createUserWithEmailAndPassword(auth, email,password)
             setuser(auth.currentUser)
             router.push('/discover')
        } catch (error) {
             console.error(error)
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
            user
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}