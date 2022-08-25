import "./Description.css"

type DescriptionProps = {
    text: string
}

function Description (props :DescriptionProps){
    return(
    <section className="descriptionContainer">
        <h1 className="descriptionTitle"> Weather Now</h1>
        <p className="descriptionContent">{props.text}</p>
    </section>
    )
}

export default Description