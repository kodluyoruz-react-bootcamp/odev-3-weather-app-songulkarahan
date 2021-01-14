import React from "react";
import "./style.css";

function TopWeather() {
  return (
    <div>
      <div className="today forecast">
        <div className="forecast-header">
          <div className="today">Monday</div>
          <div className="date">6 Oct</div>
        </div>
        <div className="forecast-content">
          <div className="location">New York</div>
          <div className="degree">
            <div className="num">
              23<sup>o</sup>C
            </div>
            <div className="forecast-icon">
              <img src="images/icons/icon-1.svg" alt="" />
            </div>
          </div>
          <span>
            <img src="images/icon-umberella.png" alt="" />
            20%
          </span>
          <span>
            <img src="images/icon-wind.png" alt="" />
            18km/h
          </span>
          <span>
            <img src="images/icon-compass.png" alt="" />
            East
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopWeather;
