import Algorithm from "./sortingAlgorithm";

export default class InsertionSort extends Algorithm {
  sort(array, setArray, arraySorted, speed) {
    const len = array.length;
    let tempArray = array.slice();

    // Iterate through the array starting from the second element
    for (let i = 1; i < len; i++) {
      // Set a timeout for each iteration
      setTimeout(() => {
        let current = tempArray[i]; // Current element to insert
        let j = i - 1;

        // Move elements of tempArray[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && tempArray[j] > current) {
          tempArray[j + 1] = tempArray[j];
          j--;
          //setArray([...tempArray]);
        }
        tempArray[j + 1] = current; // Place current element at its correct position
        setArray([...tempArray]); // Update the array state after each iteration
      }, i * speed); // Adjust the timeout delay according to your preference
    }
  }
}
