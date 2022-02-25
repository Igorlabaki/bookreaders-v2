import Link             from 'next/link'
import ModalComponent   from './Modal'
import useAuthContext   from '../../../hook/useAuthContext'
import useModalContext  from '../../../hook/useModalContext'
import {CgProfile}      from 'react-icons/cg'
import { SearchInput }  from './SearchInput'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {ArrowButtonContainer, HeaderComponent, LogoContainer, MenuContainer, PhotoContainer} from './style'

export function Header(){

    const {userAuth} = useAuthContext()
    const {handleOpenConfigModal,handleCloseConfigModal, isConfigModalOpen} = useModalContext()

    function handleUserPhoto(){
        return(
            <>
                { userAuth?.photoURL ? 
                        <PhotoContainer src={userAuth.photoURL} alt="user photo" />
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
                <p>{userAuth.displayName}</p>
                {handleUserPhoto()}
                {handleDropDownMenu()}
                <ModalComponent/>
           </MenuContainer>
        </HeaderComponent>
    )
}