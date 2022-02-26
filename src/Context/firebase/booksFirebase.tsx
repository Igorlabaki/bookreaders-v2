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
interface Book{
    id                   ?:string,
    searchInfo:{
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

        imageLinks:{
            smallThaumbnail ?: string
            thumbnail       ?: string
        }
    }
}

interface BooksFirebaseContext{
    isLoading: boolean,
    error?:     string,
    createBook?: (book: object) => void,
}

const auth = getAuth(app)

export const BooksFirebaseContext = createContext<BooksFirebaseContext>({
    isLoading:  null
})

export function BooksFirebaseContextProvider({children}: ContextProvider){

    const {userAuth,getUser} = useAuthContext()

    const booksCollectionRef                = collection(db,"books")
    const usersCollectionRef                = collection(db,"users")
   
    const [bookList, setBookList]         = useState([]); 
    const [error,setError]                  = useState(null)
    const [isLoading,setIsLoading]          = useState(false)


    function showError(msg,time = 3000){
        setError(msg)
        setTimeout(() => setError(null),time )
    }

    async function  createPostBook (book: Book){
        setIsLoading(true)
        if(book.id != ""){
          
        }else{
            showError('',3000)
        }
    }

    async function  createBook (book: Book){
        setIsLoading(true)
        if(book.id != ""){
            const newBook =  doc(booksCollectionRef)
            setDoc(newBook, {
                id:book.id,
                searchInfo:{
                    textSnippet :    book.searchInfo?.textSnippet
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
                        smallThaumbnail : book.volumeInfo?.imageLinks.smallThaumbnail|| "",
                        thumbnail       : book.volumeInfo?.imageLinks.thumbnail || ''
                    }
                }
            })
            bookList.push(book)
            const userUpdate =  doc(usersCollectionRef,auth.currentUser.uid)
            updateDoc(userUpdate, {
                books: bookList
            })

            getUser()
            setTimeout(() => setIsLoading(false),3000)
        }else{
            showError('',3000)
        }
    }

    return(
        <BooksFirebaseContext.Provider value={{
            isLoading,
            error,
            createBook
        }}>
            {children}
        </BooksFirebaseContext.Provider>
    )
}