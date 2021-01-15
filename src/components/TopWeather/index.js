import React, { useContext } from "react";
import Context from "../../context/Context";
import "./style.css";
function TopWeather() {
  const { weather, city } = useContext(Context);
  const data = weather[0];
  const iconData = data.weather;
  const icon = Object.values(iconData);
  const iconUrl =
    "https://www.weatherbit.io/static/img/icons/" + icon[0] + ".png";

  const location = city.name;
  const monthNames = [
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
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const date = new Date(data.datetime);
  const dateNumber = date.getDate();
  const day = new Date(data.datetime);
  const dayName = days[day.getDay()];
  const month = new Date(data.datetime);
  const monthName = monthNames[month.getMonth()];

  return (
    <div>
      <div className="forecast-today">
        <div className="forecast-content">
          <div className="forecast-flex-container">
            <div className="degree">
              <div className="location">{location}</div>
              <div className="num">
                {data.temp}
                <sup>o</sup>C
              </div>
              <div>
                <span>Max: {data.max_temp}</span>
                <span>Min: {data.min_temp}</span>
              </div>
              <span>{icon[2]} </span>
              <div className="forecast-footer">
                <div className="date">
                  <p>
                    {dateNumber} {monthName} {dayName}
                  </p>
                </div>
              </div>
            </div>

            <div className="forecast-icon">
              <img src={iconUrl} alt="" width="250px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopWeather;
