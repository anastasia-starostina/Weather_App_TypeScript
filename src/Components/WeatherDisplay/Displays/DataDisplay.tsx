import "./dataDisplay.css"

type DisplayProps = {
display: any
}


function DataDisplay(props: DisplayProps){
    <div>
        <p>{props.display}</p>
    </div>
}

export default DataDisplay