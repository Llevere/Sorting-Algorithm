import Algorithm from "./sortingAlgorithm";

export default class HeapSort extends Algorithm {
  sort(array, setArray, arraySorted, speed) {
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    function heapify(arr, n, i) {
      var largest = i; // Initialize largest as root
      var l = 2 * i + 1; // left = 2*i + 1
      var r = 2 * i + 2; // right = 2*i + 2

      // If left child is larger than root
      if (l < n && arr[l] > arr[largest]) largest = l;

      // If right child is larger than largest so far
      if (r < n && arr[r] > arr[largest]) largest = r;

      // If largest is not root
      if (largest !== i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        setTimeout(() => {
          setArray([...arr]);
        }, speed);

        heapify(arr, n, largest);
      }
    }

    // The main function to sort an array of given size
    function heapSort(arr) {
      var n = arr.length;

      // Build heap (rearrange array)
      for (var i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

      // One by one extract an element from heap
      for (var j = n - 1; j > 0; j--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[j];
        arr[j] = temp;

        // call max heapify on the reduced heap
        heapify(arr, j, 0);

        setTimeout(() => {
          setArray([...arr]);
        }, speed);
      }
    }

    // Start the sorting process
    heapSort(array);
    // Notify that sorting is complete
    setTimeout(() => {
      arraySorted();
    }, speed * array.length);
  }
}
