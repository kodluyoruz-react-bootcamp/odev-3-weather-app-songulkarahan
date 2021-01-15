import React from "react";
import "./style.css";
function Weather({ item, index }) {
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const day = new Date(item.datetime);
  const dayName = days[day.getDay()];
  return (
    <div className="weather">
      <div className="weather-header">
        <div className="day">{dayName}</div>
      </div>
      <div className="weather-content">
        <div className="weather-icon">
          <img
            src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
            alt=""
          />
        </div>
        <div className="degree">
          {item.max_temp}
          <sup>o</sup>C
        </div>
        <small>
          {item.min_temp}
          <sup>o</sup>
        </small>
        <div>{item.weather.description}</div>
      </div>
    </div>
  );
}

export default Weather;
