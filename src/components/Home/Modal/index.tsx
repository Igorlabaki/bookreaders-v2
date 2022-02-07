import Modal from 'react-modal';
import useHomeContext from '../../../Context/Home/hook/useHomeContext';
import { ModalContainer } from './style';
import Form from '../Form';

export default function ModalComponent() {

    const {isLoginModalOpen,isRegisterModalOpen,handleCloseLoginModal,handleCloseRegisterModal} = useHomeContext()

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
