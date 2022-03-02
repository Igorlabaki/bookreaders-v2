import { useEffect, useState } from 'react'
import {CgProfile} from 'react-icons/cg'
import {IoIosArrowDown} from 'react-icons/io'
import { PostContainer, Photo, PostHeader, PostBookContainer, PostContent, PostTextContainer, ButtonComent, ComentContainer, ComentBody  } from './styles'
import usePostsContext from "../../../../../../hook/usePostsContext"
import usePaginationContext from '../../../../../../hook/usePaginationContext'
import useAuthContext from '../../../../../../hook/useAuthContext'
import { useRouter }            from "next/router";
import { InputPostComponent } from '../inputPost'

interface Post{
    postId:   string 
    uid:      string
    text:     string
    username: string,
    photoUrl: string,
    bookTitle: string,
    postedAt: Date
    bookId: string,
    bookSearchInfo: string,
    bookAuthor: string
    bookpageCount: number
    bookphotoUrl: string
    comments: []
}

interface PostComponent{
    type:string
}


export function PostsComponent({type}: PostComponent){

    const {posts,getUserPosts,getPosts,userPosts,deletePost} = usePostsContext()
    const {currentPage,elementsPerPage,setCurrentPage} = usePaginationContext()
    const {user} = useAuthContext()

    useEffect(() => {
        setCurrentPage(1)
        if(type.includes('userPost')){
            getUserPosts()
        }
        if(type.includes('allPost')){
            getPosts()
        }
    }, [])

    const [coment, setComent] = useState(false)

    const indexOfLastBook   = currentPage * elementsPerPage
    const indexOfFirstPost  = indexOfLastBook- elementsPerPage
    const router = useRouter()
    
    let currentList = []

    if(type.includes('userPost')){
        currentList = user.posts.slice(indexOfFirstPost,indexOfLastBook)
        console.log(userPosts)
    }
    if(type.includes('allPost')){
        currentList = posts.slice(indexOfFirstPost,indexOfLastBook) 
    }

    return(
        <>
            {currentList.map((post: Post,i) => {
                {
                    console.log(post)}
                return(
                    <PostContainer key={i}>
                        {post.photoUrl ? <Photo src={post.photoUrl} alt="avatar" /> : <CgProfile fontSize={60}/>}
                        <PostContent>
                            <PostHeader>
                                <p><strong>{post.username}</strong></p>
                                <p><span>Posted at {post.postedAt}</span></p>
                            </PostHeader>
                            {post.bookTitle ?
                                <PostBookContainer>
                                    {post.bookphotoUrl ?  <img src={post?.bookphotoUrl} onClick={() => router.push(`/search/id/${post.bookId}`)} alt="book-cover" /> : <img src='/images/photos/book-default.jpg' alt="book-cover" />  }
                                    <div>
                                        <h3>{post?.bookTitle}</h3>
                                        <p>{`${post?.bookSearchInfo}...`}</p>
                                        <span>
                                            <p><strong>Author:&nbsp;</strong>{post.bookAuthor}</p>
                                            <p><strong>Pages:&nbsp;</strong>{post.bookpageCount}</p>
                                        </span>
                                        <PostTextContainer>
                                            <p>{post.text}</p>
                                        </PostTextContainer>
                                    </div>
                                </PostBookContainer>
                                :
                                <PostTextContainer>
                                    <p>{post.text}</p>
                                </PostTextContainer>
                            }
                            <p>Coments <IoIosArrowDown/></p>
                            {post.comments ? post?.comments.map((comment:any,i) => 
                                <ComentBody key={i}>
                                    {comment?.photoUrl ? <Photo src={comment?.photoUrl} alt="avatar" /> : <CgProfile fontSize={60}/>}
                                    <div>
                                        <p>{comment.username}</p>
                                        <ComentContainer >{comment.text}</ComentContainer> 
                                    </div>
                                </ComentBody>

                            )
                                : 
                                ''
                            }
                        <InputPostComponent postId={post.postId}/>
                        </PostContent>
                    </PostContainer>
                    )
                }
            )}
        </>
    )
}