import DataDisplay from "./Displays/DataDisplay"
import "./WeatherDisplay.css"

type displayProps = {
    id?: string
    icon: any
    temp: any 
    feelsLike: any
    windspeed: any
}

function WeatherDisplay(props: displayProps){
return (
<div className="displayContainer">
    <section className="picture">
        <DataDisplay id="iconDisplay" display={props.icon}/>
 </section>
   <section className="data">
    <DataDisplay id="tempDisplay" display={props.temp}/>
    <DataDisplay id="feelsLikeDisplay" display={props.feelsLike}/>
    <DataDisplay id="windspeedDisplay" display={props.windspeed}/>
    </section>
    
</div>
)
}

export default WeatherDisplay