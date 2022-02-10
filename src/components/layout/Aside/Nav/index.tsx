import {NavItem} from './NavItem'
import { NavContainer } from './style'
import {BiWorld} from 'react-icons/bi'
import {FaUserFriends} from 'react-icons/fa'
import {GiBookshelf} from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'

export  function Nav() {
    return (
        <NavContainer>
            <NavItem text="Profile"     href="/profile"     icon={<CgProfile/>}/>
            <NavItem text="Discover"    href="/discover"    icon={<BiWorld/>}/>
            <NavItem text="Bookshelfe"  href="/book-shelfe" icon={<GiBookshelf/>}/>
            <NavItem text="BookClub"    href="/book-club"   icon={<FaUserFriends/>}/>
        </NavContainer>
    )
  } 