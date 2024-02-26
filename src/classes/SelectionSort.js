import Algorithm from "./sortingAlgorithm";

export default class SelectionSort extends Algorithm {
  async sort(array, setArray, arraySorted, speed) {
    async function selectionSort() {
      let arrayLength = array.length;

      // One by one move boundary of unsorted subarray
      return new Promise((resolve) => {
        for (let i = 0; i < arrayLength; i++) {
          // Find the minimum element in unsorted array
          let min_idx = i;

          setTimeout(() => {
            for (let j = i + 1; j < arrayLength; j++) {
              if (array[j] < array[min_idx]) {
                min_idx = j;
              }
            }

            [array[min_idx], array[i]] = [array[i], array[min_idx]];
            setArray([...array]);
            if (i === arrayLength - 1) resolve();
          }, i * speed * 2);
        }
      });
    }
    await selectionSort();
    arraySorted();
  }
}
