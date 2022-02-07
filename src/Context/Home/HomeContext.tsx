import {createContext,ReactNode,useState} from 'react'
import ModalComponent from '../../components/Home/Modal';

interface ContextProvider {
    children: ReactNode
}


interface HomeContext{
    isLoginModalOpen        : boolean,
    isRegisterModalOpen     : boolean,
    handleOpenLoginModal    ?:() => void,
    handleCloseLoginModal   ?:() => void,
    handleOpenRegisterModal ?:() => void,
    handleCloseRegisterModal?:() => void
}

const initialState: HomeContext = {
    isLoginModalOpen: false,
    isRegisterModalOpen:false
}
export const HomeContext = createContext<HomeContext>(initialState)

export function ContextProvider( {children}: ContextProvider){
 
    const [isLoginModalOpen,    setisLoginModalOpen]    = useState(Boolean);
    const [isRegisterModalOpen, setisRegisterModalOpen] = useState(Boolean);
    
    function handleOpenLoginModal(){
        setisLoginModalOpen(true)
    }
    
    function handleCloseLoginModal(){
        setisLoginModalOpen(false)
    }

    function handleOpenRegisterModal(){
        setisRegisterModalOpen(true)
    }

    function handleCloseRegisterModal(){
        setisRegisterModalOpen(false)
    }

    return(
        <HomeContext.Provider value={{
            isLoginModalOpen,
            isRegisterModalOpen,
            handleOpenLoginModal,
            handleCloseLoginModal,
            handleOpenRegisterModal,
            handleCloseRegisterModal,
        }}>
            {children}
        </HomeContext.Provider>
    )
}