import React from "react";
import "./style.css";
import Icon from "../Icon";

function Weather() {
  return (
    <div className="weather">
      <div className="weather-header">
        <div className="day">Tuesday</div>
      </div>
      <div className="weather-content">
        <div className="weather-icon">
          <Icon />
        </div>
        <div className="degree">
          23<sup>o</sup>C
        </div>
        <small>
          18<sup>o</sup>
        </small>
      </div>
    </div>
  );
}

export default Weather;
