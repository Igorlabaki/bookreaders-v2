import { db}       from '../../service/firebase'
import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
import { collection, getDocs, doc,setDoc,updateDoc, query, where, getDoc,orderBy, deleteDoc} from 'firebase/firestore'
import useAuthContext from '../../hook/useAuthContext'

interface ContextProvider {
    children: ReactNode
}
export interface Post{
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
    createComentPost?:      (post: object) => void,
    teste?:                 (postId: string) => void,   
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

    const postsCollectionRef                    = collection(db,"posts")
    const usersCollectionRef                    = collection(db,"users")
    const commentsCollectionRef                 = collection(db,"comments")
    const booksCollectionRef                    = collection(db,"books")

    const [posts, setPosts]                 = useState([]);
    const [post, setPost]                   = useState<Object>();
    const [error,setError]                  = useState(null)
    const [userPosts, setUserPosts]         = useState([]); 
    const [isLoading,setIsLoading]          = useState(false)
    const [currentPostPage, setCurrentPostPage] = useState<number>(1);
    const [postsPerPage, setPostsPerPage]   = useState<number>(5);

    function showError(msg,time = 3000){
        setError(msg)
        setTimeout(() => setError(null),time )
    }

    const getPost = async (postId:string) => {
        getDoc(doc(postsCollectionRef,postId)).then( (user) =>{
            return setPost({...user.data()})
        })
   }

    async function  createPost (post: Post,){
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
                comments: []
            })
            
            let list =[]
            const postsUser = await query(postsCollectionRef, where("userId", "==", userAuth.uid), orderBy('postedAt','desc'));
            const querySnapshot = await getDocs(postsUser);
            querySnapshot.docs.map((post) => (list.push({...post.data(), id: userAuth.uid})))

            //Update no bando de dados empurrando o post
            const newUser =  doc(usersCollectionRef,userAuth.uid)
            updateDoc(newUser, {
                posts: list
            })
            
            //Atualiza o usuario!
            getUser()
            
            setTimeout(() => setIsLoading(false),3000)
        }else{
            showError('',3000)
        }
    }

    async function  createComentPost (post: Post){
        if(post.text != ""){
            //setLoading
            setIsLoading(true)

            const newComment =  doc(commentsCollectionRef)
            setDoc(newComment, {
                commenttId: newComment.id,
                postId:     post.postId,
                userId:     userAuth.uid,
                username:   post.username,
                text:       post.text,
                photoUrl:   post.photoUrl,
                postedAt:   post.postedAt,
            })

            const commentsList = []

            const postsComments = await query(commentsCollectionRef, where("postId", "==", post.postId), orderBy('postedAt','asc'));
            const querySnapshot = await getDocs(postsComments);
            querySnapshot.docs.map((post) => (commentsList.push({...post.data(), id: userAuth.uid})))

            const postSelected =  doc(postsCollectionRef,post.postId)
            updateDoc(postSelected, {
                comments: commentsList
            })

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
                comments: [] 
            })

            let list =[]
            const postsUser = await query(postsCollectionRef, where("userId", "==", userAuth.uid), orderBy('postedAt','desc'));
            const querySnapshot = await getDocs(postsUser);
            querySnapshot.docs.map((post) => (list.push({...post.data(), id: userAuth.uid})))

            //Update no bando de dados empurrando o post

            const newUser =  doc(usersCollectionRef,userAuth.uid)
            updateDoc(newUser, {
                posts: list
            })
            setUserPosts(list)
            //Atualiza o usuario!
            getUser()
            
            setTimeout(() => setIsLoading(false),3000)
        }else{
            showError('',3000)
        }
    }


    async function  getPosts (){
        const postsUser = await query(postsCollectionRef, orderBy('postedAt','desc'));
        const data = await getDocs(postsUser)
        setPosts(data.docs.map((post) => ({...post.data()})))
    }

    async function  getUserPosts (){
        const postsUser = await query(postsCollectionRef, where("userId", "==", userAuth.uid), orderBy('postedAt','desc'));
        const querySnapshot = await getDocs(postsUser);
        setUserPosts(querySnapshot.docs.map((post) => (({...post.data(), id: userAuth.uid}))))
    }



    async function  deletePost (postId: string){
        const postUser = await doc(postsCollectionRef, postId);
        deleteDoc(postUser)
        getUserPosts()
    }

    async function teste(postId:string){
     
    }

    return(
        <PostsContext.Provider value={{
            getPosts,
            createPost,
            createBookPost,
            createComentPost,
            deletePost,
            setCurrentPostPage,
            teste,
            getUserPosts,
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