import { BookContainer, MyBookContainer, PhotoContainer, ProfileContainer, StaticsContainer }     from "./style";
import { BoxComponent }         from "../util/Box";
import { FeedComponent }        from "../util/Feed";
import { LoadComponent }        from "../util/Loading";
import { PostsContext, PostsContextProvider}  from "../../../../Context/firebase/postsContext";
import useAuthContext from "../../../../hook/useAuthContext";
import { useEffect } from "react";
import useBookFirebaseContext from "../../../../hook/useBooksFirebaseContext";
import usePostsContext from "../../../../hook/usePostsContext";

export function ProfileComponent(){

    const {getLongestBook,longestBook,getShortestBook,shortestBook,getAveragePages,pageRead,averagePages,getLastBookPosted,lastBookPosted} = useBookFirebaseContext()
    const {user} = useAuthContext()
    const {getUserPosts} = usePostsContext()

    useEffect(() => {
        getUserPosts()
        getLongestBook()
        getShortestBook()
        getAveragePages()
        getAveragePages()
        getLastBookPosted()
    }, [])
    
  
    return(
            <ProfileContainer>
                <BoxComponent title="My Books">
                    <MyBookContainer>
                        {longestBook ? 
                        <BookContainer>
                            <PhotoContainer src={longestBook?.volumeInfo?.imageLinks?.thumbnail} alt="" />
                            <div>
                                <h2>Longest Book</h2>
                                <p>({longestBook?.volumeInfo?.pageCount}&nbsp;pages)</p>
                            </div>
                        </BookContainer>
                        :
                        ""}
                        {shortestBook ? 
                        <BookContainer>
                            <PhotoContainer src={shortestBook?.volumeInfo?.imageLinks?.thumbnail} alt="" />
                            <div>
                                <h2>Shortest Book</h2>
                                <p>({shortestBook?.volumeInfo?.pageCount}&nbsp;pages)</p>
                            </div>
                        </BookContainer>
                        :
                        ''
                        }
                         {lastBookPosted ? 
                        <BookContainer>
                            <PhotoContainer src={lastBookPosted.bookphotoUrl} alt="" />
                            <div>
                                <h2>Last Book readed</h2>
                            </div>
                        </BookContainer>
                        :
                        ''
                        }
                        <BookContainer>
                            <PhotoContainer src={'http://books.google.com/books/content?id=r2DogxOYJ3UC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72jXM4lFtTz4oSG2obY9u7kbwQfE-bQ6_Qi4A5D0vH2rnGwem0fxWaM4NDxnfWRVF9JEh8B9-fMkb4OXyJtkVvNbjaTEtA27XoK8Upgbf65J8uAALUDCLcqc2wfvEiIP19PeTzp&source=gbs_api'} alt="" />
                            <div>
                                <h2>Currently reading</h2>
                            </div>
                        </BookContainer>
                    </MyBookContainer>
                    <StaticsContainer>
                        <div>
                            <h4>Books read:</h4>
                            <p>{user?.books?.length}</p>
                        </div>
                        <div>
                            <h4>Pages read:</h4>
                            {pageRead ? <p>{pageRead}</p> : ''} 
                        </div>
                        <div>
                            <h4>Page Average:</h4>
                            {averagePages ? <p>{averagePages}</p> : ''} 
                        </div>
                    </StaticsContainer>
                </BoxComponent>
                <FeedComponent type={'userPost'}/>
            </ProfileContainer>
    )
}