import useFireBaseContext from "../../../../hook/useFirebaseContext";
import { BoxComponent } from "../util/Box";
import { SliderComponent } from "./Slider";
import { DiscoverContainer } from "./style";

export function DiscoverComponent(){
    return(
        <DiscoverContainer>
           <SliderComponent/>
           <BoxComponent title="Feed">
               
            </BoxComponent>
        </DiscoverContainer>
    )
}