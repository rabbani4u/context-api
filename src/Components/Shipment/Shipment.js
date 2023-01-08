import React, { useContext } from "react";
import { catagoriContex } from "../../App";

function Shipment() {
  const [category, setCategory] = useContext(catagoriContex);
  return (
    <div>
      Shipment
      <button onClick={() => category > 0 && setCategory(category - 1)}>
        {" "}
        -{" "}
      </button>
    </div>
  );
}

export default Shipment;
