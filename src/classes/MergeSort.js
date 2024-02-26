import Algorithm from "./sortingAlgorithm";

export default class MergeSort extends Algorithm {
  async sort(array, setArray, arraySorted, speed) {
    const mergeSort = async (arr, start, end) => {
      if (start >= end) {
        return;
      }
      const mid = Math.floor((start + end) / 2);

      await mergeSort(arr, start, mid);
      await mergeSort(arr, mid + 1, end);
      await merge(arr, start, mid, end);
    };

    const merge = async (arr, start, mid, end) => {
      const leftArray = arr.slice(start, mid + 1);
      const rightArray = arr.slice(mid + 1, end + 1);

      let i = start,
        j = 0,
        k = 0;

      while (j < leftArray.length && k < rightArray.length) {
        if (leftArray[j] <= rightArray[k]) {
          arr[i++] = leftArray[j++];
        } else {
          arr[i++] = rightArray[k++];
        }
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }

      while (j < leftArray.length) {
        arr[i++] = leftArray[j++];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }

      while (k < rightArray.length) {
        arr[i++] = rightArray[k++];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    };

    await mergeSort(array, 0, array.length - 1);
    setArray([...array]);
    arraySorted();
  }
}
