import Algorithm from "./sortingAlgorithm";

export default class BubbleSort extends Algorithm {
  sort(array, setArray, arraySorted, speed) {
    const len = array.length;
    let tempArray = array.slice();
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        setTimeout(() => {
          if (tempArray[j] > tempArray[j + 1]) {
            let temp = tempArray[j];
            tempArray[j] = tempArray[j + 1];
            tempArray[j + 1] = temp;
            setArray([...tempArray]);
          }
        }, (i * len + j) * speed);
      }
    }
    return tempArray;
  }
}
