import Link from 'next/link'
import {ArrowButtonContainer, HeaderComponent, LogoContainer, MenuContainer, PhotoContainer} from './style'
import { SearchInput } from './SearchInput'
import {CgProfile} from 'react-icons/cg'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import useFireBaseContext from '../../../hook/useFirebaseContext'
import useModalContext from '../../../hook/useModalContext'
import ModalComponent from './Modal'
import { FaRegBell } from 'react-icons/fa'

export function Header(){

    const {user} = useFireBaseContext()
    const {handleOpenConfigModal,handleCloseConfigModal, isConfigModalOpen} = useModalContext()

    function handleUserPhoto(){
        return(
            <>
                { user?.photoURL ? 
                        <PhotoContainer src={user.photoURL} alt="user photo" />
                    :
                        <CgProfile fontSize={40} color={'var(--blue-button)'}/>
                }
            </>
        )
    }

    function handleDropDownMenu(){
        return(
            <>
                {isConfigModalOpen ? 
                    <ArrowButtonContainer onClick={handleCloseConfigModal}>
                        <IoIosArrowUp/>
                    </ArrowButtonContainer>
                    :
                    <ArrowButtonContainer onClick={handleOpenConfigModal}>
                        <IoIosArrowDown/>
                    </ArrowButtonContainer>
                }
            </>
         )
    }

    return(
        <HeaderComponent>
           <Link href="/discover"><LogoContainer src="/images/logo/logo-color.png" alt="" /></Link>
           <SearchInput/>
           <MenuContainer>
                <p>{user?.displayName}</p>
                {handleUserPhoto()}
                {handleDropDownMenu()}
                <ModalComponent/>
           </MenuContainer>
        </HeaderComponent>
    )
}