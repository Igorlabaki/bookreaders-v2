import {useRouter}              from 'next/router'
import {FiSearch}               from "react-icons/fi"
import { useEffect, useState }  from "react";
import { BookContainer, Container, ErrorContainer, ResultListContainer, SerachInputContainer } from "./style";
import useBookContext from "../../../../hook/useBookContext";

export function SearchInput(){ 

    const {booksSearch,getBooks} = useBookContext()

    const [search, setSearch]                   = useState('')
    const [error,setError]                      = useState('Sorry we didnt find any book!')

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
        if(booksSearch && search != ""){
            return(
                <ResultListContainer>
                {
                    booksSearch.map((book,i) => 
                        <BookContainer key={i} onClick={() =>{ 
                            router.push(`/search/id/${book.id}`)
                            setSearch('')
                        }
                        }>       
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
                <button onClick={() => {
                    router.push(`/search/list/${search}`)
                    setSearch('')
                }}>Se all</button>
                </ResultListContainer>
            )
        }else if(search != ""){
            return (
                <ErrorContainer>
                    <p>{error}</p>
                </ErrorContainer>
            )
        }
    }

    return (
        <Container>
            <SerachInputContainer action={`/search/list/${search}`}>
                <button type="submit" onClick={() => {router.push(`/search/list/${search}`); setSearch('')}}>
                    <FiSearch fontSize={20} color="wheat"/>
                </button>
                <input type="text"  placeholder="Find your book..." value={search}  onChange={e => setSearch(e.target.value)} />
            </SerachInputContainer>
            {handleResultContainer()}
        </Container>
    )
}