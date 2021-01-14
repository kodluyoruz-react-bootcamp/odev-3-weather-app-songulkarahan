import React from "react";
import Weather from "../Weather";
import "./style.css";

function WeatherList() {
  return (
    <div className="weather-list">
      <Weather />
      <Weather />
      <Weather />
      <Weather />
      <Weather />
      <Weather />
    </div>
  );
}

export default WeatherList;
