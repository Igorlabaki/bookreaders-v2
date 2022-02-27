import { useEffect } from 'react'
import {CgProfile,CgHeart} from 'react-icons/cg'
import { Photo, PostBookContainer, PostContainer, PostContent, PostHeader,PostBody, PostTextContainer, Flex } from './styles'
import usePostsContext from "../../../../../../hook/usePostsContext"
import usePaginationContext from '../../../../../../hook/usePaginationContext'
import useAuthContext from '../../../../../../hook/useAuthContext'

interface Post{
    uid:      string
    text:     string
    username: string,
    photoUrl: string,
    bookTitle: string,
    postedAt: Date
    bookSearchInfo: string,
    bookAuthor: string
    bookpageCount: number
    bookphotoUrl: string
}


export function UserPostsComponent(){

    const {userPosts,deletePost,getUserPosts} = usePostsContext()
    const {currentPage,elementsPerPage} = usePaginationContext()
    const {user} = useAuthContext()

    useEffect(() => {
        getUserPosts()
    }, [])

    const indexOfLastBook   = currentPage * elementsPerPage
    const indexOfFirstPost  = indexOfLastBook- elementsPerPage
    const currentPosts      = user.posts.slice(indexOfFirstPost,indexOfLastBook)

    return(
        <>
            {currentPosts.map((post: Post,i) => {
                return(
                    <PostContainer key={i}>
                            {
                                post.photoUrl ? <Photo src={post.photoUrl} alt="avatar" /> : <CgProfile fontSize={60}/>
                            }
                        <PostBody>
                            <PostHeader>
                                <p><strong>{post.username}</strong></p>
                                <p>
                                    <span>Posted at {post.postedAt}</span>
                                </p>
                            </PostHeader>
                            <PostContent>
                                <PostBookContainer>
                                    {post.bookphotoUrl ?  <img src={post?.bookphotoUrl} alt="book-cover" /> : ""}
                                    <span>
                                        {post.bookTitle ?
                                        <>
                                            <div>
                                                <h3>{post?.bookTitle}</h3>
                                                <p>{post?.bookSearchInfo}</p>
                                            </div>
                                            <Flex>
                                                <p><strong>Author:</strong>{post.bookAuthor}</p>
                                                <p><strong>Pages:</strong>{post.bookpageCount}</p>
                                            </Flex>  
                                        </>
                                        :
                                        ""
                                        }
                                    <PostTextContainer>
                                        <div>
                                            <p>{post.text}</p>
                                        </div> 
                                    </PostTextContainer>
                                    </span>
                                </PostBookContainer>
                               
                            </PostContent>
                        </PostBody>
                    </PostContainer>
                    )
                }
            )}
        </>
    )
}