import Icon from "./Icon";
import { FooterContainer } from "./style";

export default function FooterComponent() {
    return (
      <FooterContainer>
        <div>
          <Icon alt="github-icon"   img="/images/brand-icons/github.png"    url="https://github.com/Igorlabaki"/>
          <Icon alt="linkedin-icon" img="/images/brand-icons/linkedin.png"  url="https://www.linkedin.com/in/igor-augusto-labaki-goncalo-b75918199/"/>
          <Icon alt="gmail-icon"    img="/images/brand-icons/gmail.png"     url="https://www.linkedin.com/in/igor-augusto-labaki-goncalo-b75918199/"/>
        </div>
        <p>Coded by Igor Goncalo</p>
      </FooterContainer>
    )
}