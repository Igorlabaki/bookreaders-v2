import PhotoModalComponent  from "../../Modal";
import { CgProfile }        from "react-icons/cg";
import { ImBooks }          from "react-icons/im";
import { BsTrophyFill }     from "react-icons/bs";
import { MdLibraryBooks }   from "react-icons/md";
import { PhotoContainer,NavProfileContainer, InfoContainer, IconContainer, Container } from "./style";
import useAuthContext from "../../../../../hook/useAuthContext";
import useModalContext from "../../../../../hook/useModalContext";

export function NavProfile(){

    const {userAuth} = useAuthContext()
    const {handleOpenPhotoModal} = useModalContext()

    function handleUserPhoto(){
        return(
            <Container>
            { userAuth?.photoURL ? 
                <PhotoContainer src={userAuth.photoURL} alt="user photo" onClick={handleOpenPhotoModal}/>
                :
                <IconContainer onClick={handleOpenPhotoModal}>
                    <CgProfile fontSize={178} color={'var(--blue-button)'}/>
                </IconContainer>
            }
            </Container>
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