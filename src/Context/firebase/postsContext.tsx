import { db}       from '../../service/firebase'
import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
import { collection, getDocs,orderBy, doc,setDoc,updateDoc, query, where, deleteDoc,documentId, QuerySnapshot, getDoc} from 'firebase/firestore'
import useAuthContext from '../../hook/useAuthContext'

interface ContextProvider {
    children: ReactNode
}
interface Post{
    postId:     string
    uid:      string
    text?:     string
    username?: string,
    photoUrl?: string,
    bookTitle?: string,
    postedAt?: Date
    bookId?: string
    bookSearchInfo?: string,
    bookphotoUrl?: string
    bookAuthor?: string
    bookpageCount?: number
}

interface PostsContext{
    error?:                 string,
    isLoading?:             boolean,
    posts?:                 any[]
    userPosts?:             any[]
    createPost?:            (post: object) => void,
    createBookPost?:        (post: object) => void,
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

    const {userAuth,getUser} = useAuthContext()

    const postsCollectionRef                = collection(db,"posts")
    const usersCollectionRef                = collection(db,"users")

    const [posts, setPosts]                 = useState([]);
    const [error,setError]                  = useState(null)
    const [userPosts, setUserPosts]         = useState([]); 
    const [comentsPosts, setComentsPosts]   = useState([]); 
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
            //setLoading
            setIsLoading(true)

            //cria um post no banco de dados
            const newPost =  doc(postsCollectionRef)
            setDoc(newPost, {
                uid:        userAuth.uid,
                username:   post.username,
                text:       post.text,
                photoUrl:   post.photoUrl,
                postedAt:   post.postedAt,
                coments: []
            })

            //Update no bando de dados empurrando o post
            userPosts.push(post)
            const newUser =  doc(usersCollectionRef,userAuth.uid)
            updateDoc(newUser, {
                posts: userPosts
            })
            
            //Atualiza o usuario!
            getUser()
            
            setTimeout(() => setIsLoading(false),3000)
        }else{
            showError('',3000)
        }
    }

    async function  createComentPost (post: Post,){
        if(post.text != ""){
            //setLoading
            setIsLoading(true)
            //Update no bando de dados empurrando o post
            comentsPosts.push(post)
            const selectedPost =  doc(postsCollectionRef,userAuth.uid)
            updateDoc(selectedPost, {
                coments: comentsPosts
            })
            
            //Atualiza o usuario!
            getUser()
            
            setTimeout(() => setIsLoading(false),3000)
        }else{
            showError('',3000)
        }
    }

    async function  createBookPost (post: Post,){
        if(post.text != ""){
            //setLoading
            setIsLoading(true)

            //cria um post no banco de dados
            const newPost =  doc(postsCollectionRef)
            setDoc(newPost, {
                postId:     newPost.id,
                userId:     userAuth.uid,
                username:   post.username,
                text:       post.text,
                photoUrl:   post.photoUrl,
                postedAt:   post.postedAt,
                bookId:     post.bookId,
                bookTitle:  post.bookTitle,
                bookSearchInfo: post.bookSearchInfo,
                bookphotoUrl: post.bookphotoUrl,
                bookAuthor: post.bookAuthor,
                bookpageCount: post.bookpageCount,
                coments: [] 
            })
            //Update no bando de dados empurrando o post
            userPosts.push(post)
            console.log(userPosts)
            const newUser =  doc(usersCollectionRef,userAuth.uid)
            updateDoc(newUser, {
                posts: userPosts
            })
            
            //Atualiza o usuario!
            getUser()
            
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
        const postsUser = await query(postsCollectionRef, where("userId", "==", userAuth.uid));
        const querySnapshot = await getDocs(postsUser);
        setUserPosts(querySnapshot.docs.map((post) => ({...post.data(), id: userAuth.uid})))
        
    }

    async function  deletePost (postId: string){
        const post = await query(postsCollectionRef, where("postId", "==", postId));
     
        const postUser = await doc(postsCollectionRef, postId);
        console.log(postUser)
    }

    return(
        <PostsContext.Provider value={{
            getPosts,
            getUserPosts,
            createPost,
            createBookPost,
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