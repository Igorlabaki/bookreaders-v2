import Link from 'next/link'
import {HeaderComponent} from './style'

export function Header(){
    return(
        <HeaderComponent>
           <Link href="/discover"><h1>BookReaders</h1></Link>
        </HeaderComponent>
    )
}