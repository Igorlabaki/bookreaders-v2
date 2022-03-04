import { useState } from 'react'
import {BsThreeDotsVertical,BsTrash} from 'react-icons/bs'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import usePostsContext from '../../../../../../../hook/usePostsContext'
import { ModalEditComponent } from '../../../Modal/editPostModal'
import { EditContainer, ItemEditContainer } from './styles'

interface EditProps{
    postId: string
    postUserId: string
    userId: string
    postedAt: Date
}

export function EditComponent({postUserId,userId,postedAt,postId}: EditProps){

    const {getPosts,getUserPosts,deletePost} = usePostsContext()
    const [modal, setModal] = useState(false)

    function handleOpenModal(){
        setModal(true)
    }

    function handleCloseModal(){
        setModal(false)
    }
    return (
        <EditContainer>
            <p><span>Posted at {postedAt}</span></p>
            {
                postUserId == userId ?
                <BsThreeDotsVertical onClick={handleOpenModal}/> : null}
                {
                    modal ?
                    <ModalEditComponent onClose={handleCloseModal}>
                        <ItemEditContainer onClick={() => deletePost(postId)}>
                            <i><MdOutlineModeEditOutline/></i>
                            <p> Edit</p>
                        </ItemEditContainer>
                        <ItemEditContainer>
                          <i><BsTrash/></i>
                          <p>Delete</p>
                        </ItemEditContainer>
                    </ModalEditComponent> : null
                }                      
        </EditContainer>
    )
}