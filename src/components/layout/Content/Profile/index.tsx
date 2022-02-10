import { BoxComponent } from "../util/Box";
import { BoxContainer } from "../util/Box/style";
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