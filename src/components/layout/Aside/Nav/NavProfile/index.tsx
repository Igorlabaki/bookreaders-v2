import useFireBaseContext from "../../../../../hook/useFirebaseContext";
import useModalContext from "../../../../../hook/useModalContext";
import PhotoModalComponent from "../../Modal";
import { PhotoContainer,NavProfileContainer, InfoContainer } from "./style";
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
                    <CgProfile fontSize={40} color={'var(--blue-button)'}/>
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
                    <ImBooks        fontSize={30} color={'rgb(75, 94, 78)'}     />
                    <MdLibraryBooks fontSize={30} color={'rgb(133, 135, 248)'}  />
                    <BsTrophyFill   fontSize={27} color={'rgb(212, 157, 45)'}/>
                </div>
            </InfoContainer>
        </NavProfileContainer>
    )
}