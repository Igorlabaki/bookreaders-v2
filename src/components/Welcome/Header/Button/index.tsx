import { ButtonContainer } from "./style";

interface ButtonProps{
    text:     string
    onClick: (event: any) => void
}
  
export function Button(props: ButtonProps) {
    return(
        <ButtonContainer  onClick={props.onClick}>
            {props.text}
        </ButtonContainer>
    )
}