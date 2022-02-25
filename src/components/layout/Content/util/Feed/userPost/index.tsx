import { useEffect } from 'react'
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {CgProfile,CgTrash,} from 'react-icons/cg'
import { PaginationComponent } from '../../pagination'
import { Photo, PostBody, PostContainer } from './styles'
import usePostsContext from "../../../../../../hook/usePostsContext"
import usePaginationContext from '../../../../../../hook/usePaginationContext'

export function UserPostsComponent(){

    const {userPosts,deletePost,getUserPosts} = usePostsContext()
    const {currentPage,elementsPerPage} = usePaginationContext()

    useEffect(() => {
        getUserPosts()
    }, [])

    const indexOfLastBook   = currentPage * elementsPerPage
    const indexOfFirstPost  = indexOfLastBook- elementsPerPage
    const currentPosts      = userPosts.slice(indexOfFirstPost,indexOfLastBook)

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
                            <i onClick={() => deletePost(post.postId)}><CgTrash/></i>
                            <i><HiOutlinePencilAlt/></i>
                            </p>
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