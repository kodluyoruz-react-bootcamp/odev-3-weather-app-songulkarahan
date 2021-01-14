// import { createContext, useState } from "react";

// const Context = createContext();

// export const CityProvider = ({ children }) => {
//   const values = {
//     citys,
//     city,
//     setCity,
//     open,
//     setOpen,
//   };

//   return <Context.Provider value={values}>{children}</Context.Provider>;
// };
// export default Context;
import { createContext } from "react";

const Context = createContext();

export default Context;
