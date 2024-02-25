import Algorithm from "./sortingAlgorithm";

export default class MergeSort extends Algorithm {
  async sort(array, setArray, arraySorted, speed) {
    // Define the merge sort function
    function mergeSort(arr) {
      // Base case: if the array has one or fewer elements, it's already sorted
      if (arr.length <= 1) return arr;

      // Calculate the middle index of the array
      const middle = Math.floor(arr.length / 2);

      // Split the array into two halves: left and right
      const left = arr.slice(0, middle);
      const right = arr.slice(middle);

      // Recursively merge sort the left and right halves, and then merge them
      return merge(mergeSort(left), mergeSort(right));
    }

    // Define the merge function to merge two sorted arrays
    function merge(left, right) {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;

      // Merge the two sorted arrays into a single sorted array
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }

      // Concatenate any remaining elements from the left and right arrays
      return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    // Perform the merge sort operation on the array
    setArray(mergeSort(array));
  }
}
