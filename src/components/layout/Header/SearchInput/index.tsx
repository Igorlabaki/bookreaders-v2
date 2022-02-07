import { SerachInputContainer } from "./style";
import {FiSearch} from "react-icons/fi"

export function SearchInput(){
    return (
        <SerachInputContainer>
            <div>
                <FiSearch fontSize={20} color="white"/>
            </div>
            <input type="text" className="rounded-r h-8 w-2/5 px-3 outline-none border" placeholder="Search" onChange={e => e.preventDefault} />
        </SerachInputContainer>
    )
}