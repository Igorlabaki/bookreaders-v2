import { ButtonContainer } from "./styles";

interface ButtonProps {
    submit: (event: any) => void
    children?: JSX.Element
    googleButton?: boolean
}

export default function Button({submit,children,googleButton}: ButtonProps) {

    return (
        <ButtonContainer
            onClick={submit}
            className={`${googleButton ? "google-button" : ""}`}
        >
            <p>{googleButton ? 'Sing in with ' : 'Confirm'}</p>
            {children}
        </ButtonContainer>)
}