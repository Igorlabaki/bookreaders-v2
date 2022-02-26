import { useEffect } from 'react'
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {CgProfile,CgTrash,} from 'react-icons/cg'
import { PaginationComponent } from '../../pagination'
import { Photo, PostBody, PostBookContainer, PostContainer } from './styles'
import usePostsContext from "../../../../../../hook/usePostsContext"
import usePaginationContext from '../../../../../../hook/usePaginationContext'
import useAuthContext from '../../../../../../hook/useAuthContext'

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
            {currentPosts.map((post,i) => {
                return(
                    <PostContainer key={i}>
                        <Photo>
                            {
                                post.photoUrl ? <img src={post.photoUrl} alt="avatar" /> : <CgProfile fontSize={60}/>
                            }
                        </Photo>
                        <PostBody>
                           <p><strong>{post.username}</strong></p>
                            <p>
                                <span>Posted at {post.postedAt}</span>
                            </p>
                            <PostBookContainer>
                                <p>{post.bookTitle}</p>
                            </PostBookContainer>
                            <div>
                                <p>{post.text}</p>
                            </div>
                        </PostBody>
                    </PostContainer>
                    )
                }
            )}
        </>
    )
}