import useBookFirebaseContext from "../../../../hook/useBooksFirebaseContext";
import { BoxComponent } from "../util/Box";
import { FeedComponent } from "../util/Feed";
import { InputPostComponent } from "../util/inputPost";
import { SliderComponent } from "./Slider";
import { DiscoverContainer } from "./style";

export function DiscoverComponent(){

    const {getLongestBook} = useBookFirebaseContext()

    return(
        <DiscoverContainer>
            <SliderComponent/>
            <FeedComponent type={'allPost'}/>
        </DiscoverContainer>
    )
}