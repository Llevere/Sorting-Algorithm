export default function sort(array, setArray) {
  const len = array.length;
  let tempArray = array.slice();
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      // Simulate sorting delay
      setTimeout(() => {
        //console.log("Moving index: " + j);
        if (tempArray[j] > tempArray[j + 1]) {
          // Swap elements
          const index = document.getElementsByClassName(`array-number${j}`);
          console.log("Index: " + index);
          let temp = tempArray[j];
          tempArray[j] = tempArray[j + 1];
          tempArray[j + 1] = temp;
          // Set state after the swap
          setArray([...tempArray]);
        }
      }, (i * len + j) * 5);
    }
  }

  return tempArray;
}
