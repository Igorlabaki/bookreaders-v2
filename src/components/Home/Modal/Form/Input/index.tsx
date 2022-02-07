import {InputContainer} from './styles'
interface InputProps{
    label: string
    type?: "text" | "password" | "email"
    onChange: (event: any) => void
    value: string
    required?: boolean
    noRender?: boolean
}

export default function Input(props: InputProps) {
    return props.noRender ? null : (
      <InputContainer>
        <label>{props.label}:</label>
        <input type={props.type ?? 'text'}
            value={props.value}
            required={props.required}   
            onChange={e => props.onChange?.(e.target.value)}>
        </input>
      </InputContainer>
    )
  }