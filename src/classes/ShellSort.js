import Algorithm from "./sortingAlgorithm";

export default class ShellSort extends Algorithm {
  async sort(array, setArray, arraySorted, speed) {
    return new Promise((resolve) => {
      const arrayLength = array.length;
      let tempArray = array.slice();

      // Start with a big gap, then reduce the gap
      for (
        let gap = Math.floor(arrayLength / 2);
        gap > 0;
        gap = Math.floor(gap / 2)
      ) {
        // Do a gapped insertion sort for this gap size.
        // The first gap elements array[0..gap-1] are already in gapped order keep adding one more element until the entire array is gap sorted

        for (let i = gap; i < arrayLength; i++) {
          // Add array[i] to the elements that have been gap sorted save array[i] in temp and make a hole at position i
          let temp = tempArray[i];
          // Shift earlier gap-sorted elements up until the correct location for array[i] is found
          let j;
          setTimeout(() => {
            for (j = i; j >= gap && tempArray[j - gap] > temp; j -= gap) {
              tempArray[j] = tempArray[j - gap];
            }

            // Put temp (the original array[i]) in its correct location
            tempArray[j] = temp;
            setArray([...tempArray]);
          }, (j - gap) * speed * 50);
        }
      }

      console.log("Array sorted using Shell Sort.");
      resolve(); // Resolve the Promise when sorting is complete
    });
  }
}
