import {Header} from "./Header";
import {Aside} from "./Aside";
import { LayoutContainer, MainContainer } from './style';
import { ReactNode } from "react";
import { useRouter } from 'next/router'

interface LayoutProps{
    children: ReactNode;
}

export function Layout({children} : LayoutProps){

    const { asPath } = useRouter()

    function handleAsideProfile(){
        console.log(asPath)
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