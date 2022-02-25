import { ProfileContainer }     from "./style";
import { InputPostComponent }   from "./inputPost";
import { BoxComponent }         from "../util/Box";
import { FeedComponent }        from "../util/Feed";
import { LoadComponent }        from "../util/Loading";
import { PostsContextProvider}  from "../../../../Context/firebase/postsContext";
import usePostsContext          from "../../../../hook/usePostsContext"; 

export function ProfileComponent(){
    
    const {isLoading} = usePostsContext()
  
    return(
        <PostsContextProvider>
            <ProfileContainer>
                <BoxComponent title="Post">
                    <form action="POST">
                        {
                            <InputPostComponent/>
                        }
                    </form>
                </BoxComponent>
                <FeedComponent type={'userPost'}/>
            </ProfileContainer>
        </PostsContextProvider>
    )
}