import Modal from 'react-modal';
import { ModalContainer } from './style';
import useModalContext from '../../../../hook/useModalContext';

export default function PhotoModalComponent() {

    const {isPhotoModalOpen, handleClosePhotoModal} = useModalContext()
    
    return (
        <ModalContainer>
            <Modal 
                isOpen={isPhotoModalOpen}  
                onRequestClose={handleClosePhotoModal}
                overlayClassName="react-modal-photo-overlay"
                className="react-modal-photo-content"
                ariaHideApp={false}
            >
             
            </Modal>
        </ModalContainer>
    )
    
    
}
