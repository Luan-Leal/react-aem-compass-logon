import axios from "axios";
import React, { useState, useEffect } from "react";
import { Temp } from "./style";

import WeatherIcon from "../../../assets/icons/01d.png";
import UnknownIcon from "../../../assets/icons/unknown.png";

function Weather() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  let getWeather = async (lat, long) => {
    let res = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: "64ed82577ced7f69cb1687f0ce536131",
          lang: "pt",
          units: "metric",
        },
      }
    );
    setWeather(res.data);
    console.log(weather.weather[0].icon);
  };

  if (location == false) {
    return (
      <div className="weather-warning">
        <span>
          <img src={UnknownIcon} alt="Localização desligada" />
        </span>
      </div>
    );
  } else if (weather == false) {
    return (
      <div>
        <span id="loading">Carregando...</span>
      </div>
    );
  } else {
    return (
      <div id="weather">
        <span id="name">
          {weather.name} - {weather.sys.country}
        </span>
        <Temp>
          <div>
            <img src={WeatherIcon} alt="" />
          </div>

          <div>
            <span id="temp">{weather.main.temp.toFixed(0)}°</span>
          </div>
        </Temp>
      </div>
    );
  }
}

export default Weather;
