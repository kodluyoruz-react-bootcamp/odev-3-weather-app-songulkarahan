import React, { useContext } from "react";
import Context from "../../context/Context";
import TopIcon from "../TopIcon";
import "./style.css";
function TopWeather() {
  const { weather, city } = useContext(Context);
  // console.log(weather[0].temp);

  let data = weather[0];
  // console.log(data);
  // console.log(weather);
  const location = city.name;
  var monthNames = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  var days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  var date = new Date(data.datetime);
  var dateNumber = date.getDate();
  var day = new Date(data.datetime);
  var dayName = days[day.getDay()];
  var month = new Date(data.datetime);
  var monthName = monthNames[month.getMonth()];
  /*  */

  return (
    <div>
      <div className="today forecast">
        <div className="forecast-content">
          <div className="forecast-flex-container">
            <div className="degree">
              <div className="location">{location}</div>
              <div className="num">
                {data.temp}
                <sup>o</sup>C
              </div>
              <span>{data.max_temp}</span>
              <span>{data.min_temp}</span>
              <span>East</span>
              <div className="forecast-footer">
                <div className="today">{dayName}</div>
                <div className="date">
                  {dateNumber} {monthName}
                </div>
              </div>
            </div>
            <div className="forecast-icon">
              <TopIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopWeather;
