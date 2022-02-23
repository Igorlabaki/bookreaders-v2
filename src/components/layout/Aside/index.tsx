import PhotoModalComponent  from "./Modal";
import { NavDefault}        from "./Nav/NavDefault";
import { NavProfile }       from "./Nav/NavProfile";
import { ContainerAside }   from "./style";

interface AsideProps{
    profileMode?:Boolean
}

export function Aside({profileMode}:AsideProps){


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