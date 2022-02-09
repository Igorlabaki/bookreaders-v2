import Link from "next/link";
import useFireBaseContext from "../../../../../../hook/useFirebaseContext";
import {ItemContainer} from './style'

interface ItemProps {
    text: string
    svg?: JSX.Element
    href?: string
    onClick?: (event: any) => void
}

export function ItemComponent({text, href,svg, onClick}:ItemProps){

    const {logout} = useFireBaseContext()

    return(
        <ItemContainer>
            {svg}
            {href ? (
                <Link href={href}>
                    <p>{text}</p>
                </Link>
            ):
                <p onClick={logout}>{text}</p>
            }
        </ItemContainer>
    )
}