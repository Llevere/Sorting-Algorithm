import React, { useState } from "react";
import BubbleSort from "./classes/BubbleSort";
import MergeSort from "./classes/MergeSort";
import InsertionSort from "./classes/InsertionSort";
import RadixSort from "./classes/RadixSort";
import SelectionSort from "./classes/SelectionSort";
import QuickSort from "./classes/QuickSort";
import HeapSort from "./classes/HeapSort";

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
        /*disabled={isSorting}*/
      >
        New Array
      </button>
      <button onClick={() => sortArray()} /*disabled={isSorting}*/>Sort</button>
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
        /*disabled={isSorting}*/
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
      <button
        style={{
          backgroundColor: activeButton === "quick" ? "green" : "",
          color: activeButton === "quick" ? "white" : "black",
        }}
        onClick={() => {
          algorithmType(new QuickSort());
          setActiveButton("quick");
        }}
      >
        Quick Sort
      </button>
      <button
        style={{
          backgroundColor: activeButton === "insertion" ? "green" : "",
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
          backgroundColor: activeButton === "selection" ? "green" : "",
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
