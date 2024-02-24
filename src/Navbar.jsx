import React from "react";

function Navbar({ generateNewArray, sortArray, sortDisabled, arraySize }) {
  return (
    <div>
      <button onClick={() => generateNewArray()}>New Array</button>
      <button onClick={() => sortArray()} disabled={sortDisabled}>
        Sort
      </button>
      <span style={{ marginLeft: 20 }}>Reload the page to reset</span>
      <span style={{ marginLeft: 20 }}>Array size - 100</span>
      {/* <button onClick={() => cancelSort()}>Cancel Sorting Process</button>
      <span style={{ marginLeft: 10 }}>Sorting Speed</span>
      <input
        type="range"
        min="1"
        max="100"
        value={speed}
        onChange={handleSpeedChange}
      />
      <span>{speed}</span> */}
    </div>
  );
}

export default Navbar;
