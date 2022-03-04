import { useRouter }            from 'next/router'
import app, { db,storage}       from '../../service/firebase'
import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
import { ref, uploadBytes,getDownloadURL, list} from 'firebase/storage'
import { collection, getDocs,getDoc, doc,setDoc,updateDoc, DocumentData, query, where,documentId} from 'firebase/firestore'
import {User, getAuth,GoogleAuthProvider,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword, AuthErrorCodes, updateProfile} from 'firebase/auth'
import useAuthContext from '../../hook/useAuthContext'
import usePostsContext from '../../hook/usePostsContext'

interface ContextProvider {
    children: ReactNode
}
interface Book{
    id                   ?:string,
    searchInfo?:{
        textSnippet ?:    string
    }
    volumeInfo: {
        title           ?: string
        subtitle        ?: string
        authors         ?: string[]
        publishedDate   ?: string,
        description     ?: string,
        pageCount       ?: number,
        categories      ?: string[]

        imageLinks?:{
            smallThumbnail ?: string
            thumbnail       ?: string
        }
    }
}

interface BooksFirebaseContext{
    isLoading: boolean,
    error?:     string,
    pageRead?:     number,
    averagePages?:     number,
    longestBook?:     Book,
    shortestBook?:     Book,
    lastBookPosted?:     Object,
    bookList?:          Object[],
    getShortestBook?:    () => void,
    teste?:    () => void,
    createBook?: (book: object) => void,
    getBook?: (bookId: string) => void,
    getCountPages?: () => void
    getLongestBook?: () => void
    getAveragePages?: () => void
    getLastBookPosted?: () => void
}

const auth = getAuth(app)

export const BooksFirebaseContext = createContext<BooksFirebaseContext>({
    isLoading:  null,
    pageRead: 0
})

export function BooksFirebaseContextProvider({children}: ContextProvider){

    const {userAuth,getUser,user} = useAuthContext()  
    const {userPosts} = usePostsContext()  

    const booksCollectionRef                = collection(db,"books")
    const usersCollectionRef                = collection(db,"users")
   
    const [bookList, setBookList]           = useState([]); 
    const [error,setError]                  = useState(null)
    const [isLoading,setIsLoading]          = useState(false)
    const [pageRead,setPageRead]            = useState(0)
    const [averagePages,setAveragePages]    = useState(0)
    const [longestBook,setlongestBook]      = useState<Book>()
    const [shortestBook,setShortestBook]    = useState<Book>()
    const [lastBookPosted,setLastBookPosted]= useState<Book>()
    const [book,setBook]                    = useState<Object>()


    function showError(msg,time = 3000){
        setError(msg)
        setTimeout(() => setError(null),time )
    }

    async function getBook (bookId: string){
        getDoc(doc(usersCollectionRef,bookId)).then( (user) =>{
            return setBook({...user.data()})
        })
    }

    async function  createBook (book: Book){
        setIsLoading(true)
        const bookn = await query(booksCollectionRef, where("bookid", "==", book.id));
        const newBook =  doc(booksCollectionRef)
        if(book.id != ""){
            setDoc(newBook, {
                docId: newBook.id,
                bookid:book.id,
                userId: userAuth.uid,
                searchInfo:{
                    textSnippet :    book.searchInfo?.textSnippet || ""
                },
                volumeInfo: {
                    title           : book.volumeInfo?.title || "",
                    subtitle        : book.volumeInfo?.subtitle || "",
                    authors         : book.volumeInfo?.authors|| "",
                    publishedDate   : book.volumeInfo?.publishedDate|| "",
                    description     : book.volumeInfo?.description|| "",
                    pageCount       : book.volumeInfo?.pageCount|| "",
                    categories      : book.volumeInfo?.categories|| "",
                    imageLinks:{
                        smallThaumbnail : book.volumeInfo?.imageLinks.smallThumbnail|| "",
                        thumbnail       : book.volumeInfo?.imageLinks.thumbnail || ''
                    }
                }
            })  

            let list = []
            const userBooks = await query(booksCollectionRef,where("userId", "==", userAuth.uid));
            const querySnapshot = await getDocs(userBooks);
            list = querySnapshot.docs.map((post) => ({...post.data(), id: userAuth.uid}))
            list.push(book)

            const userUpdate =  doc(usersCollectionRef,userAuth.uid)
            updateDoc(userUpdate, {
                books: list
            })  

            getUser()
            setTimeout(() => setIsLoading(false),3000)
        }else{
            showError('',3000)
        }
    }

    const getCountPages = () => {
        let counter = 0
        user?.books.map((book:Book) => {
            counter =  book.volumeInfo.pageCount.valueOf() + counter
        })
        setPageRead(counter)
    }

    const getLongestBook = () => {
        function compare(a,b) {
            if (a.volumeInfo.pageCount < b.volumeInfo.pageCount)
               return 1;
            if (a.volumeInfo.pageCount > b.volumeInfo.pageCount)
              return -1;
            return 0;
        }

        setlongestBook(user.books.sort(compare)[0])

    }

    const getShortestBook = () => {
        function compare(a,b) {
            if (a.volumeInfo.pageCount < b.volumeInfo.pageCount)
               return -1;
            if (a.volumeInfo.pageCount > b.volumeInfo.pageCount)
              return 1;
            return 0;
        }

        setShortestBook(user.books.sort(compare)[0])
    }

    const getAveragePages = () => {
        let list = []
        user.books.map((book:Book) => list.push(book.volumeInfo.pageCount))
        var soma = 0;
        for(var i = 0; i < list.length; i++) {
            soma += list[i];
        }
        const average = Math.ceil(soma / list.length)
        setAveragePages(average)
    }

    const getLastBookPosted = () => {
        let list = user.posts

        for(var i = 0; i < list.length; i++) {
            if(list[i].bookId){
                return setLastBookPosted(list[i])
            }
        }

    }
     
    async function teste(){
        
        console.log(list)
        
    }



    return(
        <BooksFirebaseContext.Provider value={{
            isLoading,
            error,
            pageRead,
            longestBook,
            shortestBook,
            lastBookPosted,
            bookList,
            averagePages,
            createBook,
            getBook,
            teste,
            getCountPages,
            getLongestBook,
            getShortestBook,
            getAveragePages,
            getLastBookPosted
        }}>
            {children}
        </BooksFirebaseContext.Provider>
    )
}