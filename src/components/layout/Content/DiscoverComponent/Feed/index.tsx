import { userInfo } from "os";
import { useEffect } from "react";
import useFireBaseContext from "../../../../../hook/useFirebaseContext";
import { BoxComponent } from "../../util/Box";
import { PostContainer } from "./styles";

export function FeedComponent(){

    const {posts,getPosts} = useFireBaseContext()

    useEffect(() => {
        getPosts()
    }, [])
    
    console.log(posts)

    return(
        <>
            <BoxComponent title="Feed">
                {
                    posts ?
                    posts.map((post,i) => {
                        return(
                            <PostContainer key={i}>
                                <p>{post.text}</p>
                            </PostContainer>
                            
                        )
                    })
                    :
                    ''
                }
            </BoxComponent>
        </>
    )
}