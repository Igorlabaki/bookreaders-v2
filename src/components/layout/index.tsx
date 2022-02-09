import {Header} from "./Header";
import {Aside} from "./Aside";
import { LayoutContainer } from './style';
import { ReactNode } from "react";
interface LayoutProps{
    children: ReactNode;
}

export function Layout({children} : LayoutProps){
    return(
        <LayoutContainer>
            <Header/>
            <div>
                <Aside/>
                <section>
                    {children}
                </section>
            </div>
        </LayoutContainer>
    )
}