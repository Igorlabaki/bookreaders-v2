import { WelcomeContainer, ContainerIntroText} from "./styles";
import Header               from "./Header";
import ModalComponent       from "./Modal";
import  FooterComponent     from "./Footer";

export default function WelcomePage() {
  return (
      <WelcomeContainer>
        <Header/>
        <ContainerIntroText>
          <h1>Welcome to the BookReaders</h1>
          <h2>A social network made for those  who love to read</h2>
          <div>
            <p>This project was developed in Next.Js, React, Typescript,Firebase and Styled Component</p>
            <p>The goal is to simulate a social network with feed, rating and friends systems.</p>
          </div>
        </ContainerIntroText>
        <FooterComponent/>
        <ModalComponent/>
      </WelcomeContainer>
  )
}
