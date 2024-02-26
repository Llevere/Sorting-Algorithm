import Algorithm from "./sortingAlgorithm";

export default class QuickSort extends Algorithm {
  async sort(array, setArray, arraySorted, speed) {
    const quickSort = async (arr, left = 0, right = arr.length - 1) => {
      if (left < right) {
        const partitionIndex = await partition(arr, left, right);

        // Recursively sort the left and right arrays
        await quickSort(arr, left, partitionIndex - 1);
        await quickSort(arr, partitionIndex + 1, right);
      }
    };

    const partition = async (arr, left, right) => {
      const pivot = arr[right];
      let i = left - 1;

      for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
          // Swap arr[i] and arr[j]
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];

          await new Promise((resolve) => setTimeout(resolve, speed));
          setArray([...arr]);
        }
      }

      [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

      await new Promise((resolve) => setTimeout(resolve, speed));
      setArray([...arr]);

      return i + 1;
    };
    await quickSort(array);
    setArray([...array]);
  }
}
