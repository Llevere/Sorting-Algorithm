import Algorithm from "./sortingAlgorithm";

export default class SelectionSort extends Algorithm {
  sort(array, setArray, arraySorted, speed) {
    function swap(a, b) {
      [array[a], array[b]] = [array[b], array[a]];
    }

    let arrayLength = array.length;

    // One by one move boundary of unsorted subarray

    for (let i = 0; i < arrayLength - 1; i++) {
      // Find the minimum element in unsorted array
      let min_idx = i;

      setTimeout(() => {
        for (let j = i + 1; j < arrayLength; j++) {
          if (array[j] < array[min_idx]) {
            min_idx = j;
          }
        }

        // Swap the found minimum element with the first element
        swap(min_idx, i);
        setArray([...array]);
      }, i * speed * 2);
    }
  }
}
