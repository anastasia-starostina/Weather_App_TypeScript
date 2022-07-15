import { AnySrvRecord } from "dns"



type buttonProps = {
    onClick: any
}


function Button(props: buttonProps) {
    return (
        <button onClick={props.onClick}>Submit</button>
    )
}

export default Button