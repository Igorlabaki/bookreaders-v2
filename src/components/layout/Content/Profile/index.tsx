import { ProfileContainer }     from "./style";
import { InputPostComponent }   from "./inputPost";
import { BoxComponent }         from "../util/Box";
import { FeedComponent }        from "../util/Feed";
import { LoadComponent }        from "../util/Loading";
import { PostsContextProvider}  from "../../../../Context/firebase/postsContext";
import usePostsContext          from "../../../../hook/usePostsContext"; 
import useAuthContext from "../../../../hook/useAuthContext";

export function ProfileComponent(){
    
    const {isLoading} = usePostsContext()
    const {user} = useAuthContext()
  
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
                <BoxComponent title="My Books">
                    {
                        user?.books.map( (book) => {
                            return(
                                <p>{book.volumeInfo.title}</p>
                            )
                        })
                    }
                </BoxComponent>
                <FeedComponent type={'userPost'}/>
            </ProfileContainer>
        </PostsContextProvider>
    )
}