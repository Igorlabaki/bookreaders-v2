import Modal from 'react-modal';
import useHomeContext from '../../../Context/Home/hook/useHomeContext';
import { ModalContainer } from './style';

export default function RegisterModal() {

    const {isRegisterModalOpen,handleCloseRegisterModal} = useHomeContext()

    return (
        <Modal 
            isOpen={isRegisterModalOpen}  
            onRequestClose={handleCloseRegisterModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
        >
            <ModalContainer>
                <h1>Register</h1>
            </ModalContainer>
        </Modal>
    )
}
