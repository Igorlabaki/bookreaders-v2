import { useRouter }            from 'next/router'
import app, { db,storage}       from '../../service/firebase'
import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
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

interface PostsContext{
    error?:                 string,
    isLoading?:             boolean,
    posts?:                 any[]
    userPosts?:             any[]
    createPost?:            (post: object) => void,
    getUserPosts?:          () => void
    getPosts?:              () => void
    deletePost?:            (id:string) => void

    currentPostPage?:       number
    postsPerPage?:          number
    setCurrentPostPage?:    Dispatch<SetStateAction<number>>
}

export const PostsContext = createContext<PostsContext>({
    isLoading:  null
})

export function PostsContextProvider({children}: ContextProvider){

    const {userAuth} = useAuthContext()

    const postsCollectionRef                = collection(db,"posts")
   
    const [posts, setPosts]                 = useState([]);
    const [userPosts, setUserPosts]         = useState([]); 
    const [error,setError]                  = useState(null)
    const [isLoading,setIsLoading]          = useState(false)
    const [currentPostPage, setCurrentPostPage] = useState<number>(1);
    const [postsPerPage, setPostsPerPage]   = useState<number>(5);
    const [postList, setPostList]           = useState([])

    function showError(msg,time = 3000){
        setError(msg)
        setTimeout(() => setError(null),time )
    }

    async function  createPost (post: Post,){
        if(post.text != ""){
            setIsLoading(true)
            const newPost =  doc(postsCollectionRef)
            setDoc(newPost, {
                uid:        userAuth.uid,
                username:   post.username,
                text:       post.text,
                photoUrl:   post.photoUrl,
                postedAt:   post.postedAt
            })
            if(post.uid == userAuth.uid){
                userPosts.push(post)
            }
            postList.push(newPost.id)
            setTimeout(() => setIsLoading(false),3000)
        }else{
            showError('',3000)
        }
    }

    async function  getPosts (){
        const data = await getDocs(postsCollectionRef)
        setPosts(data.docs.map((post) => ({...post.data()})))
    }

    async function  getUserPosts (){
        const postsUser = await query(postsCollectionRef, where("uid", "==", userAuth.uid));
        const querySnapshot = await getDocs(postsUser);
        setUserPosts(querySnapshot.docs.map((post) => ({...post.data(), id: userAuth.uid})))
        
    }

    async function  deletePost (id: string){
        const postUser = await query(postsCollectionRef, where(postsCollectionRef.id, "==", id));
        
    }

    return(
        <PostsContext.Provider value={{
            getPosts,
            getUserPosts,
            createPost,
            deletePost,
            setCurrentPostPage,
            currentPostPage,
            postsPerPage,
            isLoading,
            error,
            posts,
            userPosts
        }}>
            {children}
        </PostsContext.Provider>
    )
}