import {createContext,ReactNode,useState} from 'react'

interface ModalContextProvider {
    children: ReactNode
}
interface ModalContext{
    isLoginModalOpen        : boolean,
    handleOpenLoginModal    ?:() => void,
    handleCloseLoginModal   ?:() => void,

    isRegisterModalOpen     : boolean,
    handleOpenRegisterModal ?:() => void,
    handleCloseRegisterModal?:() => void,

    isConfigModalOpen       : boolean,
    handleOpenConfigModal   ?:() => void,
    handleCloseConfigModal  ?:() => void,

    isPhotoModalOpen       : boolean,
    handleOpenPhotoModal   ?:() => void,
    handleClosePhotoModal  ?:() => void,

    isSearchModalOpen       : boolean,
    handleOpenSearchModal   ?:() => void,
    handleCloseSearchModal  ?:() => void,

    isPostBookModalOpen       : boolean,
    handleOpenPostBookModal   ?:() => void,
    handleClosePostBookModal  ?:() => void,

    renderText              ?:(title:string) => void
}

const initialState: ModalContext = {
    isLoginModalOpen        : false,
    isRegisterModalOpen     : false,
    isConfigModalOpen       : false,
    isPhotoModalOpen        : false,
    isSearchModalOpen       : false,
    isPostBookModalOpen     : false
}

export const ModalContext = createContext<ModalContext>(initialState)

export function ModalContextProvider( {children}: ModalContextProvider){
 
    const [isLoginModalOpen,        setisLoginModalOpen]        = useState(Boolean);
    const [isRegisterModalOpen,     setisRegisterModalOpen]     = useState(Boolean);
    const [isConfigModalOpen,       setisConfigModalOpen]       = useState(Boolean);
    const [isPhotoModalOpen,        setisPhotoModalOpen]        = useState(Boolean);
    const [isSearchModalOpen,       setisSearchModalOpen]       = useState(Boolean);
    const [isPostBookModalOpen,     setisPostBookModalOpen]       = useState(Boolean);

    
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

    function handleOpenPhotoModal(){
        setisPhotoModalOpen(true)
    }

    function handleClosePhotoModal(){
        setisPhotoModalOpen(false)
    }

    function handleOpenSearchModal(){
        setisPhotoModalOpen(true)
    }

    function handleCloseSearchModal(){
        setisPhotoModalOpen(false)
    }
    function handleOpenPostBookModal(){
        setisPostBookModalOpen(true)
    }

    function handleClosePostBookModal(){
        setisPostBookModalOpen(false)
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
                }}>Create an account here.
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
            }}> Click here.</button>
            </p>
            </div>
            )
        }
    }

    return(
        <ModalContext.Provider value={{
            isLoginModalOpen,
            handleOpenLoginModal,
            handleCloseLoginModal,

            isRegisterModalOpen,
            handleOpenRegisterModal,
            handleCloseRegisterModal,

            isConfigModalOpen,
            handleCloseConfigModal,
            handleOpenConfigModal,

            
            isPhotoModalOpen,
            handleClosePhotoModal,
            handleOpenPhotoModal,

            isSearchModalOpen,
            handleOpenSearchModal,   
            handleCloseSearchModal,

            isPostBookModalOpen,
            handleOpenPostBookModal,
            handleClosePostBookModal,

            renderText
        }}>
            {children}
        </ModalContext.Provider>
    )
}