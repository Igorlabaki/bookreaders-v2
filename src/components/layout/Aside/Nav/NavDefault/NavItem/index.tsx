import Link from 'next/link'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { NavItemContainer } from './style'

interface NavItem {
    text : string
    icon?: ReactNode
    hrefprops : string
}

export function NavItem({text,icon,hrefprops}: NavItem) {

    const { asPath } = useRouter()

    const title = "/" + text.toLocaleLowerCase().trim()

    return (
        <NavItemContainer className={`${asPath == title ? 'pathNavActive' : ''}`}>
            {icon}
            <Link href={hrefprops}>
                <p>{text}</p>
            </Link>
        </NavItemContainer>
    )
}