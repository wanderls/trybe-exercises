// Ordene o array numbers em ordem decrescente e imprima seus valores;

let array = [51, 23, 26, 21, 74, 99, 1, 10, 64];

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] > array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}

console.log("Ordem decrescente: " + array);