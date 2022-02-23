import { useEffect } from "react";
import useFireBaseContext from "../../../../hook/useFirebaseContext";
import { FeedComponent } from "./Feed";
import { SliderComponent } from "./Slider";
import { DiscoverContainer } from "./style";

export function DiscoverComponent(){

    return(
        <DiscoverContainer>
           <SliderComponent/>
            <FeedComponent/>
        </DiscoverContainer>
    )
}