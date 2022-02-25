import Link from "next/link";
import {ItemContainer} from './style'
import useAuthContext from "../../../../../../hook/useAuthContext";
import useModalContext from "../../../../../../hook/useModalContext";

interface ItemProps {
    text: string
    icon?: React.ReactNode
    href?: string
    onClick?: (event: any) => void
}

export function ItemComponent({text, href,icon}:ItemProps){

    const {handleCloseConfigModal}  = useModalContext()
    const {logout}                  = useAuthContext()

    function handleItemMenu(){
        return(
            <>
                {href ? (
                <Link href={href}>
                    <p>{icon}{text}</p>
                </Link>
            ):
                <p onClick={() => {
                    logout()
                    handleCloseConfigModal()
                }}>
                    {icon}{text}
                </p>
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