import Dropdown from "./components/Dropdown";
import citys from "./data/citys.json";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(citys[56]);
  console.log(value);
  return (
    <div style={{ width: 200 }}>
      <Dropdown citys={citys} value={value} onChange={(val) => setValue(val)} />
    </div>
  );
}

export default App;
