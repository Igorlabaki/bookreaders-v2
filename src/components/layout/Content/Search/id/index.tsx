import { BookContainer, TextContainer, SearchContainer } from "./style";
import { useEffect } from "react";
import useBookContext from "../../../../../hook/useBookContext";
import { BoxComponent } from "../../util/Box";
import router, { useRouter } from 'next/router'

interface SearchProps{
    id?:any
}

export function SearchComponent({id}: SearchProps){

    const {getBook,book,getBookByAuthor} = useBookContext()
    const router = useRouter()

    useEffect(() => {
        getBook(id)
    }, [router.asPath])


    function handleBookRender(){
        if(book){
            return (
                <>
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
                            <p><strong>Author:</strong>&nbsp;{book.volumeInfo.authors?.at(0)}</p>
                            <p><strong>Category:</strong>&nbsp;{book.volumeInfo?.categories?.at(0)}</p>
                            <div>
                                <p><strong>Published:<strong/></strong>&nbsp;{book.volumeInfo.publishedDate}</p>
                                <p><strong>Pages:<strong/></strong>&nbsp;{book.volumeInfo.pageCount}</p>
                            </div>
                            <div>{book.volumeInfo.description}</div>
                        </TextContainer>
                    </BookContainer>
                    <BoxComponent title={`Other books written by ${book.volumeInfo?.authors[0]}`}>
                
                    </BoxComponent>
                </>
            )
        }else{
            <BookContainer>
                Erro
            </BookContainer>
        }
    }

    return(
        <SearchContainer>
            {handleBookRender()}
        </SearchContainer>
    )
}
