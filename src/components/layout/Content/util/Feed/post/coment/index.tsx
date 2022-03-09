import { useEffect, useState } from 'react'
import {CgProfile} from 'react-icons/cg'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import { CommentButton, CommentEditContainer, CommentInfo, Photo } from './styles'
import { ComentBody, ComentContainer } from './styles'
import usePostsContext from '../../../../../../../hook/usePostsContext'
import { EditComponent } from '../edit'
import useAuthContext from '../../../../../../../hook/useAuthContext'

interface EditProps{
   postComments: []
}

export function CommentComponent({postComments}: EditProps){

    const {getPosts,getUserPosts,deleteComment} = usePostsContext()
    const {user} = useAuthContext()
    const [comment, setComment] = useState(true)

    useEffect(() => {
        getPosts()
        getUserPosts()
    }, [])
    
    return (
        <>
            <CommentButton onClick={() => setComment(!comment)}>
                Comments 
                {comment ?  
                    <IoIosArrowUp/> 
                    : 
                    <>
                        <span>({postComments.length})</span>
                        <IoIosArrowDown/>
                    </>
                }
            </CommentButton>
            {comment  ? 
                <>
                    {postComments.map((comment:any,i) => {
                        return(
                            <>
                                <ComentBody key={i}>
                                {comment?.photoUrl ? <Photo src={comment.photoUrl} alt="avatar" /> : <CgProfile fontSize={60}/>}
                                <CommentInfo>
                                    <CommentEditContainer>
                                        <p>{comment.username}</p>
                                        <EditComponent userId={user?.uid}  elementUserId={comment.userId} elementId={comment.commenttId} postId={comment.postId} deleteElement={deleteComment} />
                                    </CommentEditContainer>
                                    <ComentContainer >{comment.text}</ComentContainer> 
                                </CommentInfo>
                                </ComentBody>
                            </>
                        )
                    })}
                </>
            : null}     
        </>
    )
}
