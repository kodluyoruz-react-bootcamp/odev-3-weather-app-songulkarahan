import React from "react";
import Skycons, { SkyconsType } from "react-skycons";
function TopIcon() {
  //
  const svgProps = {
    style: {},
  };
  console.log(svgProps);
  return (
    <Skycons
      color="#1e202b"
      type={SkyconsType.CLEAR_DAY}
      animate={true}
      size={130}
      {...svgProps}
    />
  );
}
export default TopIcon;
