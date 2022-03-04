import { useEffect } from 'react'
import { EditComponent } from './edit'
import { BookComponent } from './book'
import {CgProfile,} from 'react-icons/cg'
import { CommentComponent } from './coment'
import { InputPostComponent } from '../inputPost'
import { useRouter }            from "next/router";
import useAuthContext from '../../../../../../hook/useAuthContext'
import usePostsContext from "../../../../../../hook/usePostsContext"
import usePaginationContext from '../../../../../../hook/usePaginationContext'
import  useBookFirebaseContext from '../../../../../../hook/useBooksFirebaseContext'
import { PostContainer, Photo, PostHeader,PostContent, PostTextContainer} from './styles'
interface Post{
    postId:   string 
    userId:    string
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

    const {posts,getPosts,getUserPosts} = usePostsContext()
    const {currentPage,elementsPerPage,setCurrentPage} = usePaginationContext()
    const {user} = useAuthContext()
    const {teste} =  useBookFirebaseContext()

    useEffect(() => {
        setCurrentPage(1)
        if(type.includes('allPost')){
            getPosts()
        }
        setCurrentPage(1)
        if(type.includes('userPost')){
            getUserPosts()
        }
    }, [])

    const indexOfLastBook   = currentPage * elementsPerPage
    const indexOfFirstPost  = indexOfLastBook- elementsPerPage
    const router = useRouter()
    
    let currentList = []

    if(type.includes('userPost')){
        currentList = user?.posts.slice(indexOfFirstPost,indexOfLastBook)
    }
    if(type.includes('allPost')){
        currentList = posts?.slice(indexOfFirstPost,indexOfLastBook) 
    }

    return(
        <>
            {currentList?.map((post: Post,i) => {
                return(
                    <PostContainer key={i}>
                        {post.photoUrl ? <Photo src={post.photoUrl} alt="avatar" /> : <CgProfile fontSize={60}/>}
                        <PostContent>
                            <PostHeader>
                                <p onClick={() => router.push(`/user/${post.userId}`)}><strong>{post.username}</strong></p>
                                <EditComponent userId={user.uid}  postUserId={post.userId} postedAt={post.postedAt} postId={post.postId}/>
                            </PostHeader>
                            {post.bookTitle ?
                                <BookComponent  post={post}/>
                                :
                                <PostTextContainer>
                                    <p>{post.text}</p>
                                </PostTextContainer>
                            }   
                            {post.comments ? <CommentComponent postComments={post.comments}/> : null}
                        <InputPostComponent postId={post.postId}/>
                        </PostContent>
                    </PostContainer>
                    )
                }
            )}
        </>
    )
}

