import React from "react";
import CategoriesDetails from "../CategoriesDetails/CategoriesDetails";

function Categories({ count }) {
  return (
    <div>
      <h3>Categories: {count}</h3>
      <CategoriesDetails count={count} />
    </div>
  );
}

export default Categories;
