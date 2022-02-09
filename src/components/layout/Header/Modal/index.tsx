import Modal from 'react-modal';
import { ModalContainer } from './style';
import useModalContext from '../../../../hook/useModalContext';
import { ItemComponent } from './Menu/Item';
import { MenuComponent } from './Menu';
import useFireBaseContext from '../../../../hook/useFirebaseContext';

export default function ModalComponent() {

    const {isConfigModalOpen, handleCloseConfigModal} = useModalContext()
    const {logout} = useFireBaseContext()

    return (
        <ModalContainer>
            <Modal 
                isOpen={isConfigModalOpen}  
                onRequestClose={handleCloseConfigModal}
                overlayClassName="react-modal-config-overlay"
                className="react-modal-config-content"
                ariaHideApp={false}
            >
                <MenuComponent>
                    <>
                        <ItemComponent text="Logout"  onClick={logout}/>
                    </>
                </MenuComponent>
            </Modal>
        </ModalContainer>
    )
    
    
}