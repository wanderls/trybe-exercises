// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contadorImpar = 0;

for (let index = 0; index < numbers.length; index += 1){
  if (numbers[index] % 2 === 1){
    contadorImpar = contadorImpar + 1;
  }
}

console.log("Quantidade de numeros impares: " + contadorImpar);

// Eu resolvi o problema? Sim
// Havia outras maneiras de resolver o problema? Sim
// A maneira que eu escolhi foi a mais eficiente possível? Talvez
// Seria possível inverter ou retirar algum passo? Sim, criar a variavel "contadorimpar" na formula de calculo dentro For
// Se eu fosse um computador, conseguiria entender todas as intruções? Sim