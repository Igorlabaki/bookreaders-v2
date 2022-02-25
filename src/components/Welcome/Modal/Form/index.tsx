import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import {FcGoogle} from "react-icons/fc"
import {AiOutlineClose} from "react-icons/ai"
import { ErrorContainer, FormContainer } from './styles';
import useAuthContext from '../../../../hook/useAuthContext';
import useModalContext from '../../../../hook/useModalContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface FormProps{
    title:string
}

export default function Form({title} : FormProps) {
    
    const {error} = useAuthContext()
    const {renderText,handleCloseLoginModal,handleCloseRegisterModal} = useModalContext()
    
    
    const [passwordInput            , setpasswordInput]                         = useState("")
    const [emailInput               , setemailInput]                            = useState("")
    const [displayName              , setDisplayName]                           = useState("")
    
    const loginForm         = title.includes("Login")
    const RegisterForm      = title.includes("Register")
    
    const notify = () => toast(error);

    function handleCloseModal(){
        if(loginForm){
            return (
                <button className='close-button' onClick={handleCloseLoginModal}><AiOutlineClose/></button>
            )
        }else{
            return (
                <button className='close-button' onClick={handleCloseRegisterModal}><AiOutlineClose/></button>
            )
        }
    }

    function handleButtonsAuth(){
        if(loginForm){
            return (
                <Button loginButton={true} password={passwordInput} email={emailInput}  />
            )
        }else{
            return (
                <Button registerButton password={passwordInput} email={emailInput} displayName={displayName} />
            )
        }
    }

    function handleError(){
       if(error && loginForm){
        return(
            <ErrorContainer>
                <p>{error}</p>
            </ErrorContainer>
        )
       }else if(error && RegisterForm){
        return(
            <ErrorContainer>
                <p>{error}</p>
            </ErrorContainer>
        )
       }
    }

    return (
        <FormContainer>
            {handleCloseModal()}
            <h1>{title}</h1>
            <div>
                {handleError()}
                <Input label="Email"            type="email"        onChange={setemailInput}                value={emailInput}           required/>
                <Input label="Username"         type="text"         onChange={setDisplayName}               value={displayName}          required noRender={loginForm}/>
                <Input label="Password"         type="password"     onChange={setpasswordInput}             value={passwordInput}        required/>
            </div>
            {renderText(title)}
            {handleButtonsAuth()}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            <Button googleButton><FcGoogle fontSize={25}/></Button>
        </FormContainer>
    )
}