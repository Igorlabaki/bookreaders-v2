import { useState } from 'react'
import {BsThreeDots,BsTrash} from 'react-icons/bs'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import usePostsContext from '../../../../../../../hook/usePostsContext'
import { ModalEditComponent } from '../../../Modal/editPostModal'
import { EditContainer, ItemEditContainer } from './styles'

interface EditProps{
    elementId: string
    elementUserId: string
    userId: string
    postId?:string
    bookId?:string
    deleteElement: (id: string, postId?: string) => void
}

export function EditComponent({elementId,userId,elementUserId,deleteElement,postId,bookId}: EditProps){

    const [modal, setModal] = useState(false)

    function handleOpenModal(){
        setModal(true)
    }

    function handleCloseModal(){
        setModal(false)
    }
    return (
        <>
            {
                elementUserId == userId ?
                <div><BsThreeDots onClick={handleOpenModal}/></div> : null}
                {
                    modal ?
                    <ModalEditComponent onClose={handleCloseModal}>
                        <ItemEditContainer >
                            <i><MdOutlineModeEditOutline/></i>
                            <p> Edit</p>
                        </ItemEditContainer>
                        {
                        postId ? 
                            <ItemEditContainer onClick={() => deleteElement(elementId,postId)}>
                                <i><BsTrash/></i>
                                <p>Delete</p>
                            </ItemEditContainer>
                                :
                            <ItemEditContainer onClick={() => deleteElement(elementId,bookId)}>
                                <i><BsTrash/></i>
                                <p>Delete</p>
                            </ItemEditContainer>

                        }
                    </ModalEditComponent> : null
                }                      
        </>
    )
}