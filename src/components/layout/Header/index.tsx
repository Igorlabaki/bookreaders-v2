import Link from 'next/link'
import {HeaderComponent} from './style'
import { SearchInput } from './SearchInput'
import {CgProfile} from 'react-icons/cg'
import {IoIosArrowDown} from 'react-icons/io'
import useFireBaseContext from '../../../hook/useFirebaseContext'
import useModalContext from '../../../hook/useModalContext'
import ModalComponent from './Modal'
import Image from 'next/image'

export function Header(){

    const {user} = useFireBaseContext()
    const {handleOpenConfigModal} = useModalContext()

    return(
        <HeaderComponent>
           <Link href="/home"><h1>BookReaders</h1></Link>
           <SearchInput/>
           <div>
                <p>{user?.displayName}</p>
                { user?.photoURL ? 
                    <img src={user.photoURL} alt="" />
                :
                <CgProfile fontSize={40}/>
                }
                
                <button onClick={handleOpenConfigModal}>
                    <IoIosArrowDown/>
                </button>
                <ModalComponent/>
           </div>
        </HeaderComponent>
    )
}