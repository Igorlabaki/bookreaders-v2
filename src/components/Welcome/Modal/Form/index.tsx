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

    const [nameInput            , setNameInput]                         = useState("")
    const [passwordInput        , setpasswordInput]                     = useState("")
    const [passworConfirmdInput , setpasswordConfirmInput]              = useState("")
    const [emailInput           , setemailInput]                        = useState("")

    const [error, seterror] = useState(null)

    function handleSubmit(){

    }

    return (
        <FormContainer>
            {title === "Login" ? 
               <button className='close-button' onClick={handleCloseLoginModal}><AiOutlineClose/></button>
               :
               <button className='close-button' onClick={handleCloseRegisterModal}><AiOutlineClose/></button>
            }
            <h1>{title}</h1>
            <div>
                <Input label="Email"            type="email"    onChange={setemailInput}            value={emailInput}           required/>
                <Input label="Username"         type="text"     onChange={setNameInput}             value={nameInput}            required  noRender={title === 'Login'}/>
                <Input label="Password"         type="password" onChange={setpasswordInput}         value={passwordInput}        required/>
                <Input label="Confirm Password" type="password" onChange={setpasswordConfirmInput}  value={passworConfirmdInput} required noRender={title === 'Login'}/>
            </div>
            {renderText(title)}
            <Button  submit={handleSubmit}></Button>
            <Button  submit={handleSubmit} googleButton><FcGoogle fontSize={25}/></Button>
        </FormContainer>
    )
}