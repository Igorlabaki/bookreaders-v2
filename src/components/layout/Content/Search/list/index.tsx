import { useEffect }            from "react";
import { TiPlus }               from 'react-icons/ti';
import { useRouter }            from "next/router";
import { BoxComponent }         from "../../util/Box";
import { PaginationComponent }  from "../../util/pagination";
import { BookContainer, SearchContainer, TextContainer,UserReviewContainer } from "./style";
import useBookContext from "../../../../../hook/useBookContext";
import usePaginationContext from "../../../../../hook/usePaginationContext";
import useBookFirebaseContext from "../../../../../hook/useBooksFirebaseContext";
import usePostsContext from "../../../../../hook/usePostsContext";
import useAuthContext from "../../../../../hook/useAuthContext";
import moment from "moment";


interface SearchProps{
    search?:any
}

export function SearchListComponent({search}: SearchProps){

    const {getAllBooks,booksList} = useBookContext()
    const {currentPage, setCurrentPage, elementsPerPage} = usePaginationContext()
    const {createBook} = useBookFirebaseContext()
    const {createBookPost} = usePostsContext()
    const {user} = useAuthContext()
    const router = useRouter()
    
    useEffect(() => {
        getAllBooks(search.list)
        console.log(booksList)
    }, [search.list])
    
    const indexOfLastBook   = currentPage       * elementsPerPage
    const indexOfFirstPost  = indexOfLastBook       - elementsPerPage
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
                        <button 
                            onClick={(e) => {
                                e.preventDefault(); 
                                createBook(book)
                                createBookPost({
                                    text: 'Nice Book!', 
                                    uid:user.uid,
                                    photoUrl:user.avatar,
                                    username: user.username,
                                    postedAt: moment().format('MMMM Do YYYY, h:mm:ss a'), 
                                    bookTitle: book.volumeInfo.title,
                                    bookSearchInfo: book.searchInfo.textSnippet,
                                    bookphotoUrl: book.volumeInfo.imageLinks?.smallThumbnail,
                                    bookAuthor: book.volumeInfo.authors[0],
                                    bookpageCount: book.volumeInfo.pageCount
                                })
                            }
                        }
                        >
                            <TiPlus/> <span>Add in your list</span> 
                        </button>
                    </UserReviewContainer>
                    </BookContainer>
                </BoxComponent>
            )}
            <PaginationComponent type="books"/>
        </SearchContainer>
    )
}
