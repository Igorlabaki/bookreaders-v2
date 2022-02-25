import Modal                from 'react-modal';
import { MenuComponent }    from './Menu';
import {GrLogout}           from 'react-icons/gr'
import { ModalContainer }   from './style';
import { ItemComponent }    from './Menu/Item';
import useAuthContext       from '../../../../hook/useAuthContext';
import useModalContext      from '../../../../hook/useModalContext';

export default function ModalComponent() {

    const {logout} = useAuthContext()
    const {isConfigModalOpen, handleCloseConfigModal} = useModalContext()

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
                        <ItemComponent text="Logout"  icon={<GrLogout   fontSize={20}/>} onClick={logout}/>
                    </>
                </MenuComponent>
            </Modal>
        </ModalContainer>
    )
    
    
}
