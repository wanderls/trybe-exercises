// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
  soma = soma + numbers[index];
}

let media = soma / numbers.length;

console.log("Valor total é: " + soma + ". A média é: " + media);

// Eu resolvi o problema? Sim
// Havia outras maneiras de resolver o problema? Não sei
// A maneira que eu escolhi foi a mais eficiente possível? Talvez
// Seria possível inverter ou retirar algum passo? Sim, criar a variavel "soma" na formula de calculo dentro For
// Se eu fosse um computador, conseguiria entender todas as intruções? Sim