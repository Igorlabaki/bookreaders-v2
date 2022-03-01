import { BoxComponent } from "../../util/Box";
import { PostsComponent } from "./post";
import usePostsContext from "../../../../../hook/usePostsContext";
import { PaginationComponent } from "../pagination";
import { LoadComponent } from "../Loading";

interface FeedProps{
    type:string
}

export function FeedComponent({type}:FeedProps){

    const {isLoading} = usePostsContext()

    return(
        <>
            <BoxComponent title="Feed">
                {
                   isLoading ? <LoadComponent/> 
                   :
                   <>
                   <PostsComponent type={type}/>
                   <PaginationComponent type={type}/>
                   </> 
                }
            </BoxComponent>
        </>
    )
}