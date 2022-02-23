import useFireBaseContext from "../../../../../hook/useFirebaseContext";
import useModalContext from "../../../../../hook/useModalContext";
import PhotoModalComponent from "../../Modal";
import { PhotoContainer,NavProfileContainer, InfoContainer, IconContainer } from "./style";
import { CgProfile }    from "react-icons/cg";
import { ImBooks }      from "react-icons/im";
import { MdLibraryBooks }      from "react-icons/md";
import { BsTrophyFill }      from "react-icons/bs";

export function NavProfile(){

    const {user,userAuth} = useFireBaseContext()
    const {handleOpenPhotoModal} = useModalContext()

    function handleUserPhoto(){
        return(
            <>
            { userAuth?.photoURL ? 
                    <PhotoContainer src={userAuth.photoURL} alt="user photo" onClick={handleOpenPhotoModal}/>
                :
                <IconContainer onClick={handleOpenPhotoModal}>
                    <CgProfile fontSize={178} color={'var(--blue-button)'}/>
                </IconContainer>
            }
        </>
        )
    }

    return(
        <NavProfileContainer>
            {handleUserPhoto()}
            <PhotoModalComponent/>
            <InfoContainer>
                <div>
                    <span><ImBooks        fontSize={30} color={'rgb(155, 178, 243)'}     /></span>
                    <span><MdLibraryBooks fontSize={30} color={'rgb(155, 178, 243)'}  /></span>
                    <span><BsTrophyFill   fontSize={27} color={'rgb(155, 178, 243)'}/></span> 
                </div>
            </InfoContainer>
        </NavProfileContainer>
    )
}