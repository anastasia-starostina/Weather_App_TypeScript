import "./Header.css"

type HeadingProps = {
    city: string
}


function Header (props:HeadingProps){

    return (
      
        <h1 className="locationContainer">{props.city}</h1>
        
    )
}

export default Header