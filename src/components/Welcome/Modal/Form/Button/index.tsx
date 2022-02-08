import useFireBaseContext from "../../../../../hook/useFirebaseContext";
import { ButtonContainer } from "./styles";

interface ButtonProps {
    submit: (event: any) => void
    children?: JSX.Element
    googleButton?: boolean
}

export default function Button({submit,children,googleButton}: ButtonProps) {

    const {loginGoogle} = useFireBaseContext()

    return (
        <>
        { googleButton ? 
            <ButtonContainer
            onClick={loginGoogle}
            className="google-button"
            >
                <p>Sing in with</p>
                {children}
            </ButtonContainer>
            :
            <ButtonContainer
            onClick={submit}
        >
            <p>{'Confirm'}</p>
            {children}
        </ButtonContainer>
            
        }
        </>
    )
}