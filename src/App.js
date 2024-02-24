import "./App.css";
import Navbar from "./Navbar";
import generateNewArray from "./GenerateNewArray";
import sort from "./SortArray";
import { useState, useEffect } from "react";

function App() {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(50);
  const [sortingBtnDisabled, setSortingBtnDisabled] = useState(false);
  const [cancelSorting, setCancelSorting] = useState(false);
  useEffect(() => {
    setArray(generateNewArray());
  }, []);

  function newArray() {
    setArray(generateNewArray());
    setCancelSorting(false);
  }

  function sortArray() {
    setSortingBtnDisabled(true);
    sort(array, setArray);
  }

  const cancelSort = () => {
    setCancelSorting(true);
    setSortingBtnDisabled(false);
  };
  return (
    <div>
      <Navbar
        generateNewArray={newArray}
        sortArray={sortArray}
        sortingSpeed={setSpeed}
        sortDisabled={sortingBtnDisabled}
        cancelSort={cancelSort}
        arraySize={array.length}
      />
      <div id="container">
        {array.length > 0 &&
          array.map((num, index) => {
            return (
              <div
                id="array-number"
                key={index}
                style={{
                  height: `${num * 3}px`,
                }}
              >
                {num}
              </div>
            );
          })}
      </div>
      {/* <div id="container">
        {array.length > 0 &&
          array.map((num, index) => {
            return (
              <div
                id="array-number"
                className={`array-number${index}`}
                key={index}
                style={{
                  height: `${num * 3}px`,
                }}
              >
                {num}
              </div>
            );
          })}
      </div> */}
    </div>
  );
}

export default App;
