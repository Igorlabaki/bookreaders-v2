import {HiOutlinePencilAlt} from 'react-icons/hi'
import {CgProfile,CgTrash,} from 'react-icons/cg'
import usePostsContext from "../../../../../../hook/usePostsContext"
import { Photo, PostBody, PostContainer } from './styles'
import { useEffect } from 'react'
import { PaginationComponent } from '../../pagination'
import usePaginationContext from '../../../../../../hook/usePaginationContext'

export function AllPostsComponent(){

    const {posts,deletePost,getPosts} = usePostsContext()
    const {currentPage,elementsPerPage} = usePaginationContext()

    useEffect(() => {
        getPosts()
    }, [])

    const indexOfLastBook   = currentPage       * elementsPerPage
    const indexOfFirstPost  = indexOfLastBook   - elementsPerPage
    const currentBooks      = posts.slice(indexOfFirstPost,indexOfLastBook)


    return(
        <>
            {currentBooks.map((post,i) => {
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