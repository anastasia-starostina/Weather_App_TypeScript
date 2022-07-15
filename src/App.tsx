import React from 'react';
import './App.css';
import Description from './Components/Description/Description';
import Header from './Components/Header/Header';
import WeatherDisplay from './Components/WeatherDisplay/WeatherDisplay';
import {useEffect, useState} from 'react';


function App() {

  let data = {
    name: "",
    weather: [
      {
        icon: ""
      }
    ], 
    
  }
  const [weatherData, setWeatherData] = useState(data)
  console.log(weatherData)
  useEffect(()=> {  
     async function getWeatherData () {
      const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c157dcda079f751cecec21e6da384c39`);
      const answer = await result.json();
      console.log(answer);
      setWeatherData(answer);
    }
    getWeatherData()
    console.log(weatherData)
  }, [weatherData] )

  //set up state
  // - import useState +++
  // - weather, setWeather +++
  //send a fetch request to API  +++
  //What we are fetching: city, icon, temp, feels_like, windspeed, description
  //console.log what we are fethcing
  //pass result to result.json
  //result of result.json => setWeatherData as a response object
  //state will be weather and we'll pull data from the object


  return (
    
    <div className="App">
      <Header city={weatherData.name}/>
      <WeatherDisplay icon={weatherData.weather[0].icon} temp="12"  feelsLike="90" windspeed="75845784km"/>
      <Description text={"London sdfdsfdsfdsfdsfsf"}/>
    </div>
  );
}

export default App;
