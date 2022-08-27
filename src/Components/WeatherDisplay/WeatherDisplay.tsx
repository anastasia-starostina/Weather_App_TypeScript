import DataDisplay from "./Displays/DataDisplay";
import "./WeatherDisplay.css";
import {useState, useEffect} from 'react'

type displayProps = {
  id?: string;
  icon: any;
  temp: any;
  feelsLike: any;
  windspeed: any;
};


function WeatherDisplay(props: displayProps) {
  return (
    <div className="displayContainer">
        <img
          className="picture"
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="Weather Icon"
        />
      <section className="data">
        <h5>Temperature</h5>
        <DataDisplay id="tempDisplay" display={props.temp} />
        <h5>Feels Like</h5>
        <DataDisplay id="feelsLikeDisplay" display={props.feelsLike} />
        <h5>Wind Speed</h5>
        <DataDisplay id="windspeedDisplay" display={props.windspeed} />
      </section>
    </div>
  );
}

export default WeatherDisplay;
