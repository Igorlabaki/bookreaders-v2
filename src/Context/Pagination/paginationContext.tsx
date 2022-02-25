import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'

interface PaginationContextProvider {
    children: ReactNode
}
interface PaginationContext{
  currentPage    : number
  elementsPerPage : number
  setCurrentPage?:  Dispatch<SetStateAction<number>>
}

const initialState: PaginationContext = {
    currentPage: 1,
    elementsPerPage: 5
}

export const PaginationContext = createContext<PaginationContext>(initialState)

export function PaginationContextProvider( {children}: PaginationContextProvider){
 
    const [currentPage, setCurrentPage] = useState(1)
    const [elementsPerPage, setelementsPerPage] = useState(5)

    return(
        <PaginationContext.Provider value={{
            setCurrentPage,
            currentPage,
            elementsPerPage
        }}>
            {children}
        </PaginationContext.Provider>
    )
}