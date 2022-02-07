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
    handleCloseRegisterModal?:() => void,
    renderText              ?:(title:string) => void
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

    function renderText(title: string){
        if(title == "Login"){
            return(
                <div className='redirect-text'>
                <p className="mt-8">
                Are you new here? 
                <button  onClick={(e) => {
                    e.preventDefault() 
                    handleCloseLoginModal()
                    handleOpenRegisterModal()
                }}>Create a account here.
                </button>
                </p>
            </div>
            )
        }else{
            return(
            <div className='redirect-text'>
            <p className="mt-8">
            Do you already have an account?
            <button onClick={(e) => {
                e.preventDefault() 
                handleCloseRegisterModal()
                handleOpenLoginModal()
                console.log(isLoginModalOpen)
            }}> Click here.</button>
            </p>
            </div>
            )
        }
    }

    return(
        <HomeContext.Provider value={{
            isLoginModalOpen,
            isRegisterModalOpen,
            handleOpenLoginModal,
            handleCloseLoginModal,
            handleOpenRegisterModal,
            handleCloseRegisterModal,
            renderText
        }}>
            {children}
        </HomeContext.Provider>
    )
}