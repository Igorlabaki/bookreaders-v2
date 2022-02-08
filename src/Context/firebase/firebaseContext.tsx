import {createContext,ReactNode,useState} from 'react'
import {User, getAuth,signInWithPopup,GoogleAuthProvider,signOut} from 'firebase/auth'
import app from '../../service/firebase'
import { useRouter } from 'next/router'


interface ContextProvider {
    children: ReactNode
}
interface FirebaseContext{
    user:   User | null,
    loginGoogle:  () => void,
    logout: () => void
}

export const FirebaseContext = createContext<FirebaseContext>({
    user:  null,
    loginGoogle:  () => {},
    logout: () => {} 
})

const auth = getAuth(app)

export function FireBaseContextProvider({children}: ContextProvider){
    
    const [user, setuser] = useState<User | null>(null);
    const router = useRouter()

   const loginGoogle = async () => {
       try {
            await signInWithPopup(auth, new GoogleAuthProvider())
            setuser(auth.currentUser)
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
            loginGoogle,
            logout,
            user
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}