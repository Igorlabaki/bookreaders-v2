import {createContext,ReactNode,useState} from 'react'

interface ModalContextProvider {
    children: ReactNode
}
interface ModalContext{
    isLoginModalOpen        : boolean,
    isRegisterModalOpen     : boolean,
    isConfigModalOpen       : boolean,
    handleOpenLoginModal    ?:() => void,
    handleCloseLoginModal   ?:() => void,
    handleOpenRegisterModal ?:() => void,
    handleCloseRegisterModal?:() => void,
    handleCloseConfigModal  ?:() => void,
    handleOpenConfigModal   ?:() => void,
    renderText              ?:(title:string) => void
}

const initialState: ModalContext = {
    isLoginModalOpen        : false,
    isRegisterModalOpen     : false,
    isConfigModalOpen       : false
}
export const ModalContext = createContext<ModalContext>(initialState)

export function ModalContextProvider( {children}: ModalContextProvider){
 
    const [isLoginModalOpen,        setisLoginModalOpen]        = useState(Boolean);
    const [isRegisterModalOpen,     setisRegisterModalOpen]     = useState(Boolean);
    const [isConfigModalOpen,       setisConfigModalOpen]       = useState(Boolean);

    
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

    function handleOpenConfigModal(){
        setisConfigModalOpen(true)
    }

    function handleCloseConfigModal(){
        setisConfigModalOpen(false)
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
        <ModalContext.Provider value={{
            isLoginModalOpen,
            isRegisterModalOpen,
            isConfigModalOpen,
            handleOpenLoginModal,
            handleCloseLoginModal,
            handleOpenRegisterModal,
            handleCloseRegisterModal,
            handleCloseConfigModal,
            handleOpenConfigModal,
            renderText
        }}>
            {children}
        </ModalContext.Provider>
    )
}