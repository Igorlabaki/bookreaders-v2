import { useEffect, useState } from 'react'
import {CgProfile} from 'react-icons/cg'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import { CommentButton, Photo } from './styles'
import { ComentBody, ComentContainer } from './styles'
import usePostsContext from '../../../../../../../hook/usePostsContext'

interface EditProps{
   postComments: []
}

export function CommentComponent({postComments}: EditProps){

    const {getPosts,getUserPosts,deletePost} = usePostsContext()
    const [comment, setComment] = useState(false)

    useEffect(() => {
        getPosts()
        getUserPosts()
    }, [])
    
    return (
        <>
            <CommentButton onClick={() => setComment(!comment)}>
                Coments 
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
                                <div>
                                    <p>{comment.username}</p>
                                    <ComentContainer >{comment.text}</ComentContainer> 
                                </div>
                                </ComentBody>
                            </>
                        )
                    })}
                </>
            : null}     
        </>
    )
}
