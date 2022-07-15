import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import WeatherDisplay from './Components/WeatherDisplay/WeatherDisplay';

function App() {
  return (
    <div className="App">
      <Header city={"London"}/>
      <WeatherDisplay/>
    </div>
  );
}

export default App;
