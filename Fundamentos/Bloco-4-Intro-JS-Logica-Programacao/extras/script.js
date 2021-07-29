//Cria uma variavel do tipo Array
let pizzas = ["4 Queijos", "Frango com Catupiry", "Marguerita", "Palmito", "Chocolate"];

// Adiciona a string no proximo espaço disponivel na da Array
// pizzas[5]= "Peito de Peru" adiciona a string na posição 5 do Array, serve tbm para substituir um valor ja existente
pizzas.push('Peito de Peru');

// Adiciona a string no inicio da Array
pizzas.unshift('Portuguesa');

// Exibe em ordem alfabetica com conteudo da Array pizzas
console.log(pizzas.sort());

// Exibe a quantidade de valores contido na Array pizzas
console.log(pizzas.length);

// Exibe o valor contido na posição 2 dentro Array
// Obs: Arrays começam cpela posição 0
console.log(pizzas[0]);

// Cógigo irá repetir o conteudo contido em console.log(pizzas[index]) de acordo com a quantidade de valor contido no Array pizzas
for (let index = 0; index < pizzas.length; index ++){
  console.log(pizzas[index])
}

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Passear', 'Comer bolo'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

// Exibe o valor da ultima posição contida na Array
let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);

// Adiciona a string no inicio da Array
tasksList.unshift('Fazer exercícios da Trybe');
console.log(tasksList);

// Remove o conteudo da ultima posição do Array
tasksList.pop();
console.log(tasksList);

// Remove o conteudo da primeira posição do Array
tasksList.shift();
console.log(tasksList);

// Exibe em que posição no indice da Array esta a string
let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

//Exibe o valor da variavel word seperadamente a cada repetição
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

// Repete a variavel sum e a cada repetição é somado o valor 1 ao valor contaido no index
// Não altera o valor contido no Array
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}