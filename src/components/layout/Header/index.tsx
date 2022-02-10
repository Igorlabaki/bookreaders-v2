import Link from 'next/link'
import {HeaderComponent} from './style'
import { SearchInput } from './SearchInput'
import {CgProfile} from 'react-icons/cg'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import useFireBaseContext from '../../../hook/useFirebaseContext'
import useModalContext from '../../../hook/useModalContext'
import ModalComponent from './Modal'

export function Header(){

    const {user} = useFireBaseContext()
    const {handleOpenConfigModal,handleCloseConfigModal, isConfigModalOpen} = useModalContext()

    function handleUserPhoto(){
        return(
            <>
                <p>{user?.displayName}</p>
                { user?.photoURL ? 
                        <img src={user.photoURL} alt="user photo" />
                    :
                        <CgProfile fontSize={40}/>
                }
            </>
        )
    }

    function handleDropDownMenu(){
        return(
            <>
                {isConfigModalOpen ? 
                    <button onClick={handleCloseConfigModal}>
                        <IoIosArrowUp/>
                    </button>
                    :
                    <button onClick={handleOpenConfigModal}>
                        <IoIosArrowDown/>
                    </button>
                }
            </>
         )
    }

    return(
        <HeaderComponent>
           <Link href="/home"><h1>BookReaders</h1></Link>
           <SearchInput/>
           <div>
                {handleUserPhoto()}
                {handleDropDownMenu()}
                <ModalComponent/>
           </div>
        </HeaderComponent>
    )
}