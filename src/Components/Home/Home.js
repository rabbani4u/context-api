import React from "react";
import Categories from "../Categories/Categories";

function Home(props) {
  const { count } = props;
  return (
    <div style={{ border: "1px solid lightgray" }}>
      <h2>Home:{count}</h2>
      <Categories count={count} />
    </div>
  );
}

export default Home;
