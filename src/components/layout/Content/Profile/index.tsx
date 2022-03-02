import { ProfileContainer }     from "./style";
import { InputPostComponent }   from "../util/Feed/inputPost";
import { BoxComponent }         from "../util/Box";
import { FeedComponent }        from "../util/Feed";
import { LoadComponent }        from "../util/Loading";
import { PostsContextProvider}  from "../../../../Context/firebase/postsContext";
import usePostsContext          from "../../../../hook/usePostsContext"; 
import useAuthContext from "../../../../hook/useAuthContext";

interface book{
    id                   ?:string,
    searchInfo:{
        textSnippet ?:    string
    }
    volumeInfo: {
        title           ?: string
        subtitle        ?: string
        authors         ?: string[]
        publishedDate   ?: string,
        description     ?: string,
        pageCount       ?: number,
        categories      ?: string[]

        imageLinks:{
            smallThumbnail ?: string
            thumbnail       ?: string
        }
    }
}

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
                <BoxComponent title="My Books Lists">
                        
                </BoxComponent>
                <FeedComponent type={'userPost'}/>
            </ProfileContainer>
        </PostsContextProvider>
    )
}