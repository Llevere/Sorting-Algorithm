import Algorithm from "./sortingAlgorithm";

export default class MergeSort extends Algorithm {
  sort(array, setArray, arraySorted, speed) {
    const merge = (left, right) => {
      let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
        } else {
          resultArray.push(right[rightIndex]);
          rightIndex++;
        }
      }

      return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
    };

    const mergeSort = (arr, setArray) => {
      if (arr.length <= 1) {
        return arr;
      }

      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle);
      const right = arr.slice(middle);

      return merge(mergeSort(left, setArray), mergeSort(right, setArray));
    };

    // Start the sorting process
    const sortedArray = mergeSort(array.slice(), setArray);

    // Update the original array using setArray after sorting is done
    setTimeout(() => {
      setArray(sortedArray);
      arraySorted();
    }, sortedArray.length * speed); // Adjust the delay as needed
  }
}
