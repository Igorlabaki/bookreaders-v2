import useFireBaseContext from "../../../../../hook/useFirebaseContext";
import useModalContext from "../../../../../hook/useModalContext";
import PhotoModalComponent from "../../Modal";
import { PhotoContainer,NavProfileContainer, InfoContainer } from "./style";
import { CgProfile }    from "react-icons/cg";
import { ImBooks }      from "react-icons/im";
import { MdLibraryBooks }      from "react-icons/md";

export function NavProfile(){

    const {user,userAuth} = useFireBaseContext()
    const {handleOpenPhotoModal} = useModalContext()

    function handleUserPhoto(){
        return(
            <PhotoContainer>
                { userAuth?.photoURL ? 
                    <>
                        <img src={userAuth.photoURL} alt="user photo" onClick={handleOpenPhotoModal}/>
                        
                        <button >Edit photo</button>
                    </>
                    :
                    <>
                        <CgProfile fontSize={130}/>
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
                <div>
                    <ImBooks fontSize={30}/>
                    <MdLibraryBooks fontSize={30}/>
                </div>
            </InfoContainer>
        </NavProfileContainer>
    )
}