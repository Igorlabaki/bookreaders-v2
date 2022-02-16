import { BookContainer, Container, ResultListContainer, SerachInputContainer } from "./style";
import {FiSearch} from "react-icons/fi"
import { useEffect, useState } from "react";
import useBookContext from "../../../../hook/useBookContext";
import {useRouter} from 'next/router'

export function SearchInput(){ 
    const {books,getBooks}                      = useBookContext()

    const [search, setSearch]                   = useState('')
    const [erro,setError]                       = useState('')

    const router = useRouter()
    
    useEffect(() => {
        try {
            if(search != ""){
                getBooks(search,5)
            }
        } catch (error) {
            setError('Nao encontramos nenhum livro')
        }
    }, [search])

    
    function handleResultContainer(){
        if(books.length > 0 && search != ""){
            return(
                <ResultListContainer>
                {
                    books.map((book,i) => 
                        <BookContainer key={i} onClick={() => router.push(`/search/${book.id}`)}>       
                            {
                                book.volumeInfo.imageLinks ?
                                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
                                :
                                    <img src="/images/photos/book-default.jpg" alt="" />

                            }            
                            <div>
                                <p>{book.volumeInfo.title}</p>
                                <h4>{book.volumeInfo?.authors?.at(0)}</h4>
                            </div>
                        </BookContainer>
                    )
                }
                <button>Se all</button>
                </ResultListContainer>
            )
        }else{
            return ""
        }
    }

    return (
        <Container>
            <SerachInputContainer>
                <button type="submit">
                    <FiSearch fontSize={20} color="white"/>
                </button>
                <input type="text"  placeholder="Find your book..." value={search}  onChange={e => setSearch(e.target.value)} />
            </SerachInputContainer>
            {handleResultContainer()}
        </Container>
    )
}