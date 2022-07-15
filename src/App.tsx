import React from 'react';
import './App.css';
import Description from './Components/Description/Description';
import Header from './Components/Header/Header';
import WeatherDisplay from './Components/WeatherDisplay/WeatherDisplay';

function App() {
  return (
    <div className="App">
      <Header city={"London"}/>
      <WeatherDisplay icon="icon" temp="12"  feelsLike="90" windspeed="75845784km"/>
      <Description text={"London sdfdsfdsfdsfdsfsf"}/>
    </div>
  );
}

export default App;
