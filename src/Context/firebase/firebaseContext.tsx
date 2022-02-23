import {createContext,ReactNode,useState} from 'react'
import {User, getAuth,signInWithPopup,GoogleAuthProvider,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword, AuthErrorCodes, updateProfile} from 'firebase/auth'
import app, { db } from '../../service/firebase'
import { useRouter } from 'next/router'
import { collection, getDocs,getDoc, doc,setDoc,updateDoc, DocumentData} from 'firebase/firestore'

interface ContextProvider {
    children: ReactNode
}
interface FirebaseContext{
    userAuth:        User | null,
    user?:           DocumentData, 
    error?:          string,
    isLoading?:      boolean,
    login?:          (email:string, password:string) => void,
    register?:       (email:string, password:string,username:string) => void,
    uploadPhoto?:    (photoUrl:File) => void, 
    addBio?:         (bio: string) => void,
    loginGoogle?:    () => void,
    logout?:         () => void
    getUsers?:       () => void
    getUser?:       () => void
}

export const FirebaseContext = createContext<FirebaseContext>({
    userAuth:   null,
    isLoading:  null
})

const auth = getAuth(app)

export function FireBaseContextProvider({children}: ContextProvider){
    
    const usersCollectionRef                = collection(db,"users")
    const [userAuth, setUserAuth]           = useState<User | null>(null);
    const [user, setUser]                   = useState<Object>(null);
    const [users, setusers]                 = useState([]);
    const [error,setError]                  = useState(null)
    const [isLoading,setIsLoading]           = useState(false)
    const router                            = useRouter()

    function showError(msg,time = 3000){
        setError(msg)
        setTimeout(() => setError(null),time )
    }

    const login = async (email:string, password:string) => {
        try {
             signInWithEmailAndPassword(auth, email,password).then((response) => {
                    sessionStorage.setItem('Token', response.user.uid)
                    setUserAuth(auth.currentUser)
                    console.log
                    router.push('/discover')
                })
        } catch (error) {
            if(error.code == AuthErrorCodes.INVALID_PASSWORD){
                showError('Password are wrong')
            }else{
                error
            }
        }
    }

    const register = async (email:string, password:string, username:string) => {
        try {
            if(password.length >= 6){
                await createUserWithEmailAndPassword(auth, email,password).then((response) => {
                    setUserAuth(response.user)
                    const newUser =  doc(usersCollectionRef,response.user.uid)
                    setDoc(newUser, {
                        uid: response.user.uid,
                        username: response.user.displayName,
                        email: response.user.email,
                        bio: "", 
                        avatar: ""
                    })
                    sessionStorage.setItem('Token',response.user.uid)
                    router.push('/discover')   
                })
                updateProfile(auth.currentUser, {displayName: username})
            }
            else{
                showError('Password must be at least 6 characters.')
            }
        } catch (error) {
            error
        }
    }

   const loginGoogle = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider()).then((response) => {
                sessionStorage.setItem('Token', response.user.uid)
                setUserAuth(auth.currentUser)
                router.push('/discover')
            })
        } catch (error) {
                console.error(error)
        }
   }

   const getUsers = async () => {
       const data = await getDocs(usersCollectionRef)
       setusers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
   }

   const getUser = async () => {
        getDoc(doc(usersCollectionRef,userAuth.uid)).then( (user) =>{
            console.log(user.data)
            return setUser({...user.data()})
        })
   }

   const logout = async () => {
        try {
            await signOut(auth)
            setUser(null)
            sessionStorage.clear()
            router.push('/')
        } catch (error) {
            console.error(error)
        }
    }

    const  uploadPhoto = async (file) =>{

    }

    const uploadHandler = async (event) => {}

    async function  addBio (newBio:string){
        setIsLoading(true)
        const newUser =  doc(usersCollectionRef,userAuth.uid)
        updateDoc(newUser, {
            bio: newBio
        })
       getDoc(doc(usersCollectionRef,userAuth.uid)).then( (user) =>{
            return setUser({...user.data()})
        })
        setTimeout(() => setIsLoading(false),2000 )
    }

    return(
        <FirebaseContext.Provider value={{
            login,
            loginGoogle,
            logout,
            register,
            getUsers,
            getUser,
            uploadPhoto,
            addBio,
            isLoading,
            error,
            userAuth,
            user
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}