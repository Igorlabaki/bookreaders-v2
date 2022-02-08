import {NavItem} from './NavItem'
import { NavContainer } from './style'

export  function Nav(props) {
    return (
        <NavContainer>
            <NavItem text="Discover"    href="/discover"></NavItem>
            <NavItem text="Bookshelve"  href="/book-shelve"></NavItem>
            <NavItem text="BookClub"    href="/book-club"></NavItem>
            <NavItem text="Profile"     href={`/profile`}></NavItem>
        </NavContainer>
    )
  } 