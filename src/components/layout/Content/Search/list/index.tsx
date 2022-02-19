import { BookContainer, SearchContainer, TextContainer, UserRatingContainer, UserReviewContainer } from "./style";
import { useEffect } from "react";
import useBookContext from "../../../../../hook/useBookContext";
import { BoxComponent } from "../../util/Box";
import { TiPlus } from 'react-icons/ti';
import { useRouter } from "next/router";
import { PaginationComponent } from "./pagination";


interface SearchProps{
    search?:any
}

export function SearchListComponent({search}: SearchProps){

    const {getAllBooks,booksList,currentPage,booksPerPage,setCurrentPage} = useBookContext()
    const router = useRouter()
    
    useEffect(() => {
        getAllBooks(search.list)
        console.log(booksList)
    }, [search.list])
    
    const indexOfLastBook   = currentPage       * booksPerPage
    const indexOfFirstPost  = indexOfLastBook   - booksPerPage
    const currentBooks      = booksList.slice(indexOfFirstPost,indexOfLastBook)
    
    return(
        <SearchContainer>
            {currentBooks.map((book) => 
                <BoxComponent title={book.volumeInfo.title} key={book.id}>
                    <BookContainer>
                    {
                        book.volumeInfo.imageLinks ?
                            <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
                        :
                            <img src="/images/photos/book-default.jpg" alt="" />

                    }
                    <TextContainer>
                        <h5>{book.volumeInfo.subtitle}</h5>
                            <p><strong>Author:</strong>&nbsp;{book.volumeInfo.authors?.at(0)}</p>
                            <p><strong>Category:</strong>&nbsp;{book.volumeInfo?.categories?.at(0)}</p>
                            <div>
                                <p><strong>Published:<strong/></strong>&nbsp;{book.volumeInfo.publishedDate}</p>
                                <p><strong>Pages:<strong/></strong>&nbsp;{book.volumeInfo.pageCount}</p>
                            </div>
                    </TextContainer>
                    <UserReviewContainer>
                        <p onClick={() => 
                            {router.push(`/search/id/${book.id}`)
                            setCurrentPage(1)}
                        }>More details</p>
                        <button><TiPlus/> <span>Add in your list</span> </button>
                    </UserReviewContainer>
                    </BookContainer>
                </BoxComponent>
            )}
            <PaginationComponent/>
        </SearchContainer>
    )
}
