import { CgProfile } from "react-icons/cg";
import useFireBaseContext from "../../../hook/useFirebaseContext";
import useModalContext from "../../../hook/useModalContext";
import PhotoModalComponent from "./Modal";
import {Nav} from "./Nav";
import { ContainerAside, PhotoContainer } from "./style";

interface AsideProps{
    profileMode?:Boolean
}

export function Aside({profileMode}:AsideProps){

    const {user} = useFireBaseContext()
    const {handleOpenPhotoModal} = useModalContext()

    function handleUserPhoto(){
        return(
            <PhotoContainer>
                { user?.photoURL ? 
                    <>
                        <img src={user.photoURL} alt="user photo" />
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
        <ContainerAside>
            {
                profileMode ? 
                <>
                   { handleUserPhoto()}
                </>
                :    
                <Nav/>
            }
            <PhotoModalComponent/>
        </ContainerAside>
    )
}