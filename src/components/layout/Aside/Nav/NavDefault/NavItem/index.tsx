import Link from 'next/link'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { NavItemContainer } from './style'

interface NavItem {
    text : string
    icon?: ReactNode
    href : string
}

export function NavItem({text,icon,href}: NavItem) {

    const { asPath } = useRouter()

    const title = "/" + text.toLocaleLowerCase().trim()

    return (
        <NavItemContainer className={`${asPath == title ? 'pathNavActive' : ''}`}>
            {icon}
            <Link href={href}>
                <p>{text}</p>
            </Link>
        </NavItemContainer>
    )
}