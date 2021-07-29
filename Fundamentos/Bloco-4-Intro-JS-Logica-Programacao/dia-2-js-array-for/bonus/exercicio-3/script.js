// Agora crie um novo array a partir do array numbers , sem perdê-lo. 
// Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 
// Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). 
// Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante.
// Caso não haja próximo valor, a multiplicação deverá ser feita por 2.
// Faça isso utilizando o for e o método push .
// O resultado deve ser o array abaixo:

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let index = 0; index < array.length; index += 1){
  if (index < array.length - 1){
    novoArray.push(array[index] * array[index + 1]);
  }
  else{
    novoArray.push(array[index] * 2);
  }
}

console.log(novoArray);