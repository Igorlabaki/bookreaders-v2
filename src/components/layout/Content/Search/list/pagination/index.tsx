import useBookContext from "../../../../../../hook/useBookContext"
import { ButtonArrow, PaginationContainer } from "./style"
import { IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';

export function PaginationComponent(){

    const {booksList,setCurrentPage,booksPerPage,currentPage} = useBookContext()
    const totalBooks    = booksList.length
    const pageNumbers   = []
    const totalPages    =  totalBooks/booksPerPage

   for(let i = 1; i <= Math.ceil(totalPages); i++){
        pageNumbers.push(i)
    }

    function addPage(){
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    }

    function downPage(){
        if(currentPage >= 1){
            setCurrentPage(currentPage - 1)
        }
    }
    
    return (
        <PaginationContainer>
            {currentPage > 1 ? <ButtonArrow onClick={() => downPage()}><IoIosArrowBack fontSize={20}/></ButtonArrow> : ""}
            {
                pageNumbers.map( number =>(
                    <li key={number} className={ number === currentPage ? 'currentPage' : ''}>
                            <a onClick={() => setCurrentPage(number)} >{number}</a>
                    </li>
                ))
            }
            {currentPage < totalPages  ? <ButtonArrow onClick={() => addPage()}><IoIosArrowForward fontSize={20}/></ButtonArrow> : ""}
        </PaginationContainer>
    )
}