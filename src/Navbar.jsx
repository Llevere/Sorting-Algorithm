import React from "react";

function Navbar({ generateNewArray, sortArray }) {
  return (
    <div>
      <button onClick={() => generateNewArray()}>New Array</button>
      <button onClick={() => sortArray()}>Sort</button>
    </div>
  );
}

export default Navbar;
