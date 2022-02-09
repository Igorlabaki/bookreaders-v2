import { WelcomeContainer, ContainerIntroText, ContainerSocialLinks } from "./styles";
import Icon                 from "./Footer/Icon";
import Header               from "./Header";
import ModalComponent       from "./Modal";

export default function WelcomePage() {
  return (
    <WelcomeContainer>
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
    </WelcomeContainer>
  )
}
