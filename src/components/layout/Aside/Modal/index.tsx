import Modal from 'react-modal';
import useFireBaseContext   from '../../../../hook/useFirebaseContext';
import useModalContext      from '../../../../hook/useModalContext';
import { ButtonContainer, ModalContainer, UploadContainer } from './style';
import { AiOutlineClose }   from 'react-icons/ai';
import { PhotoContainer }   from '../Nav/NavProfile/style';
import { CgProfile }        from 'react-icons/cg';
import { MdAddAPhoto }      from 'react-icons/md';

export default function PhotoModalComponent() {

    const {isPhotoModalOpen, handleClosePhotoModal} = useModalContext()
    const {userAuth,uploadPhoto,changeAvatarHandler,avatar,avatarUrl} = useFireBaseContext()

    function handleUserPhoto(){
        return(
            <PhotoContainer>
                { userAuth?.photoURL ? 
                    <>
                        <img src={avatarUrl} alt="user photo" />
                    </>
                    :
                    <>
                        <CgProfile fontSize={120}/>
                    </>
                }
            </PhotoContainer>
        )
    }

    return (
        <ModalContainer>
            <Modal 
                isOpen={isPhotoModalOpen}  
                onRequestClose={handleClosePhotoModal}
                overlayClassName="react-modal-photo-overlay"
                className="react-modal-photo-content"
                ariaHideApp={false}
            >
             <ButtonContainer  onClick={handleClosePhotoModal}><AiOutlineClose/></ButtonContainer>
             <UploadContainer>
                <h2>Upload photo</h2>
                {handleUserPhoto()}
                <form>
                    <div>
                        <span>
                            <MdAddAPhoto fontSize={30} color={"rgba(29, 53, 87)"}/> 
                            <p>Choose your photo</p> 
                            {
                                avatar ? <p>(1)</p> : ""
                            }
                        </span>
                        <input
                        type="file" 
                        onChange={(e) => changeAvatarHandler(e)}
                        />
                    </div>
                    <button type='submit' onClick={
                        (e)=> {
                            e.preventDefault()
                            uploadPhoto()
                            handleClosePhotoModal()
                        }
                    }>
                        Confirm
                    </button>
                </form>
             </UploadContainer>
            </Modal>
        </ModalContainer>
    )
    
    
}
