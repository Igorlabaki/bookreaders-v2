import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'

interface PaginationContextProvider {
    children: ReactNode
}
interface PaginationContext{
  currentPage    : number
  elementsPerPage : number
  totalElements ?: number
  setCurrentPage?:  Dispatch<SetStateAction<number>>
  setTotalElements?:  Dispatch<SetStateAction<number>>
}

const initialState: PaginationContext = {
    currentPage: 1,
    elementsPerPage: 5
}

export const PaginationContext = createContext<PaginationContext>(initialState)

export function PaginationContextProvider( {children}: PaginationContextProvider){
 
    const [currentPage, setCurrentPage]         = useState(1)
    const [elementsPerPage, setElementsPerPage] = useState(5)
    const [totalElements, setTotalElements]     = useState()

    return(
        <PaginationContext.Provider value={{
            setCurrentPage,
            setTotalElements,
            totalElements,
            currentPage,
            elementsPerPage
        }}>
            {children}
        </PaginationContext.Provider>
    )
}