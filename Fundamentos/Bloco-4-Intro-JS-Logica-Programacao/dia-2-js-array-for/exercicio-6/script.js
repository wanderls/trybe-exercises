// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contadorImpar = 0;

for (let index = 0; index < numbers.length; index += 1){
  if (numbers[index] % 2 === 1){
    contadorImpar = contadorImpar + 1;
  }
}

console.log("Quantidade de numeros impares: " + contadorImpar);