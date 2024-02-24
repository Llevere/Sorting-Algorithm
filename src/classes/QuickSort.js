import Algorithm from "./sortingAlgorithm";

export default class QuickSort extends Algorithm {
  sort(array, setArray, arraySorted, speed) {
    function partition(arr, low, high) {
      setArray([...arr]);
      var pivot = arr[high];
      var i = low - 1;
      for (var j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          // Swap arr[i] and arr[j]
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          setArray([...arr]);
        }
        setArray([...arr]);
      }
      // Swap arr[i+1] and arr[high] (or pivot)
      var temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
      setArray([...arr]);
      return i + 1;
    }

    function quickSort(arr, low, high) {
      if (low < high) {
        setTimeout(() => {
          var pi = partition(arr, low, high);
          setArray([...arr]);
          quickSort(arr, low, pi - 1);
          setArray([...arr]);
          quickSort(arr, pi + 1, high);
          setArray([...arr]);
        }, speed * 5);
      }
      setArray([...arr]);
    }

    quickSort(array, 0, array.length - 1);
  }
}
