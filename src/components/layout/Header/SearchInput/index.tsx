import { SerachInputContainer } from "./style";
import {FiSearch} from "react-icons/fi"

export function SearchInput(){
    return (
        <SerachInputContainer>
            <div>
                <FiSearch fontSize={20} color="white"/>
            </div>
            <input type="text"  placeholder="Find your book..." onChange={e => e.preventDefault} />
        </SerachInputContainer>
    )
}