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
    author?:            string
    books?:             book[],
    error?:             string
    authorsList?:       book[]
    getBooks?:          (bookSearch:string, maxResult: number) => void
    getBook?:           (id:any) => void
    getBookByAuthor?:   (author:any) => void
}

export const BookContext = createContext<BookContext>({
    book: null,
})

export function BookContextProvider({children}: ContextProvider){
   
    const [book, setBook]                       = useState<book | null>(null);
    const [books, setBooks]                     = useState<book[]>([]);
    const [authorsList, setAuthorList]          = useState<book[]>([]);
    const [error,setError]                      = useState('')

    async function  getBooks(bookSearch,maxResults = 10){
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${bookSearch}&key=AIzaSyCQPpX0QFUTs45EhUe1Ou5FNjEAjjvtYRQ&maxResults=${maxResults}`)
                   .then(resp => resp.data.items) 
        setBooks(resp)
    }

    async function  getBook(id:any){
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
                   .then(resp => resp.data)
        setBook(resp)
        console.log(book)
    }

    async function  getBookByAuthor(author:string){
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/${author}+inauthor`)
                   .then(resp => resp.data.items)
        setAuthorList(resp)
    }


    return(
        <BookContext.Provider value={{  
            book,
            authorsList,
            books,
            error,
            getBook,
            getBooks,
            getBookByAuthor
        }}>
            {children}
        </BookContext.Provider>
    )
}