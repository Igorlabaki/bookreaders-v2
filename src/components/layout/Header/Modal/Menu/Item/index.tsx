import Link from "next/link";
import { IconType } from "react-icons";
import useFireBaseContext from "../../../../../../hook/useFirebaseContext";
import {ItemContainer} from './style'


interface ItemProps {
    text: string
    icon?: React.ReactNode
    href?: string
    onClick?: (event: any) => void
}

export function ItemComponent({text, href,icon}:ItemProps){

    const {logout} = useFireBaseContext()

    function handleItemMenu(){
        return(
            <>
                {href ? (
                <Link href={href}>
                    <p>{icon}{text}</p>
                </Link>
            ):
                <p onClick={logout}>{icon}{text}</p>
            }
            </>
        )
    }

    return(
        <ItemContainer>
            {handleItemMenu()}
        </ItemContainer>
    )
}