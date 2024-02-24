import Algorithm from "./sortingAlgorithm";

export default class RadixSort extends Algorithm {
  sort(array, setArray, arraySorted, speed) {
    const getMax = (arr) => {
      let max = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      return max;
    };

    const countSort = (arr, exp, index) => {
      const n = arr.length;
      const output = Array(n).fill(0);
      const count = Array(10).fill(0);

      // Count occurrences of digits
      for (let i = 0; i < n; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
      }

      // Calculate cumulative count
      for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
      }

      // Build the output array
      for (let i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
      }

      // Update array and trigger animation step by step
      setTimeout(() => {
        for (let i = 0; i < n; i++) {
          arr[i] = output[i];
        }
        setArray([...arr]);

        if (exp >= 1) {
          countSort(arr, exp / 10, index + 1);
        } else {
          arraySorted(); // Notify that sorting is complete
        }
      }, index * speed);
    };

    const radixSort = (arr) => {
      const max = getMax(arr);
      countSort(arr, Math.floor(max / 10), 0);
    };

    // Start the sorting process
    radixSort(array.slice());
  }
}
