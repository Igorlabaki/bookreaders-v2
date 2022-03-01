import useBookContext from "../../../../../hook/useBookContext"
import { ButtonArrow, PaginationContainer } from "./style"
import { IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';
import usePostsContext from "../../../../../hook/usePostsContext";
import { useEffect, useState } from "react";
import usePaginationContext from "../../../../../hook/usePaginationContext";

interface PaginationProps{
    type:string
}

export function PaginationComponent({type}:PaginationProps){

    const {booksList}                   = useBookContext()
    const {posts,userPosts}             = usePostsContext()
    const {currentPage,setCurrentPage,totalElements,setTotalElements,elementsPerPage}  = usePaginationContext()

    if(type.includes('books')){
        setTotalElements(booksList.length) 
    }
    if(type.includes('userPost')){
        setTotalElements( userPosts.length) 
    }

    if(type.includes('allPost')){
        setTotalElements( posts.length) 
    }   
    
    const pageNumbers   = [] 
    const totalPages    =  totalElements/elementsPerPage

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
        <>
       { totalPages > 1 ?  
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
        :
        "" 
        }
        </>
    )
}