import Input from './Input';
import { useState } from 'react';
import { FormContainer } from './styles';
import {AiOutlineClose} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import useModalContext from '../../../../hook/useModalContext';
import Button from './Button';


interface FormProps{
    title:string
}


export default function Form({title} : FormProps) {
    
    const {renderText,handleCloseLoginModal,handleCloseRegisterModal} = useModalContext()

    const [passwordInput        , setpasswordInput]                     = useState("")
    const [passworConfirmdInput , setpasswordConfirmInput]              = useState("")
    const [emailInput           , setemailInput]                        = useState("")

    const [error, seterror] = useState(null)

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
                    <Button loginButton password={passwordInput} email={emailInput}/>
                :
                    <Button registerButton password={passwordInput} email={emailInput}/>
                }
            </>
        )
    }

    return (
        <FormContainer>
            {handleCloseModal()}
            <h1>{title}</h1>
            <div>
                <Input label="Email"            type="email"    onChange={setemailInput}            value={emailInput}           required/>
                <Input label="Password"         type="password" onChange={setpasswordInput}         value={passwordInput}        required/>
            </div>
            {renderText(title)}
            {handleButtonsAuth}
            <Button googleButton><FcGoogle fontSize={25}/></Button>
        </FormContainer>
    )
}