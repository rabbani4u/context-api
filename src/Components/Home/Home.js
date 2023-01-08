import React, { useContext } from "react";
import { catagoriContex } from "../../App";
import Categories from "../Categories/Categories";

function Home() {
  const category = useContext(catagoriContex);
  return (
    <div style={{ border: "1px solid lightgray" }}>
      <h2>Home: {category}</h2>
      <Categories />
    </div>
  );
}

export default Home;
