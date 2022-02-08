import Link from 'next/link'
import {HeaderComponent} from './style'
import { SearchInput } from './SearchInput'
import {CgProfile} from 'react-icons/cg'
import {IoIosArrowDown} from 'react-icons/io'
import useFireBaseContext from '../../../hook/useFirebaseContext'
import DropDown from './dropDown'
import MenuItem from './dropDown/menuItem'


export function Header(){

    const {logout,user} = useFireBaseContext()

    return(
        <HeaderComponent>
           <Link href="/home"><h1>BookReaders</h1></Link>
           <SearchInput/>
           <div>
                <p>{user.displayName}</p>
                <CgProfile fontSize={40}/>
                <button onClick={logout}>
                    <IoIosArrowDown/>
                </button>
                <DropDown>
                    <MenuItem text='Logout'/>
                </DropDown>
           </div>
        </HeaderComponent>
    )
}