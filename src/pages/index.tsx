import { Container, ContainerIntroText, ContainerSocialLinks } from "./style";
import { ContextProvider }  from "../Context/Home/HomeContext";
import Icon                 from "../components/Home/Icon";
import Header               from "../components/Home/Header";
import useHomeContext from "../Context/Home/hook/useHomeContext";
import ModalComponent from "../components/Home/Modal";

export default function Home() {
  return (
    <ContextProvider>
      <Container>
        <Header/>
        <ContainerIntroText>
          <h1>Welcome to the BookReaders</h1>
          <h2>A social network made for those  who love read</h2>
          <div>
            <p>This project was developed in Next.Js, React, Typescript and Styled Component</p>
            <p>The obejective is to simulate  a social network whith feed,rating and friends system.</p>
          </div>
        </ContainerIntroText>
        <ContainerSocialLinks>
          <p>Coded by Igor Goncalo</p>
          <div>
            <Icon alt="github-icon"   img="/images/brand-icons/github.png"    url="https://github.com/Igorlabaki"/>
            <Icon alt="linkedin-icon" img="/images/brand-icons/linkedin.png"  url="https://www.linkedin.com/in/igor-augusto-labaki-goncalo-b75918199/"/>
            <Icon alt="gmail-icon"    img="/images/brand-icons/gmail.png"     url="https://www.linkedin.com/in/igor-augusto-labaki-goncalo-b75918199/"/>
          </div>
        </ContainerSocialLinks>
        <ModalComponent/>
      </Container>
    </ContextProvider>
  )
}
