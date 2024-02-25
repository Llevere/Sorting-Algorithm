import "./App.css";
import Navbar from "./Navbar";
import generateNewArray from "./GenerateNewArray";
import { useState, useEffect } from "react";
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
  const arraySorted = () => {
    setSortingBtnDisabled(false);
  };

  async function sortArray() {
    algorithmType.sort(array, setArray, arraySorted, speed);
  }

  function setSortingType(sortingType) {
    setAlgorithmType(sortingType);
  }

  const cancelSort = () => {
    setCancelSorting(true);
    setSortingBtnDisabled(false);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDynamicSizing = () => {
    let pixelSize = 0; //30px for an array size of 700
    let maxArraySize = 700;
    for (let i = 0; i < maxArraySize; i += 100) {
      if (i >= array.length) {
        console.log(`Returning pixel size: ${pixelSize}`);
        return pixelSize;
      }

      // Decrease by 5 pixel until it reach
      pixelSize += 20;

      //
      if (pixelSize >= maxArraySize) return 30;
    }

    return pixelSize;
  };

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
