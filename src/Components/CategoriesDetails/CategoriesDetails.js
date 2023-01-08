import React, { useContext } from "react";
import { catagoriContex } from "../../App";

function CategoriesDetails() {
  const category = useContext(catagoriContex);
  return (
    <div>
      <h4>CategoriesDetails</h4>
      <h5>This is Contex value: {category} </h5>
    </div>
  );
}

export default CategoriesDetails;
