import React, { useState } from "react";
import BubbleSort from "./classes/BubbleSort";
import MergeSort from "./classes/MergeSort";
import InsertionSort from "./classes/InsertionSort";

function Navbar({
  generateNewArray,
  sortArray,
  algorithmType,
  processingSpeed,
}) {
  const [activeButton, setActiveButton] = useState("bubble");
  const [isSorting, setIsSorting] = useState(false);
  const [sortingSpeed, setSortingSpeed] = useState(20);

  function handleActiveSorting() {
    setIsSorting(true);
  }

  function handleSpeedChange(e) {
    setSortingSpeed(e.target.value);
    processingSpeed(e.target.value);
  }
  return (
    <div>
      <button
        onClick={() => {
          generateNewArray();
        }}
        disabled={isSorting}
      >
        New Array
      </button>
      <button onClick={() => sortArray()} disabled={isSorting}>
        Sort
      </button>
      <span style={{ marginLeft: 20 }}>Reload the page to reset</span>
      <span style={{ marginLeft: 20, marginRight: 20 }}>Array size - 100</span>
      <button
        style={{
          backgroundColor: activeButton === "bubble" ? "green" : "",
          color: activeButton === "bubble" ? "white" : "black",
        }}
        onClick={() => {
          handleActiveSorting();
          algorithmType(new BubbleSort());
          setActiveButton("bubble");
        }}
        disabled={isSorting}
      >
        Bubble Sort
      </button>
      {/* <button
        style={{
          backgroundColor: activeButton === "merge" ? "green" : "",
          color: activeButton === "merge" ? "white" : "black",
        }}
        onClick={() => {
          algorithmType(new MergeSort());
          setActiveButton("merge");
        }}
        disabled={isSorting}
      >
        Merge Sort
      </button> */}
      <button
        style={{
          backgroundColor: activeButton === "insertion" ? "green" : "",
          color: activeButton === "insertion" ? "white" : "black",
        }}
        onClick={() => {
          algorithmType(new InsertionSort());
          setActiveButton("insertion");
        }}
        disabled={isSorting}
      >
        Insertion Sort
      </button>
      <span style={{ marginLeft: 20 }}>
        Processing Speed {"(Time between animations in miliseconds)"}:{" "}
      </span>
      <input
        style={{}}
        type="range"
        min="5"
        max="100"
        value={sortingSpeed}
        onChange={handleSpeedChange}
      />
      <span>{sortingSpeed}</span>
    </div>
  );
}

export default Navbar;
