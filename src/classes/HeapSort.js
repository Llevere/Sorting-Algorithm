import Algorithm from "./sortingAlgorithm";

export default class HeapSort extends Algorithm {
  async sort(array, setArray, arraySorted, speed) {
    async function heapSort() {
      const n = array.length;

      // rearrange array
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(n, i);
      }

      // One by one extract an element from heap
      for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [array[0], array[i]] = [array[i], array[0]];

        // Call max heapify on the reduced heap
        await heapify(i, 0);
      }
    }

    // To heapify a subtree rooted with node i which is an index in arr[]
    const heapify = async (n, i) => {
      let largest = i; // Initialize largest as root
      const left = 2 * i + 1; // left = 2*i + 1
      const right = 2 * i + 2; // right = 2*i + 2

      // If left child is larger than root
      if (left < n && array[left] > array[largest]) {
        largest = left;
      }

      // If right child is larger than largest so far
      if (right < n && array[right] > array[largest]) {
        largest = right;
      }

      // If largest is not root
      if (largest !== i) {
        // Swap array[i] and array[largest]
        [array[i], array[largest]] = [array[largest], array[i]];

        await new Promise((resolve) => setTimeout(resolve, speed));
        setArray([...array]);

        // Recursively heapify the affected sub-tree
        await heapify(n, largest);
      }
    };

    await heapSort();
    setArray([...array]);
    arraySorted();
  }
}
