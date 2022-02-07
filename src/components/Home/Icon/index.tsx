import { Container } from "./style";

interface IconProps{
    alt: string
    img: string
    url: string
}

export default function Icon(props: IconProps) {
    return (
      <Container>
          <a href={props.url} target="_blank">
            <img  className="cursor-pointer blank" src={props.img} alt={props.alt} />
          </a>
      </Container>
    )
  }