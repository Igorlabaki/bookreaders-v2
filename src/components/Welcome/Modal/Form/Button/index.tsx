import useFireBaseContext from "../../../../../hook/useFirebaseContext";
import { ButtonContainer } from "./styles";

interface ButtonProps {
    email               ?: string
    password            ?: string
    googleButton        ?: boolean
    registerButton      ?: boolean
    loginButton         ?: boolean
    children            ?: JSX.Element
    onCLick             ?:() => void
}

export default function Button({children,googleButton,registerButton,loginButton,email,password}: ButtonProps) {

    const {loginGoogle,register,login} = useFireBaseContext()

    function handleTypeButton(){
        return (
            <>
            {   googleButton ? 
                    <ButtonContainer
                    onClick={loginGoogle}
                    className="google-button"
                    >
                        <p>Sing in with</p>
                        {children}
                    </ButtonContainer>
                :
                loginButton ?
                    <ButtonContainer
                    onClick={() => login(email,password)}
                    >
                    <p>{'Confirm'}</p>
                    {children}
                    </ButtonContainer>      
                :
                    <ButtonContainer
                    onClick={() => register(email,password)}
                    >
                    <p>{'Confirm'}</p>
                    {children}   
                    </ButtonContainer>    
            }
            </>
        )
    }

    return (
        <>
            {handleTypeButton()}
        </>
    )
}