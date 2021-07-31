// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numeroFinal = 25;
let numeroArray = [];

for (let index = 1; index <= numeroFinal; index += 1){
  numeroArray.push(index);
}

for (let index = 0; index < numeroArray.length; index += 1){
  let divisao = numeroArray[index] / 2;
  console.log(numeroArray[index] + " / " + "2: " + divisao);
}

// Eu resolvi o problema? Sim
// Havia outras maneiras de resolver o problema? Sim
// A maneira que eu escolhi foi a mais eficiente possível? Talvez
// Seria possível inverter ou retirar algum passo? Sim, poderia fazer todo o processo em um unico For (vide scriptV2.js)
// Se eu fosse um computador, conseguiria entender todas as intruções? Sim