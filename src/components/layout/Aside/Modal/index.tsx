import Modal                from 'react-modal';
import { AiOutlineClose }   from 'react-icons/ai';
import { CgProfile }        from 'react-icons/cg';
import { MdAddAPhoto }      from 'react-icons/md';
import { ButtonContainer, ModalContainer, PhotoContainer, UploadContainer } from './style';
import useAuthContext       from '../../../../hook/useAuthContext';
import useModalContext      from '../../../../hook/useModalContext';
import useUpdateUserContext from '../../../../hook/useUpdateUserContext';
import { LoadComponent } from '../../Content/util/Loading';

export default function PhotoModalComponent() {

    const {userAuth}                                = useAuthContext()
    const {isPhotoModalOpen, handleClosePhotoModal} = useModalContext()
    const {uploadPhoto,changeAvatarHandler,avatar,isLoading}  = useUpdateUserContext()

    function handleUserPhoto(){
        return(
            <>
                { userAuth?.photoURL ? 
                    <>
                        <PhotoContainer src={userAuth.photoURL} alt="user photo" />
                    </>
                    :
                    <>
                        <CgProfile fontSize={120}/>
                    </>
                }
            </>
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
