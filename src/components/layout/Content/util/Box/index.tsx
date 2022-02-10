import { ReactNode } from "react";
import { BodyBox, BoxContainer, HeaderBox } from "./style";

interface BoxProps{
    children?: ReactNode
    title    : string
}

export function BoxComponent({title,children}:BoxProps){
    return(
        <BoxContainer>
            <HeaderBox>
                {title}
            </HeaderBox>
            <BodyBox>
                {children}
            </BodyBox>
        </BoxContainer>
    )
}