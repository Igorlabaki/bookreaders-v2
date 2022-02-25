import { useEffect } from "react";
import { BoxComponent } from "../../util/Box";
import { AllPostsComponent } from './allPosts';
import { UserPostsComponent } from "./userPost";
import usePostsContext from "../../../../../hook/usePostsContext";
import { PaginationComponent } from "../pagination";
import { LoadComponent } from "../Loading";

interface FeedProps{
    type:string
}

export function FeedComponent({type}:FeedProps){

    const {getUserPosts,getPosts,isLoading} = usePostsContext()

    useEffect(() => {
        if(type.includes('userPost')){
            getUserPosts()
        }
        if(type.includes('allPost')){
            getPosts()
        }
    }, [])

    return(
        <>
            <BoxComponent title="Feed">
                {
                   isLoading ? <LoadComponent/> 
                   : 
                   type.includes('userPost') ? 
                   <>
                        <UserPostsComponent/>
                        <PaginationComponent type={type}/>  
                   </> 
                   :
                   type.includes('allPost')? 
                   <> 
                        <AllPostsComponent/>
                        <PaginationComponent type={type}/>
                   </>
                   :
                   ''
                }
            </BoxComponent>
        </>
    )
}