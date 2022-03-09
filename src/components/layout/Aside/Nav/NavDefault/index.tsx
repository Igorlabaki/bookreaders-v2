import {NavItem} from './NavItem'
import { NavContainer } from './style'
import {BiWorld} from 'react-icons/bi'
import {FaUserFriends} from 'react-icons/fa'
import {GiBookshelf} from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'

export  function NavDefault() {
    return (
        <NavContainer>
            <NavItem text="Discover"    hrefprops="/discover"    icon={<BiWorld fontSize={30}/>}/>
            <NavItem text="Bookshelf"  hrefprops="/book-shelfe" icon={<GiBookshelf  fontSize={30}/>}/>
            <NavItem text="Profile"     hrefprops="/profile"     icon={<CgProfile  fontSize={30}/>}/>
            <NavItem text="BookClub"    hrefprops="/book-club"   icon={<FaUserFriends  fontSize={30}/>}/>
        </NavContainer>
    )
  } 