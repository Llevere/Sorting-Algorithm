export default function generateNewArray() {
  let array = [];

  for (let i = 0; i < 50; i++) {
    array.push(5 + Math.floor(Math.random() * 300));
  }

  return array;
}
