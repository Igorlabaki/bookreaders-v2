import { MenuContainer } from "./style";

interface MenuProps {
    children: JSX.Element
  }

export function MenuComponent({children}: MenuProps){
    return(
        <MenuContainer>
            <ul>
                {children}
            </ul>
        </MenuContainer>
    )
}