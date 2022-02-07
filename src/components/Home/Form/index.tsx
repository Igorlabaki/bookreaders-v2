import Input from '../Input';
import { useState } from 'react';
import { FormContainer } from './styles';
import {AiOutlineClose} from "react-icons/ai"
import useHomeContext from '../../../hook/useHomeContext';

interface FormProps{
    title:string
}


export default function Form({title} : FormProps) {
    
    const {handleCloseLoginModal,handleCloseRegisterModal} = useHomeContext()

    const [nameInput, setNameInput]                         = useState("")
    const [passwordInput, setpasswordInput]                 = useState("")
    const [passworConfirmdInput, setpasswordConfirmInput]   = useState("")
    const [emailInput, setemailInput]                       = useState("")

    const [error, seterror] = useState(null)

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
        </FormContainer>
    )
}