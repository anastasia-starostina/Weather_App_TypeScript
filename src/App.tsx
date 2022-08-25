import React from 'react';
import './App.css';
import Description from './Components/Description/Description';
import Header from './Components/Header/Header';
import WeatherDisplay from './Components/WeatherDisplay/WeatherDisplay';
import {useEffect, useState} from 'react';
import Input from './Components/Input/Input';
import Button from './Components/Button/button';


function App() {

  let data = {
    name: "",
    weather: [
      {
        icon: "",
        description:""
      }
    ], 
    main:{
      temp:0,
      feels_like:0
    },
    wind:{
      speed:0
    }
  }

  const [city, setCity] = useState("")
  const [inputCity, setInputCity] = useState("London,uk")
  console.log(city)

  function submitCity() {
    setInputCity(city)
  }

  const [weatherData, setWeatherData] = useState(data)
  console.log(weatherData)
  useEffect(()=> {  
     async function getWeatherData () {
      const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=8aba6173163790333e212dc3935b4c03`);
      const answer = await result.json();
      console.log(answer);
      setWeatherData(answer);

    }
    getWeatherData()
    console.log(weatherData)
  }, [inputCity] )

  //


  // useEffect(()=> {
  //   async function submitCity(city: string) {
  //     const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8aba6173163790333e212dc3935b4c03`);
  //     const answer = await result.json();
  //     console.log(answer);
  //     setWeatherData(answer)
  //   }
  // }, [])
  

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
      <Input text={setCity}/>
      <Button onClick={submitCity}/>
      <Header city={weatherData.name}/>
      <WeatherDisplay icon={weatherData.weather[0].icon} temp={weatherData.main.temp}  feelsLike={weatherData.main.feels_like} windspeed={weatherData.wind.speed}/>
      <Description text={weatherData.weather[0].description}/>
    </div>
  );
}

export default App;
