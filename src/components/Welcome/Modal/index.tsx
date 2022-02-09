import Modal from 'react-modal';
import useModalContext from '../../../hook/useModalContext';
import { ModalContainer } from './style';
import Form from './Form';

export default function ModalComponent() {

    const {isLoginModalOpen,isRegisterModalOpen,handleCloseLoginModal,handleCloseRegisterModal} = useModalContext()

    return (
        <>
        { isLoginModalOpen ? 
           ( <ModalContainer>
                <Modal 
                    isOpen={isLoginModalOpen}  
                    onRequestClose={handleCloseLoginModal}
                    overlayClassName="react-modal-overlay"
                    className="react-modal-content"
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
                    overlayClassName="react-modal-overlay"
                    className="react-modal-content"
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
