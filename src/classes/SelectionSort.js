// import Algorithm from "./sortingAlgorithm";

// export default class SelectionSort extends Algorithm {
//   sort(array, setArray, arraySorted, speed) {
//     function swap(arr, xp, yp) {

//     }

//     let arrayLength = array.length;

//     var i, j, min_idx;

//     // One by one move boundary of unsorted subarray
//     for (i = 0; i < arrayLength - 1; i++) {
//       // Find the minimum element in unsorted array
//       min_idx = i;

//       for (j = i + 1; j < arrayLength; j++) {
//         setTimeout(() => {
//           if (array[j] < array[min_idx]){ min_idx = j;
//           swap(array, min_idx, i);
//           }
//           setArray([...array]);
//         }, i * speed);
//       }

//       // Swap the found minimum element with the first element

//       // Update the array after each swap
//     }
//   }
// }
import Algorithm from "./sortingAlgorithm";

export default class SelectionSort extends Algorithm {
  sort(array, setArray, arraySorted, speed) {
    function swap(arr, xp, yp) {
      var temp = arr[xp];
      arr[xp] = arr[yp];
      arr[yp] = temp;
    }

    let arrayLength = array.length;

    // One by one move boundary of unsorted subarray
    for (let i = 0; i < arrayLength - 1; i++) {
      // Find the minimum element in unsorted array
      let min_idx = i;

      // Use IIFE to create a separate function scope for capturing current values of 'j' and 'min_idx'
      (function (j, min) {
        setTimeout(() => {
          for (let k = j + 1; k < arrayLength; k++) {
            if (array[k] < array[min]) {
              min = k;
            }
          }

          // Swap the found minimum element with the first element
          swap(array, min, j);
          setArray([...array]);
        }, i * speed);
      })(i, min_idx);
    }

    // // Notify that sorting is complete
    // setTimeout(() => {
    //   arraySorted();
    // }, arrayLength * speed);
  }
}
