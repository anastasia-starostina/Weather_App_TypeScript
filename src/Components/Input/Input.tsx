import '../Input/Input.css'

type InputProps = {
    text: React.Dispatch<React.SetStateAction<string>>
}


function Input(props: InputProps) {
    return (
        <input placeholder="Search for your city here" className="input" onChange={(event) => props.text(event.target.value)} type="text"/>
    )
}

export default Input;