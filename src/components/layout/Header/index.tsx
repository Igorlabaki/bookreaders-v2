import Link from 'next/link'
import {HeaderComponent} from './style'
import { SearchInput } from './SearchInput'

export function Header(){
    return(
        <HeaderComponent>
           <Link href="/home"><h1>BookReaders</h1></Link>
           <SearchInput/>
        </HeaderComponent>
    )
}