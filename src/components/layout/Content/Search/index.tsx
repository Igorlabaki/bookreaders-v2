import { BookContainer, TextContainer, SearchContainer } from "./style";
import { useEffect } from "react";
import useBookContext from "../../../../hook/useBookContext";
import { BoxComponent } from "../util/Box";


interface SearchProps{
    id?:any
}

export function SearchComponent({id}: SearchProps){

    const {getBook,book,getBookByAuthor,authorsList} = useBookContext()

    useEffect(() => {
        getBook(id)
        getBookByAuthor(book.volumeInfo.authors[0])
    }, [])

    
    return(
        <SearchContainer>
            <BookContainer>
                {
                    book.volumeInfo.imageLinks ?
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />   
                    :
                        <img src='/images/photos/book-default' alt="" /> 
                }
                <TextContainer>
                    <h1>{book.volumeInfo.title}</h1>
                    <h2>{book.volumeInfo.subtitle}</h2>
                    <p>Author:&nbsp;<strong>{book.volumeInfo.authors[0]}</strong></p>
                    <div>
                            <p>Published:&nbsp;{book.volumeInfo.publishedDate}</p>
                            <p>Pages:&nbsp;{book.volumeInfo.pageCount}</p>
                    </div>
                    <div>{book.volumeInfo.description}</div>
                </TextContainer>
           </BookContainer>
           <BoxComponent title={`Other books written by ${book.volumeInfo.authors[0]}`}>
                {
                    authorsList.map((book) =>
                        <p>{book.volumeInfo.title}</p>
                    )
                }
           </BoxComponent>
        </SearchContainer>
    )
}