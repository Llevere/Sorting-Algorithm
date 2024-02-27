import React, { useState, useEffect } from "react";
import BubbleSort from "./classes/BubbleSort";
import MergeSort from "./classes/MergeSort";
import InsertionSort from "./classes/InsertionSort";
import SelectionSort from "./classes/SelectionSort";
import QuickSort from "./classes/QuickSort";
import HeapSort from "./classes/HeapSort";
import TimSort from "./classes/TimSort";

function Navbar({
  generateNewArray,
  sortArray,
  disableSort,
  algorithmType,
  processingSpeed,
}) {
  const [activeButton, setActiveButton] = useState("bubble");
  const [sortingSpeed, setSortingSpeed] = useState(20);
  const [showAlgorithmType, setShowAlgorithmType] = useState(false);
  const [sortingText, setSortingText] = useState("Sort");

  useEffect(() => {
    let intervalId;
    if (disableSort) {
      setSortingText("Sorting");
      intervalId = setInterval(() => {
        setSortingText((prevText) => {
          switch (prevText.slice(-3)) {
            case "...":
              return prevText.slice(0, -3);
            default:
              return prevText + ".";
          }
        });
      }, 500);
    } else {
      setSortingText("Sort");
    }

    return () => clearInterval(intervalId);
  }, [disableSort]);

  function handleSpeedChange(e) {
    setSortingSpeed(e.target.value);
    processingSpeed(e.target.value);
  }

  const activeButtonColor = "#d46b0f";
  return (
    <div id="navbar-container">
      <div style={{ color: "white" }} id="array-desc">
        {/* <span
          style={{
            marginLeft: 20,
          }}
        >
          Reload the page to reset
        </span> */}
        <span style={{ marginLeft: 20, marginRight: 20 }}>
          Array size - 150 numbers
        </span>
      </div>
      <div id="array-handling">
        <button
          style={{ marginRight: 10 }}
          onClick={() => {
            generateNewArray();
          }}
          disabled={disableSort}
        >
          New Data Set
        </button>
        <button
          onClick={() => sortArray()}
          disabled={disableSort}
          style={{ width: disableSort ? 65 : 60, padding: 3 }}
        >
          {sortingText}
        </button>
      </div>
      <div id="algorithm-handling">
        <button
          style={{
            backgroundColor: activeButton === "bubble" ? activeButtonColor : "",
            color: activeButton === "bubble" ? "white" : "black",
          }}
          onClick={() => {
            algorithmType(new BubbleSort());
            setActiveButton("bubble");
          }}
        >
          Bubble Sort
        </button>
        <button
          style={{
            backgroundColor: activeButton === "tim" ? activeButtonColor : "",
            color: activeButton === "tim" ? "white" : "black",
          }}
          onClick={() => {
            algorithmType(new TimSort());
            setActiveButton("tim");
          }}
        >
          Tim Sort
        </button>
        <button
          style={{
            backgroundColor: activeButton === "merge" ? activeButtonColor : "",
            color: activeButton === "merge" ? "white" : "black",
          }}
          onClick={() => {
            algorithmType(new MergeSort());
            setActiveButton("merge");
          }}
        >
          Merge Sort
        </button>
        <button
          style={{
            backgroundColor: activeButton === "heap" ? activeButtonColor : "",
            color: activeButton === "heap" ? "white" : "black",
          }}
          onClick={() => {
            algorithmType(new HeapSort());
            setActiveButton("heap");
          }}
        >
          Heap Sort
        </button>
        <button
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
        </button>
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
      <div id="dropdown">
        <button
          id="dropdown-button"
          onClick={() => {
            setShowAlgorithmType(!showAlgorithmType);
          }}
        >
          Algorithm Type:{" "}
          <span
            style={{
              textTransform: "capitalize",
              color: "black",
              fontWeight: "bold",
            }}
          >
            {activeButton}
          </span>
        </button>
        <div
          id="dropdown-button-algorithm-type"
          className={showAlgorithmType ? "active" : ""}
        >
          <button
            style={{
              backgroundColor:
                activeButton === "bubble" ? activeButtonColor : "",
              color: activeButton === "bubble" ? "white" : "black",
            }}
            onClick={() => {
              algorithmType(new BubbleSort());
              setActiveButton("bubble");
              setShowAlgorithmType(false);
            }}
          >
            Bubble Sort
          </button>
          <button
            style={{
              backgroundColor: activeButton === "tim" ? activeButtonColor : "",
              color: activeButton === "shell" ? "white" : "black",
            }}
            onClick={() => {
              algorithmType(new TimSort());
              setActiveButton("tim");
              setShowAlgorithmType(false);
            }}
          >
            Tim Sort
          </button>
          <button
            style={{
              backgroundColor:
                activeButton === "merge" ? activeButtonColor : "",
              color: activeButton === "merge" ? "white" : "black",
            }}
            onClick={() => {
              algorithmType(new MergeSort());
              setActiveButton("merge");
              setShowAlgorithmType(false);
            }}
          >
            Merge Sort
          </button>
          <button
            style={{
              backgroundColor: activeButton === "heap" ? activeButtonColor : "",
              color: activeButton === "heap" ? "white" : "black",
            }}
            onClick={() => {
              algorithmType(new HeapSort());
              setActiveButton("heap");
              setShowAlgorithmType(false);
            }}
          >
            Heap Sort
          </button>
          <button
            style={{
              backgroundColor:
                activeButton === "quick" ? activeButtonColor : "",
              color: activeButton === "quick" ? "white" : "black",
            }}
            onClick={() => {
              algorithmType(new QuickSort());
              setActiveButton("quick");
              setShowAlgorithmType(false);
            }}
          >
            Quick Sort
          </button>
          <button
            style={{
              backgroundColor:
                activeButton === "insertion" ? activeButtonColor : "",
              color: activeButton === "insertion" ? "white" : "black",
            }}
            onClick={() => {
              algorithmType(new InsertionSort());
              setActiveButton("insertion");
              setShowAlgorithmType(false);
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
              setShowAlgorithmType(false);
            }}
            /*disabled={isSorting}*/
          >
            Selection Sort
          </button>
        </div>
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
