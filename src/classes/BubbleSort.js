import Algorithm from "./sortingAlgorithm";

export default class BubbleSort extends Algorithm {
  sort(array, setArray, arraySorted, speed) {
    const arrayLength = array.length;
    let tempArray = array.slice();
    for (let i = 0; i < arrayLength; i++) {
      for (let j = 0; j < arrayLength - 1; j++) {
        setTimeout(() => {
          if (tempArray[j] > tempArray[j + 1]) {
            let temp = tempArray[j];
            tempArray[j] = tempArray[j + 1];
            tempArray[j + 1] = temp;
            setArray([...tempArray]);
          }
        }, (i * arrayLength + j) * speed);
      }
    }
  }
}
