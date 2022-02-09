import Modal from 'react-modal';
import { ModalContainer } from './style';
import useModalContext from '../../../../hook/useModalContext';

export default function ModalComponent() {

    const {isConfigModalOpen, handleCloseConfigModal} = useModalContext()

    return (
        <ModalContainer>
            <Modal 
                isOpen={isConfigModalOpen}  
                onRequestClose={handleCloseConfigModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                ariaHideApp={false}
            >
              <button>Open</button>
            </Modal>
        </ModalContainer>
    )
    
    
}
