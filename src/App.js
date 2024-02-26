import "./App.css";
import Navbar from "./Navbar";
import generateNewArray from "./GenerateNewArray";
import { useState, useEffect } from "react";
import BubbleSort from "./classes/BubbleSort";
function App() {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(50);
  const [sortingBtnDisabled, setSortingBtnDisabled] = useState(false);
  const [algorithmType, setAlgorithmType] = useState(new BubbleSort());

  useEffect(() => {
    setArray(generateNewArray());
  }, []);

  function newArray() {
    setArray(generateNewArray());
  }
  const arraySorted = () => {
    setSortingBtnDisabled(false);
  };

  async function sortArray() {
    algorithmType.sort(array, setArray, arraySorted, speed);
  }

  function setSortingType(sortingType) {
    setAlgorithmType(sortingType);
  }

  return (
    <div>
      <Navbar
        generateNewArray={newArray}
        disableSort={sortingBtnDisabled}
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
                  height: `${num * 2.5}px`,
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
