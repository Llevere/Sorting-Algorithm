// function partition(arr, low, high) {
//   setArray([...arr]);
//   var pivot = arr[high];
//   var i = low - 1;
//   for (var j = low; j < high; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       // Swap arr[i] and arr[j]
//       var temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//       setArray([...arr]);
//     }
//     setArray([...arr]);
//   }
//   // Swap arr[i+1] and arr[high] (or pivot)
//   [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//   setArray([...arr]);
//   return i + 1;
// }

// function quickSort(arr, low, high) {
//   if (low < high) {
//     setTimeout(() => {
//       var pi = partition(arr, low, high);
//       setArray([...arr]);
//       quickSort(arr, low, pi - 1);
//       setArray([...arr]);
//       quickSort(arr, pi + 1, high);
//       setArray([...arr]);
//     }, speed * 5);
//   } else return;
//   setArray([...arr]);
// }

// quickSort(array, 0, array.length - 1);

// async function quickSort(array, left, right) {
//   if (left < right) {
//     let pivot = left;
//     changeColor(pivot, RED);
//     let i = left;
//     let j = right;
//     changeColor(j, BLUE);

//     while (i < j) {
//       if (!running) return;
//       while (compare(pivot, i) && i < j) {
//         resetColor(i);
//         i++;
//         changeColor(i, GREEN);
//       }
//       while (!compare(pivot, j)) {
//         resetColor(j);
//         j--;
//         changeColor(j, BLUE);
//       }
//       changeColor(pivot, RED);
//       if (i < j) {
//         await swap(i, j);
//       }
//     }
//     await swap(pivot, j);
//     resetColor(i);
//     resetColor(j);
//     resetColor(pivot);
//     await quickSort(array, left, j - 1);
//     await quickSort(array, j + 1, right);
//   }
// }
// function quickSort(array, start, end) {
//   if (start === undefined) {
//     start = 0;
//     end = array.length - 1;
//   } else if (start >= end) {
//     return array;
//   }
//   var rStart = start, rEnd = end;
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
//   quickSort(array, rStart, start - 1);
//   quickSort(array, start, rEnd);
// }
