import { useEffect } from "react";
import useBookContext from "../../../../hook/useBookContext";
import { BoxComponent } from "../util/Box";
import { ProfileContainer } from "./style";

export function ProfileComponent(){
    return(
        <ProfileContainer>
            <BoxComponent title="Bio">
                <textarea placeholder="I Love Books"/>
                <div>
                    <p>Edit</p>
                </div>
            </BoxComponent>
        </ProfileContainer>
    )
}