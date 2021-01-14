import React, { useContext } from "react";
import Context from "../../context/Context";
import "./style.css";

function Dropdown() {
  const { citys, city, setCity, open, setOpen } = useContext(Context);
  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value">{city ? city.name : "Select city"}</div>
        <div className={`arrow ${open ? "open" : null}`} />
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {citys.map((c, index) => (
          <div
            key={index}
            className="option"
            onClick={() => {
              setCity(c);
              setOpen(false);
            }}
          >
            {c.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
