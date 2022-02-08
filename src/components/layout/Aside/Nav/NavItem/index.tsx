import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconType } from 'react-icons'
import { NavItemContainer } from './style'

interface NavItem {
    text: string
    svg?: IconType
    href: string
}

export function NavItem(props: NavItem) {

    const { asPath } = useRouter()

    const title = "/" + props.text.toLocaleLowerCase().trim()

    return (
        <NavItemContainer>
            <div className={`${asPath == title ? 'bg-blue-50' : ''}`}>
                <div className="">{props?.svg}</div>
                <Link href={props.href}>
                    <p>{props.text}</p>
                </Link>
            </div>
        </NavItemContainer>
    )
}