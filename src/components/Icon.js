import React from "react";
import Skycons, { SkyconsType } from "react-skycons";
function Icon() {
  //
  const svgProps = {
    style: {},
  };
  console.log(svgProps);
  return (
    <Skycons
      color="#1e202b"
      type={SkyconsType.CLEAR_DAY}
      animate={false}
      size={60}
      {...svgProps}
    />
  );
}
export default Icon;
