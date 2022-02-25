import { useRouter }            from 'next/router'
import app, { db}       from '../../service/firebase'
import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
import { collection, getDocs,getDoc, doc,setDoc,DocumentData} from 'firebase/firestore'
import {User, getAuth,signInWithPopup,GoogleAuthProvider,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword, AuthErrorCodes, updateProfile} from 'firebase/auth'

interface ContextProvider {
    children: ReactNode
}

interface Post{
    uid:      string
    text:     string
    username: string,
    photoUrl: string,
    postedAt: Date
}
interface AuthContext{
    userAuth:               User | null,
    user?:                  DocumentData, 
    error?:                 string,
    isLoading?:             boolean,
    login?:                 (email:string, password:string) => void,
    register?:              (email:string, password:string,userName:string) => void,
    loginGoogle?:           () => void,
    logout?:                () => void,
    getUser?:               () => void,
    setUserPosts?:          Dispatch<SetStateAction<any[]>>

}
  
export const AuthContext = createContext<AuthContext>({
    userAuth:   null,
    isLoading:  null
})

const auth = getAuth(app)

export function AuthContextProvider({children}: ContextProvider){
    
    const usersCollectionRef                = collection(db,"users")
    
    const [userAuth, setUserAuth]           = useState<User | null>(null);
    const [user, setUser]                   = useState<Object>(null);
    const [error,setError]                  = useState(null)
    const [isLoading,setIsLoading]          = useState(false)
    const [users, setUsers]                 = useState([]);
    const router                            = useRouter()

    function showError(msg){
        setError(msg);
        setTimeout(() => setError(null),3000)
    }

    const login = async (email:string, password:string) => {
        if(email == '' || password == ""){
            showError('All inputs are required')
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, email,password).then((response) => {
                sessionStorage.setItem('Token', response.user.uid)
                setUserAuth(auth.currentUser)
                router.push('/discover')
            })
            console.log('dh')
        } catch (error) {
            if(error.message.includes('invalid-email')){
                showError('This email is invalid.')
            }
           if(error.message.includes('user-not-found')){
            showError('User not found.')
            }
            if(error.message.includes('wrong-password')){
                showError('User or password not correct.')
            } 
            console.log(error.message)
        }
    }

    const register = async (email:string, password:string, userName:string) => {
        if(email == '' || password == '' || userName == ''){
            showError('All inputs are required')
            return;
        }
        try {
            if(password.length >= 6){
                await createUserWithEmailAndPassword(auth, email,password).then((response) => {
                    setUserAuth(response.user)
                    const newUser =  doc(usersCollectionRef,response.user.uid)
                    setDoc(newUser, {
                        uid: response.user.uid,
                        username: userName,
                        email: response.user.email,
                        bio: "", 
                        avatar: "",
                        posts: []
                    })
                    sessionStorage.setItem('Token',response.user.uid)
                    router.push('/discover')   
                })
                updateProfile(auth.currentUser, {displayName: userName})
            }
            else{
                showError('Password must be at least 6 characters.')
            }
        } catch (error) {
           if(error.message.includes('email-already-in-use')){
                showError('This email already in use.')
           }
        }
    }

   const loginGoogle = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider()).then((response) => {
                setUserAuth(response.user)
                    const newUser =  doc(usersCollectionRef,response.user.uid)
                    setDoc(newUser, {
                        uid:        response.user.uid,
                        username:   response.user.displayName,
                        email:      response.user.email,
                        avatar:     "",
                        posts:      []
                    })
                updateProfile(auth.currentUser, {displayName: response.user.displayName})
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
       setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
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

    return(
        <AuthContext.Provider value={{
            login,
            loginGoogle,
            logout,
            register,
            getUser,
            isLoading,
            error,
            userAuth,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}