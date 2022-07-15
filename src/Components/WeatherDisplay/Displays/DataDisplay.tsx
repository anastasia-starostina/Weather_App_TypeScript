
import "./dataDisplay.css"

type DisplayProps = {
display: any
id: string
}


function DataDisplay(props: DisplayProps) {
   return (
   <div className="dataDisplay" id={props.id}> 
        <p>{props.display}</p>
    </div>
   )
}

export default DataDisplay