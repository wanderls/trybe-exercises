// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
  soma = soma + numbers[index];
}

console.log("Valor total é: " + soma);

// Eu resolvi o problema? Sim
// Havia outras maneiras de resolver o problema? Não sei
// A maneira que eu escolhi foi a mais eficiente possível? Talvez
// Seria possível inverter ou retirar algum passo? Sim, criar a variavel "soma" na formula de calculo dentro For
// Se eu fosse um computador, conseguiria entender todas as intruções? Sim