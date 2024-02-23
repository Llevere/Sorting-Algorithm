import "./App.css";
import Navbar from "./Navbar";
import generateNewArray from "./GenerateNewArray";
import sort from "./SortArray";
import { useState, useEffect } from "react";

function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(generateNewArray());
  }, []);

  function newArray() {
    setArray(generateNewArray());
  }

  function sortArray() {
    const newArray = sort(array);
    setArray(newArray);
  }
  return (
    <div>
      <Navbar generateNewArray={newArray} sortArray={sortArray} />
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
