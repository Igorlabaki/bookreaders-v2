import Modal from 'react-modal';
import useModalContext from '../../../hook/useModalContext';
import { ModalContainer } from './style';
import Form from './Form';

export default function ModalComponent() {

    const {isLoginModalOpen,isRegisterModalOpen,handleCloseLoginModal,handleCloseRegisterModal} = useModalContext()

    function handleTypeModal(){
        return(
            <>
                { isLoginModalOpen ? 
                    ( <ModalContainer>
                            <Modal 
                                isOpen={isLoginModalOpen}  
                                onRequestClose={handleCloseLoginModal}
                                overlayClassName="react-modal-auth-overlay"
                                className="react-modal-auth-content"
                                ariaHideApp={false}
                            >
                                <Form title="Login"/>
                            </Modal>
                        </ModalContainer>) 
                    :
                    isRegisterModalOpen ? 
                        <ModalContainer>
                            <Modal 
                                isOpen={isRegisterModalOpen}  
                                onRequestClose={handleCloseRegisterModal}
                                overlayClassName="react-modal-auth-overlay"
                                className="react-modal-auth-content"
                                ariaHideApp={false}
                            >
                                <Form title="Register"/>
                            </Modal>
                        </ModalContainer>
                    : ""
                }
            </>
        )
    }

    return (
        <>
            {handleTypeModal()}
        </>
    )
}
