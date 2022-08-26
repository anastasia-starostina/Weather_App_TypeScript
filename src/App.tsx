import React from "react";
import "./App.css";
import Description from "./Components/Description/Description";
import Header from "./Components/Header/Header";
import WeatherDisplay from "./Components/WeatherDisplay/WeatherDisplay";
import { useEffect, useState } from "react";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/button";

function App() {
  let data = {
    name: "",
    weather: [
      {
        icon: "",
        description: "",
      },
    ],
    main: {
      temp: 0,
      feels_like: 0,
    },
    wind: {
      speed: 0,
    },
  };

  const [city, setCity] = useState("");
  const [inputCity, setInputCity] = useState("London,uk");
  console.log(city);

  function submitCity() {
    setInputCity(city);
  }

  const [weatherData, setWeatherData] = useState(data);
  console.log(weatherData);
  useEffect(() => {
    async function getWeatherData() {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=8aba6173163790333e212dc3935b4c03`
      );
      const answer = await result.json();
      console.log(answer);
      setWeatherData(answer);
    }
    getWeatherData();
    console.log(weatherData);
  }, [inputCity]);

  return (
    <div className="App">
      <section className="input__form">
        <Input text={setCity} />
        <Button onClick={submitCity} />
      </section>
      <Header city={weatherData.name} />
      <WeatherDisplay
        icon={weatherData.weather[0].icon}
        temp={Math.round(weatherData.main.temp - 273.15) + "°"}
        feelsLike={Math.round(weatherData.main.feels_like - 273.15) + "°"}
        windspeed={weatherData.wind.speed + 'm/s'}
      />
      <Description text={weatherData.weather[0].description} />
    </div>
  );
}

export default App;
