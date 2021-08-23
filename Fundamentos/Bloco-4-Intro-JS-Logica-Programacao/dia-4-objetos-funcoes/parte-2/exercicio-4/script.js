// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let listaNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let nomeMaior = '';

function nomeMaiorFuncao (listaNomes){  
  for (let index = 0; index < listaNomes.length; index += 1){
    if (nomeMaior.length < listaNomes[index].length){
      nomeMaior = listaNomes[index];
    }   
  }
  return nomeMaior;
}
console.log(nomeMaiorFuncao(listaNomes));