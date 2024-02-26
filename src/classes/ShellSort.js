import Algorithm from "./sortingAlgorithm";

export default class ShellSort extends Algorithm {
  async sort(array, setArray, arraySorted, speed) {
    const MIN_MERGE = 32;

    const calcMinRun = (n) => {
      let r = 0;
      while (n >= MIN_MERGE) {
        r |= n & 1;
        n >>= 1;
      }
      return n + r;
    };

    const insertionSort = async (arr, left, right) => {
      for (let i = left + 1; i <= right; i++) {
        const temp = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > temp) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = temp;
        await new Promise((resolve) => setTimeout(resolve, speed));
        setArray([...arr]);
      }
    };

    const merge = async (arr, l, m, r) => {
      const len1 = m - l + 1,
        len2 = r - m;
      const left = new Array(len1),
        right = new Array(len2);

      for (let x = 0; x < len1; x++) left[x] = arr[l + x];
      for (let x = 0; x < len2; x++) right[x] = arr[m + 1 + x];

      let i = 0,
        j = 0;
      let k = l;

      while (i < len1 && j < len2) {
        if (left[i] <= right[j]) {
          arr[k] = left[i];
          i++;
        } else {
          arr[k] = right[j];
          j++;
        }
        k++;
      }

      while (i < len1) {
        arr[k] = left[i];
        k++;
        i++;
      }

      while (j < len2) {
        arr[k] = right[j];
        k++;
        j++;
      }
      await new Promise((resolve) => setTimeout(resolve, speed));
      setArray([...arr]);
    };

    const timSort = async (arr, n) => {
      const minRun = calcMinRun(MIN_MERGE);

      // Sort individual subarrays of size RUN
      for (let i = 0; i < n; i += minRun) {
        await insertionSort(arr, i, Math.min(i + minRun - 1, n - 1));
      }

      // Start merging from size RUN (or 32). It will merge
      // to form size 64, then 128, 256 and so on ....
      for (let size = minRun; size < n; size = 2 * size) {
        for (let left = 0; left < n; left += 2 * size) {
          const mid = left + size - 1;
          const right = Math.min(left + 2 * size - 1, n - 1);
          if (mid < right) {
            await merge(arr, left, mid, right);
          }
        }
      }
    };

    await timSort(array, array.length);
    setArray([...array]);
  }
}
