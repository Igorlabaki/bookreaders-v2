import Link from "next/link";
import useFireBaseContext from "../../../../../hook/useFirebaseContext";
import {MenuItemContainer} from './style'

interface menuItem {
    text: string
    svg?: JSX.Element
    href?: string
    onClick?: (event: any) => void
}

export default function Nav(props: menuItem) {

    const {logout} = useFireBaseContext()

    return (
        <>
            <MenuItemContainer className="flex hover:bg-blue-100 p-3 cursor-pointer font-semibold">
                {props.svg}
                {props.href ? (
                    <Link href={props.href}>
                        <p className="font-semibold ml-2">{props.text}</p>
                    </Link>
                ):
                    <button onClick={logout}>{props.text}</button>
                }

            </MenuItemContainer>
        </>
    )
}