import { FeedComponent } from "../util/Feed";
import { SliderComponent } from "./Slider";
import { DiscoverContainer } from "./style";

export function DiscoverComponent(){

    return(
        <DiscoverContainer>
           <SliderComponent/>
            <FeedComponent type={'allPost'}/>
        </DiscoverContainer>
    )
}