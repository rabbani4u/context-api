import React from "react";

function Header(props) {
  const { count, setCount } = props;
  return (
    <div>
      Header: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Header;
