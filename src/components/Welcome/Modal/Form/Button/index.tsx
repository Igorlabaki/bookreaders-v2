import { ButtonContainer } from "./styles";
import useAuthContext from '../../../../../hook/useAuthContext'

interface ButtonProps {
    email               ?: string
    password            ?: string
    displayName         ?: string
    loginButton         ?: boolean
    googleButton        ?: boolean
    registerButton      ?: boolean
    children            ?: JSX.Element
    onCLick             ?:() => void
}

export default function Button({children,googleButton,registerButton,loginButton,email,password,displayName}: ButtonProps) {

    const {loginGoogle,login,register} = useAuthContext()

    console.log(typeof(loginGoogle),typeof(login),typeof(register))

    function handleTypeButton(){
        return (
            <>
            {   googleButton ? 
                    <ButtonContainer
                    onClick={loginGoogle}
                    className="google-button"
                    >
                        <p>Sign in with</p>
                        {children}
                    </ButtonContainer>
                :
                loginButton ?
                    <ButtonContainer
                    onClick={() => 
                        login(email,password)
                    }
                    >
                    <p>{'Confirm'}</p>
                    {children}
                    </ButtonContainer>      
                :
                    <ButtonContainer
                    onClick={() => register(email,password,displayName)}
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