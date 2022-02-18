import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
import axios from 'axios'

interface ContextProvider {
    children: ReactNode
}

interface book{
    id                   ?:string,
    volumeInfo: {
        title           ?: string
        subtitle        ?: string
        authors         ?: string[]
        publishedDate   ?: string,
        description     ?: string,
        pageCount       ?: number,
        categories      ?: string[]

        imageLinks:{
            smallThaumbnail : string
            thumbnail       : string
        }
    }
}

interface BookContext{
    book:               book 
    booksList?:         book[],
    booksSearch?:       book[],
    loading?:           boolean,
    currentPage?:       number
    booksPerPage?:      number
    setCurrentPage?:    Dispatch<SetStateAction<number>>
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
    const [currentPage, setCurrentPage]         = useState<number>(1);
    const [booksPerPage, setbooksPerPage]       = useState<number>(5);
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
        setAuthorList(resp)
    }

    return(
        <BookContext.Provider value={{  
            book,
            booksList,
            booksSearch,
            loading,
            currentPage,
            setCurrentPage,
            booksPerPage,
            getBook,
            getBooks,
            getAllBooks,
        }}>
            {children}
        </BookContext.Provider>
    )
}