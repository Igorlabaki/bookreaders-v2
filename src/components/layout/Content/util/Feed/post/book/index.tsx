import { useRouter } from "next/router"
import { PostBookContainer, PostTextContainer } from "./styles"
interface Post{
    postId:     string
    userId:      string
    text?:     string
    username?: string,
    photoUrl?: string,
    bookTitle?: string,
    postedAt?: Date
    bookId?: string
    bookSearchInfo?: string,
    bookphotoUrl?: string
    bookAuthor?: string
    bookpageCount?: number
}
interface BookComponentProps{
    post: Post
}

export function BookComponent({post}: BookComponentProps){
    const router = useRouter()
    return (
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
    )
}
