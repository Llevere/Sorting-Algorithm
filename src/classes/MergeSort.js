import Algorithm from "./sortingAlgorithm";

export default class MergeSort extends Algorithm {
  sort(array, setArray, arraySorted, speed) {
    const merge = (left, right) => {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }

      result = result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));

      setArray([...result]);
      return result;
    };

    const mergeSortHelper = (array) => {
      if (array.length <= 1) {
        return array;
      }

      const middle = Math.floor(array.length / 2);
      const left = array.slice(0, middle);
      const right = array.slice(middle);

      return merge(mergeSortHelper(left), mergeSortHelper(right));
    };

    mergeSortHelper(array);
  }
}
