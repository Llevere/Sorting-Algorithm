import "./App.css";
import Navbar from "./Navbar";
import generateNewArray from "./GenerateNewArray";
import sort from "./SortArray";
import { useState, useEffect } from "react";
import Algorithm from "./classes/sortingAlgorithm";
import BubbleSort from "./classes/BubbleSort";
function App() {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(50);
  const [sortingBtnDisabled, setSortingBtnDisabled] = useState(false);
  const [cancelSorting, setCancelSorting] = useState(false);
  const [algorithmType, setAlgorithmType] = useState(new BubbleSort());
  useEffect(() => {
    setArray(generateNewArray());
  }, []);

  function newArray() {
    setArray(generateNewArray());
    setCancelSorting(false);
  }

  async function sortArray() {
    setSortingBtnDisabled(true);
    const arraySorted = () => {
      setSortingBtnDisabled(false);
    };
    await algorithmType.sort(array, setArray, arraySorted, speed);
  }

  function setSortingType(sortingType) {
    setAlgorithmType(sortingType);
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
        algorithmType={setSortingType}
        processingSpeed={setSpeed}
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
    </div>
  );
}

export default App;
