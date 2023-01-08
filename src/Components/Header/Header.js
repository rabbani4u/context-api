import React, { useContext } from "react";
import { catagoriContex } from "../../App";

function Header() {
  const [category, setCategory] = useContext(catagoriContex);
  return (
    <div>
      Header: {category}
      <br />
      <button onClick={() => setCategory(category + 1)}>+</button>
    </div>
  );
}

export default Header;
