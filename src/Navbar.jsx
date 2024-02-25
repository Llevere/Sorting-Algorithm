import React, { useState } from "react";
import BubbleSort from "./classes/BubbleSort";
import MergeSort from "./classes/MergeSort";
import InsertionSort from "./classes/InsertionSort";
import RadixSort from "./classes/RadixSort";
import SelectionSort from "./classes/SelectionSort";
import QuickSort from "./classes/QuickSort";
import HeapSort from "./classes/HeapSort";
import ShellSort from "./classes/ShellSort";

function Navbar({
  generateNewArray,
  sortArray,
  disableSort,
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

  const activeButtonColor = "#d46b0f";
  return (
    <div id="navbar-container">
      <div style={{ color: "white" }} id="array-desc">
        <span
          style={{
            marginLeft: 20,
          }}
        >
          Reload the page to reset
        </span>
        <span style={{ marginLeft: 20, marginRight: 20 }}>
          Array size - 100
        </span>
      </div>
      <div id="array-handling">
        <button
          style={{ marginRight: 10 }}
          onClick={() => {
            generateNewArray();
          }}
        >
          New Data Set
        </button>
        <button onClick={() => sortArray()}>Sort</button>
      </div>
      <div id="algorithm-handling">
        <button
          style={{
            backgroundColor: activeButton === "bubble" ? activeButtonColor : "",
            color: activeButton === "bubble" ? "white" : "black",
          }}
          onClick={() => {
            handleActiveSorting();
            algorithmType(new BubbleSort());
            setActiveButton("bubble");
          }}
          /*disabled={isSorting}*/
        >
          Bubble Sort
        </button>
        {/* <button
        style={{
          backgroundColor: activeButton === "shell" ? "green" : "",
          color: activeButton === "shell" ? "white" : "black",
        }}
        onClick={() => {
          handleActiveSorting();
          algorithmType(new ShellSort());
          setActiveButton("shell");
        }}
      >
        Shell Sort
      </button>
      <button
        style={{
          backgroundColor: activeButton === "merge" ? "green" : "",
          color: activeButton === "merge" ? "white" : "black",
        }}
        onClick={() => {
          algorithmType(new MergeSort());
          setActiveButton("merge");
        }}
      >
        Merge Sort
      </button> */}
        {/* <button
        style={{
          backgroundColor: activeButton === "heap" ? "green" : "",
          color: activeButton === "heap" ? "white" : "black",
        }}
        onClick={() => {
          algorithmType(new HeapSort());
          setActiveButton("heap");
        }}
      >
        Heap Sort
      </button> */}
        {/* <button
          style={{
            backgroundColor: activeButton === "quick" ? activeButtonColor : "",
            color: activeButton === "quick" ? "white" : "black",
          }}
          onClick={() => {
            algorithmType(new QuickSort());
            setActiveButton("quick");
          }}
        >
          Quick Sort
        </button> */}
        <button
          style={{
            backgroundColor:
              activeButton === "insertion" ? activeButtonColor : "",
            color: activeButton === "insertion" ? "white" : "black",
          }}
          onClick={() => {
            algorithmType(new InsertionSort());
            setActiveButton("insertion");
          }}
          /*disabled={isSorting}*/
        >
          Insertion Sort
        </button>
        {/* <button
        style={{
          backgroundColor: activeButton === "radix" ? "green" : "",
          color: activeButton === "radix" ? "white" : "black",
        }}
        onClick={() => {
          algorithmType(new RadixSort());
          setActiveButton("radix");
        }}
      >
        Radix Sort
      </button> */}
        <button
          style={{
            backgroundColor:
              activeButton === "selection" ? activeButtonColor : "",
            color: activeButton === "selection" ? "white" : "black",
          }}
          onClick={() => {
            algorithmType(new SelectionSort());
            setActiveButton("selection");
          }}
          /*disabled={isSorting}*/
        >
          Selection Sort
        </button>
      </div>

      <span id="input-range-desc">
        Processing Speed {"(Higher = slower)"}:{" "}
      </span>
      <input
        type="range"
        min="5"
        max="100"
        value={sortingSpeed}
        onChange={handleSpeedChange}
      />
      <span id="input-range-text">{sortingSpeed}</span>
    </div>
  );
}

export default Navbar;
