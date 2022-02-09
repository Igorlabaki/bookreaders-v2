import useModalContext from "../../../hook/useModalContext";
import { Button } from "./Button";
import { Container } from "./style";


export default function Header() {

  const {handleOpenLoginModal,handleOpenRegisterModal} = useModalContext()

  return (
    <Container>
      <img src="/images/logo/logo.png" alt="logo" />
      <div>
        <Button text="Login"    onClick={handleOpenLoginModal}/>
        <Button text="Register" onClick={handleOpenRegisterModal}/>
      </div>
    </Container>
  )
}