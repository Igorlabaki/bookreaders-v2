import { CgProfile } from "react-icons/cg";
import useFireBaseContext from "../../../../../hook/useFirebaseContext";
import useModalContext from "../../../../../hook/useModalContext";
import PhotoModalComponent from "../../Modal";
import { PhotoContainer,NavProfileContainer, InfoContainer } from "./style";

export function NavProfile(){

    const {user,userAuth} = useFireBaseContext()
    const {handleOpenPhotoModal} = useModalContext()

    function handleUserPhoto(){
        return(
            <PhotoContainer>
                { userAuth?.photoURL ? 
                    <>
                        <img src={userAuth.photoURL} alt="user photo" />
                        
                        <button onClick={handleOpenPhotoModal}>Edit photo</button>
                    </>
                    :
                    <>
                        <CgProfile fontSize={80}/>
                        <button onClick={handleOpenPhotoModal}>Add photo</button>
                    </>
                }
            </PhotoContainer>
        )
    }

    return(
        <NavProfileContainer>
            {handleUserPhoto()}
            <PhotoModalComponent/>
            <InfoContainer>
                <p><strong>{user?.username}</strong></p>
            </InfoContainer>
        </NavProfileContainer>
    )
}