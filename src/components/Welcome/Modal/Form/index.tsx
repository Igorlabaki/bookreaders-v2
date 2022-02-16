import Input from './Input';
import { useState } from 'react';
import { ErrorContainer, FormContainer } from './styles';
import {AiOutlineClose} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import useModalContext from '../../../../hook/useModalContext';
import Button from './Button';
import useFireBaseContext from '../../../../hook/useFirebaseContext';
interface FormProps{
    title:string
}

export default function Form({title} : FormProps) {
    
    const {renderText,handleCloseLoginModal,handleCloseRegisterModal} = useModalContext()
    const {error} = useFireBaseContext()

    const [passwordInput            , setpasswordInput]                         = useState("")
    const [emailInput               , setemailInput]                            = useState("")
    const [userNameInput            , setuserNameInput]                        = useState("")

    function handleCloseModal(){
        return(
            <>
                {title === "Login" ? 
               <button className='close-button' onClick={handleCloseLoginModal}><AiOutlineClose/></button>
               :
               <button className='close-button' onClick={handleCloseRegisterModal}><AiOutlineClose/></button>
                }
            </>
        )
    }
    function handleButtonsAuth(){
        return (
            <>
                { title === "Login" ?
                    <Button loginButton={true} password={passwordInput} email={emailInput}  />
                :
                    <Button registerButton password={passwordInput} email={emailInput}  />
                }
            </>
        )
    }

    return (
        <FormContainer>
            {handleCloseModal()}
            <h1>{title}</h1>
            <div>
                {
                    error && title == 'Login'? 
                        <ErrorContainer>
                            <p>{error}</p>
                        </ErrorContainer>
                    :
                    error && title == 'Register'? 
                        <ErrorContainer>
                            <p>{error}</p>
                        </ErrorContainer>
                    :
                        ""
                }
                <Input label="Email"            type="email"        onChange={setemailInput}                value={emailInput}           required/>
                <Input label="Username"         type="text"         onChange={setuserNameInput}             value={userNameInput}        required noRender={title === 'Login'}/>
                <Input label="Password"         type="password"     onChange={setpasswordInput}             value={passwordInput}        required/>
            </div>
            {renderText(title)}
            {handleButtonsAuth()}
            <Button googleButton><FcGoogle fontSize={25}/></Button>
        </FormContainer>
    )
}