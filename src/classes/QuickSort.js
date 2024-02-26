import Algorithm from "./sortingAlgorithm";

export default class QuickSort {
  async sort(array, setArray, arraySorted, speed) {
    // Asynchronous Quick Sort function
    const quickSort = async (arr, left = 0, right = arr.length - 1) => {
      if (left < right) {
        // Partition the array
        const partitionIndex = await partition(arr, left, right);

        // Recursively sort the left and right partitions
        await quickSort(arr, left, partitionIndex - 1);
        await quickSort(arr, partitionIndex + 1, right);
      }
    };

    // Partition function
    const partition = async (arr, left, right) => {
      // Choose the pivot element (in this implementation, the rightmost element)
      const pivot = arr[right];
      let i = left - 1;

      for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
          // Swap arr[i] and arr[j]
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          // Update UI after each swap
          await new Promise((resolve) => setTimeout(resolve, speed));
          setArray([...arr]);
        }
      }

      // Swap arr[i+1] and arr[right] (or pivot)
      [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
      // Update UI after partitioning
      await new Promise((resolve) => setTimeout(resolve, speed));
      setArray([...arr]);

      // Return the partition index
      return i + 1;
    };

    // Call the async quickSort function
    await quickSort(array);
    // Update UI with the final sorted array
    setArray([...array]);
  }
}
