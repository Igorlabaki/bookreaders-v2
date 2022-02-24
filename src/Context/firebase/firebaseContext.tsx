import { useRouter }            from 'next/router'
import app, { db,storage}       from '../../service/firebase'
import {createContext,ReactNode,useState} from 'react'
import { ref, uploadBytes,getDownloadURL} from 'firebase/storage'
import { collection, getDocs,getDoc, doc,setDoc,updateDoc, DocumentData, query, where} from 'firebase/firestore'
import {User, getAuth,signInWithPopup,GoogleAuthProvider,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword, AuthErrorCodes, updateProfile} from 'firebase/auth'

interface ContextProvider {
    children: ReactNode
}

interface Post{
    uid:    string
    text:   string
}
interface FirebaseContext{
    userAuth:               User | null,
    user?:                  DocumentData, 
    error?:                 string,
    isLoading?:             boolean,
    avatar?:                File
    avatarUrl?:             string
    posts?:                 any[]
    userPosts?:             any[]
    login?:                 (email:string, password:string) => void,
    register?:              (email:string, password:string,userName:string) => void,
    uploadPhoto?:           () => void, 
    changeAvatarHandler?:   (e:any) => void, 
    addBio?:                (bio: string) => void,
    createPost?:            (post: object) => void,
    loginGoogle?:           () => void,
    logout?:                () => void
    getUsers?:              () => void
    getUserPosts?:          () => void
    getPosts?:              () => void
    getUser?:               () => void
}

export const FirebaseContext = createContext<FirebaseContext>({
    userAuth:   null,
    isLoading:  null
})

const auth = getAuth(app)

export function FireBaseContextProvider({children}: ContextProvider){
    
    const usersCollectionRef                = collection(db,"users")
    const postsCollectionRef                = collection(db,"posts")
    const [userAuth, setUserAuth]           = useState<User | null>(null);
    const [user, setUser]                   = useState<Object>(null);
    const [users, setusers]                 = useState([]);
    const [posts, setPosts]                 = useState([]);
    const [userPosts, setUserPosts]         = useState([]);
    const [error,setError]                  = useState(null)
    const [isLoading,setIsLoading]          = useState(false)
    const [avatar, setAvatar]               = useState(null)
    const [avatarUrl, setAvatarUrl]         = useState(null)
    const [postList, setPostList]           = useState([])
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

    const register = async (email:string, password:string, userName:string) => {
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
                        posts: userPosts
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
            error
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
                        bio:        "", 
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

    const  uploadPhoto = () => {
        const imageRef = ref(storage, `${userAuth.uid + 'avatar'}`)
        const newUser =  doc(usersCollectionRef,userAuth.uid)
        uploadBytes(imageRef,avatar).then( () => {
            getDownloadURL(imageRef).then((url) => {
                setAvatarUrl(url);
                updateDoc(newUser, {
                    avatar: url
                })
                updateProfile(auth.currentUser, {photoURL: url})
            })

        })

    }

    const changeAvatarHandler = (e: any) => {
        if(e.target.files[0]){
            setAvatar(e.target.files[0])
        }
    }

    async function  addBio (newBio:string){
        setIsLoading(true)
        const userUpdate =  doc(usersCollectionRef,userAuth.uid)
        updateDoc(userUpdate, {
            bio: newBio
        })
       getDoc(doc(usersCollectionRef,userAuth.uid)).then( (user) =>{
            return setUser({...user.data()})
        })
        setTimeout(() => setIsLoading(false),2000 )
    }

    async function  createPost (post: Post){
        const newPost =  doc(postsCollectionRef)
        setDoc(newPost, {
            uid: userAuth.uid,
            text: post.text
        })
        if(post.uid == userAuth.uid){
            userPosts.push(post)
        }
        postList.push(post)
    }

    async function  getPosts (){
        const data = await getDocs(postsCollectionRef)
        setPosts(data.docs.map((post) => ({...post.data(), id: userAuth.uid})))
    }

    async function  getUserPosts (){
        const postsUser = await query(postsCollectionRef, where("uid", "==", userAuth.uid));
        const querySnapshot = await getDocs(postsUser);
        setUserPosts(querySnapshot.docs.map((post) => ({...post.data(), id: userAuth.uid})))
        
    }



    return(
        <FirebaseContext.Provider value={{
            login,
            loginGoogle,
            logout,
            register,
            getUsers,
            getPosts,
            getUserPosts,
            getUser,
            uploadPhoto,
            changeAvatarHandler,
            addBio,
            createPost,
            isLoading,
            error,
            userAuth,
            user,
            avatar,
            avatarUrl,
            posts,
            userPosts
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}