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