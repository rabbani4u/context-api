import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Shipment from "./Components/Shipment/Shipment";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>This is init value:{count}</p>
      <Header count={count} setCount={setCount} />
      <Home count={count} setCount={setCount} />
      <Shipment />
    </div>
  );
}

export default App;
