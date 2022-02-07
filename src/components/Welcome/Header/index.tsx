import useHomeContext from "../../../hook/useHomeContext";
import { Button } from "./Button";
import { Container } from "./style";


export default function Header() {

  const {handleOpenLoginModal,handleOpenRegisterModal} = useHomeContext()

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