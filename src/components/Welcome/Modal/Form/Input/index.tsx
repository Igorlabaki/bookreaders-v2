import {InputContainer} from './styles'
interface InputProps{
    label: string
    value: string
    required?: boolean
    noRender?: boolean
    type?: "text" | "password" | "email"
    onChange: (event: any) => void
}

export default function Input({label,type,onChange,value,required,noRender}: InputProps) {
    return noRender ? null : (
      <InputContainer>
        <label>{label}:</label>
        <input type={type ?? 'text'}
            value={value}
            required={required}   
            onChange={e => onChange?.(e.target.value)}>
        </input>
      </InputContainer>
    )
  }