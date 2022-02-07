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
      <div className="mt-5 flex flex-col">
        <label className="font-semibold text-lg text-gray-600 mb-3">{props.label}:</label>
        <input type={props.type ?? 'text'}
            value={props.value}
            className="leading-6 rounded-lg p-2 outline-none focus:bg-blue-100" 
            required={props.required}   
            onChange={e => props.onChange?.(e.target.value)}>
        </input>
      </div>
    )
  }