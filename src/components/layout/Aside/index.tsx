import { useEffect } from "react";
import useAuthContext from "../../../hook/useAuthContext";
import useBookContext from "../../../hook/useBookContext";
import useBookFirebaseContext from "../../../hook/useBooksFirebaseContext";
import { BoxComponent } from "../Content/util/Box";
import PhotoModalComponent  from "./Modal";
import { NavDefault}        from "./Nav/NavDefault";
import { NavProfile }       from "./Nav/NavProfile";
import { StaticsContainer } from "./Nav/NavProfile/style";
import { ContainerAside }   from "./style";

interface AsideProps{
    profileMode?:Boolean
}

export function Aside({profileMode}:AsideProps){

    const {user} = useAuthContext()
    const {pageRead,getCountPages} =     useBookFirebaseContext()
    
    useEffect(() => {
        getCountPages()
    }, [])
    

    return(
        <ContainerAside>
            {
                profileMode ? 
                <>
                   <NavProfile/>
                </>
                :    
                <NavDefault/>
            }
            <PhotoModalComponent/>
        </ContainerAside>
    )
}