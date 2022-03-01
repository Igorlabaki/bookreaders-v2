import { useEffect, useState } from 'react'
import {CgProfile} from 'react-icons/cg'
import {IoIosArrowDown} from 'react-icons/io'
import { PostContainer, Photo, PostHeader, PostBookContainer, PostContent, PostTextContainer  } from './styles'
import usePostsContext from "../../../../../../hook/usePostsContext"
import usePaginationContext from '../../../../../../hook/usePaginationContext'
import useAuthContext from '../../../../../../hook/useAuthContext'
import { InputPostComponent } from '../inputPost'

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

interface PostComponent{
    type:string
}


export function PostsComponent({type}: PostComponent){

    const {posts,getUserPosts,getPosts} = usePostsContext()
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
    
    let currentList = []

    if(type.includes('userPost')){
        currentList = user.posts.slice(indexOfFirstPost,indexOfLastBook)
    }
    if(type.includes('allPost')){
        currentList = posts.slice(indexOfFirstPost,indexOfLastBook) 
    }

    return(
        <>
            {currentList.map((post: Post,i) => {
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
                                    {post.bookphotoUrl ?  <img src={post?.bookphotoUrl} alt="book-cover" /> : <img src='/images/photos/book-default.jpg' alt="book-cover" />  }
                                    <div>
                                        <h3>{post?.bookTitle}</h3>
                                        <p>{post?.bookSearchInfo}</p>
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
                        </PostContent>
                    </PostContainer>
                    )
                }
            )}
        </>
    )
}