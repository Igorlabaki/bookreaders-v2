import { useEffect, useState } from "react";
import useFireBaseContext from "../../../../hook/useFirebaseContext";
import { BoxComponent } from "../util/Box";
import { BioTextContainer, LoadingContainer, ProfileContainer } from "./style";

export function ProfileComponent(){

    const [bio, setbio]             = useState('')
    const [editType, setEditType]   = useState(false)
    const [count, setCount] = useState(-1);

    const {addBio,isLoading,user,getUser,userAuth} = useFireBaseContext()

    return(
        <ProfileContainer>
            <BoxComponent title="Bio">
                <form action="POST">
                    {
                        isLoading === true ?
                        <LoadingContainer>
                            <img src="images/gif/load.gif" alt="" />
                            <p>Loading...</p>
                        </LoadingContainer>
                        : 
                        user?.bio && editType === false ? 
                        <>
                            <BioTextContainer>
                                {user.bio}
                            </BioTextContainer> 
                            <button onClick={ (e) =>{e.preventDefault();setEditType(true)}}><p>Edit</p></button>
                        </>
                        :  
                        <>
                            <textarea placeholder={user ? user.bio : "I Love Books..."} value={bio} onChange={(e) => setbio(e.target.value)}/>
                            <div>
                                <button onClick={ (e) =>{e.preventDefault();addBio(bio);setEditType(false);setbio("")}}><p>Update</p> </button>
                                <button onClick={ (e) =>{e.preventDefault();setEditType(false)}}><p>Cancel</p></button>
                            </div>
                        </>
                    }
                </form>
            </BoxComponent>
        </ProfileContainer>
    )
}