import { useRouter }            from 'next/router'
import app, { db,storage}       from '../../service/firebase'
import {createContext,ReactNode,useState} from 'react'
import { ref, uploadBytes,getDownloadURL} from 'firebase/storage'
import { collection, getDocs,getDoc, doc,setDoc,updateDoc, DocumentData, query, where, deleteDoc,documentId} from 'firebase/firestore'
import {User, getAuth,signInWithPopup,GoogleAuthProvider,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword, AuthErrorCodes, updateProfile} from 'firebase/auth'
import useAuthContext from '../../hook/useAuthContext'

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
interface UpdateUserContext{
    error?:                 string,
    isLoading?:             boolean,
    avatar?:                File
    avatarUrl?:             string
    uploadPhoto?:           () => void, 
    changeAvatarHandler?:   (e:any) => void, 
    addBio?:                (bio: string) => void,
}

export const UpdateUserContext = createContext<UpdateUserContext>({
    isLoading:  null
})

export function UpdateUserContextProvider({children}: ContextProvider){

    const {userAuth} = useAuthContext()
    const {getUser} = useAuthContext()

    const usersCollectionRef                = collection(db,"users")
   
    const [error,setError]                  = useState(null)
    const [isLoading,setIsLoading]          = useState(false)
    const [avatar, setAvatar]               = useState(null)
    const [avatarUrl, setAvatarUrl]         = useState(null)

    function showError(msg,time = 3000){
        setError(msg)
        setTimeout(() => setError(null),time )
    }

 
    const  uploadPhoto = () => {
        setIsLoading(true)
        const imageRef = ref(storage, `${userAuth.uid + 'avatar'}`)
        const newUser =  doc(usersCollectionRef,userAuth.uid)
        uploadBytes(imageRef,avatar).then( () => {
            getDownloadURL(imageRef).then((url) => {
                setAvatarUrl(url);
                updateDoc(newUser, {
                    avatar: url
                })
                updateProfile(userAuth, {photoURL: url})
            })

        })
        setTimeout(() => setIsLoading(false),2000)
    }

    const changeAvatarHandler = (e: any) => {
        if(e.target.files[0]){
            setAvatar(e.target.files[0])
        }
    }

    async function  addBio (newBio:string){
        //setIsLoading(true)
        //const userUpdate =  doc(usersCollectionRef,userAuth.uid)
        //updateDoc(userUpdate, {
        //    bio: newBio
        //})
       //getDoc(doc(usersCollectionRef,userAuth.uid)).then( (user) =>{
       //     return setUser({...user.data()})
       // })
        //setTimeout(() => setIsLoading(false),2000 )
    }

    return(
        <UpdateUserContext.Provider value={{
            uploadPhoto,
            changeAvatarHandler,
            addBio,
            isLoading,
            error,
            avatar,
            avatarUrl,
        }}>
            {children}
        </UpdateUserContext.Provider>
    )
}