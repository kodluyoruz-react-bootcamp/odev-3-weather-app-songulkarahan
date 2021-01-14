import React from "react";
import { useState } from "react";
import "./style.css";

function Dropdown({ citys, value, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value">
          {value ? value.name : "Select city"}
        </div>
        <div className={`arrow ${open ? "open" : null}`} />
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {citys.map((city, index) => (
          <div
            key={index}
            className="option"
            onClick={() => {
              onChange(city);
              setOpen(false);
            }}
          >
            {city.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
