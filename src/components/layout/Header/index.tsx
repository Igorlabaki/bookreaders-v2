import Link             from 'next/link'

import useAuthContext   from '../../../hook/useAuthContext'
import useModalContext  from '../../../hook/useModalContext'
import {CgProfile}      from 'react-icons/cg'
import {GrLogout}      from 'react-icons/gr'
import { SearchInput }  from './SearchInput'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {ArrowButtonContainer, HeaderComponent, LogoContainer, MenuContainer, PhotoContainer} from './style'
import { useState } from 'react'
import { ModalComponent } from '../Header/Modal'
import { MenuComponent } from './Modal/Menu'
import { ItemComponent } from './Modal/Menu/Item'

export function Header(){

    const {userAuth,logout  } = useAuthContext()
    const {handleOpenConfigModal,handleCloseConfigModal, isConfigModalOpen} = useModalContext()
    const [modal, setModal] = useState(false)

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
                    <ArrowButtonContainer onClick={handleCloseModal}>
                        <IoIosArrowUp/>
                    </ArrowButtonContainer>
                    :
                    <ArrowButtonContainer onClick={handleOpenModal}>
                        <IoIosArrowDown/>
                    </ArrowButtonContainer>
                }
            </>
         )
    }

    function handleOpenModal(){
      setModal(true)
    }
  
    function handleCloseModal(){
      setModal(false)
    }

    return(
        <HeaderComponent>
           <Link href="/discover"><LogoContainer src="/images/logo/logo-color.png" alt="" /></Link>
           <SearchInput/>
           <MenuContainer>
                <p>{userAuth.displayName}</p>
                {handleUserPhoto()}
                {handleDropDownMenu()}
                {
                    modal ? 
                    <ModalComponent onClose={handleCloseModal} >  
                        <MenuComponent>
                            <>
                                <ItemComponent text="Logout"  icon={<GrLogout   fontSize={20}/>} onClick={logout}/>
                            </>
                        </MenuComponent>
                    </ModalComponent>
                    :
                    null
                }
           </MenuContainer>
        </HeaderComponent>
    )
}