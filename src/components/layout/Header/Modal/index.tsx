import Modal from 'react-modal';
import { ModalContainer } from './style';
import useModalContext from '../../../../hook/useModalContext';
import { ItemComponent } from './Menu/Item';
import { MenuComponent } from './Menu';
import useFireBaseContext from '../../../../hook/useFirebaseContext';
import {GrLogout} from 'react-icons/gr'
import {CgProfile} from 'react-icons/cg'

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
            >
                <MenuComponent>
                    <>
                        <ItemComponent text="Profile" icon={<CgProfile  fontSize={25}/>}  href='/profile'/>
                        <ItemComponent text="Logout"  icon={<GrLogout   fontSize={20}/>} onClick={logout}/>
                    </>
                </MenuComponent>
            </Modal>
        </ModalContainer>
    )
    
    
}
