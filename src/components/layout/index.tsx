import {Header} from "./Header";
import {Aside} from "./Aside";
import { LayoutContainer, MainContainer } from './style';
import { ReactNode, useEffect } from "react";
import { useRouter } from 'next/router'
import useModalContext from "../../hook/useModalContext";
import useFireBaseContext from "../../hook/useFirebaseContext";

interface LayoutProps{
    children: ReactNode;
}

export function Layout({children} : LayoutProps){

    const { asPath } = useRouter()
    const { userAuth,getUser,user} = useFireBaseContext()
    const {handleOpenLoginModal} = useModalContext()
    const router = useRouter()
    
    useEffect(() => {
       const token  = sessionStorage.getItem('Token') 
        if(!userAuth || !token){
            router.push('/')
            handleOpenLoginModal()
        }
        getUser()
        console.log(user)
    }, [])
    

    function handleAsideProfile(){
        if(asPath == '/profile'){
           return  <Aside profileMode={true}/>
        }else{
           return  <Aside profileMode={false}/>
        }
    }

    return(
        <LayoutContainer>
            <Header/>
            <MainContainer>
                {handleAsideProfile()}
                {children}
            </MainContainer>
        </LayoutContainer>
    )
}