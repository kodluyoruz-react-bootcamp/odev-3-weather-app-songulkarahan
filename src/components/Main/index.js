import Dropdown from "../Dropdown";
import { useState } from "react";
import Context from "../../context/Context";
import citys from "../../data/citys.json";

function Main() {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState(citys[56]);

  console.log(city);
  return (
    <div>
      <Context.Provider value={{ citys, open, setOpen, city, setCity }}>
        <Dropdown />
      </Context.Provider>
    </div>
  );
}

export default Main;
