import { useState, useEffect } from "react";
import Context from "../../context/Context";
import citys from "../../data/citys.json";
import axios from "axios";

import Dropdown from "../Dropdown";
import Dashboard from "../Dashboard";
function Main() {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState(citys[56]);
  const [weather, setWeather] = useState("");

  useEffect(() => {
    async function getData() {
      const API_KEY = "4a8549b3b79945af963010fab95a8df0";
      const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city.name},TR&units=M&days=7&lang=tr&key=${API_KEY}
            `;
      const response = await axios.get(url).then((r) => r.data);
      setWeather(response.data);
    }
    getData();
  }, [city]);

  if (!weather) return null;
  return (
    <div className="container-md">
      <Context.Provider
        value={{ citys, open, setOpen, city, setCity, weather, setWeather }}
      >
        <Dropdown />
        <Dashboard />
      </Context.Provider>
    </div>
  );
}

export default Main;
