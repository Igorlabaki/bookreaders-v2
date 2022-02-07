import { ButtonContainer } from "./styles";

interface ButtonProps {
    text: string
    submit: (event: any) => void
    children?: JSX.Element
    googleButton?: boolean
}

export default function Button({text,submit,children,googleButton}: ButtonProps) {

    return (
        <ButtonContainer
            onClick={submit}
            className={`${googleButton ? "google-button" : ""}`}
        >
            <p>{googleButton ? 'Sing in with ' : text}</p>
            {children}
        </ButtonContainer>)
}