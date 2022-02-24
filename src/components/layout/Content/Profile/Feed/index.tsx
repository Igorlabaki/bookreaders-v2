import { useEffect } from "react";
import useFireBaseContext from "../../../../../hook/useFirebaseContext";
import { BoxComponent } from "../../util/Box";
import { PostContainer } from "./styles";

export function FeedComponent(){

    const {getUserPosts,userPosts} = useFireBaseContext()

    useEffect(() => {
        getUserPosts()
    }, [])
    

    return(
        <>
            <BoxComponent title="My Posts">
                {

                   userPosts ? 
                   userPosts.map((post,i) => {
                    return(
                        <PostContainer key={i}>
                            <p>{post.text}</p>
                        </PostContainer>
                    )
                   })
                   :
                   'Jorge'
                }
            </BoxComponent>
        </>
    )
}