import { createContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Shipment from "./Components/Shipment/Shipment";

export const catagoriContex = createContext();

function App() {
  const [category, setCategory] = useState(0);
  return (
    <catagoriContex.Provider value={[category, setCategory]}>
      <p>This is init value:{category}</p>
      <Header />
      <Home />
      <Shipment />
    </catagoriContex.Provider>
  );
}

export default App;
