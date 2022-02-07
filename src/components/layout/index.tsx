import {Header} from "../layout/Header";
import {Aside} from "../layout/Aside";
import { LayoutContainer } from "./style";
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