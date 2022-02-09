import { ButtonContainer } from "./style";

interface ButtonProps{
    text:     string
    onClick: (event: any) => void
}
  
export function Button({text, onClick}: ButtonProps) {

    return(
        <ButtonContainer  onClick={onClick}>
            {text}
        </ButtonContainer>
    )
}