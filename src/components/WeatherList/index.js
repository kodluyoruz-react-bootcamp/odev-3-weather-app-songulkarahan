import Weather from "../Weather";
import React, { useContext } from "react";
import Context from "../../context/Context";
import "./style.css";

function WeatherList() {
  const { weather } = useContext(Context);
  return (
    <div className="weather-list">
      {weather.slice(1).map((item, index) => (
        <Weather key={item.datetime} item={item} index={index} />
      ))}
    </div>
  );
}

export default WeatherList;
