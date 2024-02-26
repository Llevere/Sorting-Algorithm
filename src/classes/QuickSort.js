import Algorithm from "./sortingAlgorithm";

export default class QuickSort extends Algorithm {
  sort(array, setArray, arraySorted, speed) {
    // const quickSort = (arr, left = 0, right = arr.length - 1) => {
    //   if (left < right) {
    //     const partitionIndex = partition(arr, left, right);

    //     // Delay the next step by the specified speed
    //     setTimeout(() => {
    //       quickSort(arr, left, partitionIndex - 1);
    //     }, speed * 10);

    //     setTimeout(() => {
    //       quickSort(arr, partitionIndex + 1, right);
    //     }, speed * 10);
    //   }
    // };

    // const partition = (arr, left, right) => {
    //   const pivot = arr[right];
    //   let i = left - 1;

    //   for (let j = left; j < right; j++) {
    //     if (arr[j] <= pivot) {
    //       i++;
    //       [arr[i], arr[j]] = [arr[j], arr[i]];
    //       setArray([...arr]);
    //     }
    //   }

    //   [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    //   setArray([...arr]); // Update array state after each partition

    //   return i + 1;
    // };
    function quickSort(array, start = 0, end = array.length - 1) {}
    // function quickSort(array, start, end) {
    //   if (start === undefined) {
    //     start = 0;
    //     end = array.length - 1;
    //   } else if (start >= end) {
    //     return array;
    //   }
    //   var rStart = start,
    //     rEnd = end;
    //   var pivot = array[Math.floor(Math.random() * (end - start + 1) + start)];
    //   while (start < end) {
    //     while (array[start] <= pivot) start++;
    //     while (array[end] > pivot) end--;
    //     if (start < end) {
    //       var temp = array[start];
    //       array[start] = array[end];
    //       array[end] = temp;
    //     }
    //   }
    //   setArray([...array]);
    //   quickSort(array, rStart, start - 1);
    //   quickSort(array, start, rEnd);
    // }

    quickSort(array);
    setArray([...array]);
  }
}
