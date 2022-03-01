import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
import axios from 'axios'

interface ContextProvider {
    children: ReactNode
}

interface book{
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
            smallThumbnail ?: string
            thumbnail       ?: string
        }
    }
}

interface BookContext{
    book:               book 
    booksList?:         book[],
    booksSearch?:       book[],
    loading?:           boolean,
    currentBookPage?:   number
    booksPerPage?:      number
    setCurrentBookPage?:Dispatch<SetStateAction<number>>
    getAllBooks?:       (bookSearch:any) => void
    getBooks?:          (bookSearch:any, maxResult?: number) => void
    getBook?:           (id:any) => void
}

export const BookContext = createContext<BookContext>({
    book: null,
})

export function BookContextProvider({children}: ContextProvider){
   
    const [book, setBook]                       = useState<book | null>(null);
    const [booksList, setBooksList]             = useState<book[]>([]);
    const [booksSearch, setBooksSearch]         = useState<book[]>([]);
    const [loading, setLoading]                 = useState<boolean>(false);
    const [currentBookPage, setCurrentBookPage]         = useState<number>(1);
    const [booksPerPage, setBooksPerPage]       = useState<number>(5);
    const [authorsList, setAuthorList]          = useState<book[]>([]);

    async function  getBooks(bookSearch:any,maxResults = 10){
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${bookSearch}&key=AIzaSyCQPpX0QFUTs45EhUe1Ou5FNjEAjjvtYRQ&maxResults=${maxResults}`)
                   .then(resp => resp.data.items) 
        setBooksSearch(resp)
    }

    async function  getAllBooks(bookSearch:any){
        setLoading(true)
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${bookSearch}&key=AIzaSyCQPpX0QFUTs45EhUe1Ou5FNjEAjjvtYRQ&maxResults=40`)
                   .then(resp => resp.data.items) 
        setBooksList(resp)
        setLoading(false)
    }

    async function  getBook(id:any){
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
                   .then(resp => resp.data)
        setBook(resp)
    }

    async function  getBookByAuthor(author:string){
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/${author}+inauthor`)
                   .then(resp => resp.data.items)
        console.log(resp)
        setAuthorList(resp)
    }

    return(
        <BookContext.Provider value={{  
            book,
            booksList,
            booksSearch,
            loading,
            currentBookPage,
            setCurrentBookPage,
            booksPerPage,
            getBook,
            getBooks,
            getAllBooks,
        }}>
            {children}
        </BookContext.Provider>
    )
}