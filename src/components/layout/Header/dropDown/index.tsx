import {DropDowContainer} from './style'

interface DropDownProps {
  children: JSX.Element
}

export default function DropDown(props: DropDownProps) {
  return (
    <DropDowContainer>
      <ul>
        {props.children}
      </ul>
    </DropDowContainer>
  )
}