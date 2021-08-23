//Crie uma função que receba uma string word e outra string ending;
//Verifique se a string ending é o final da string word.
//Considere que a string ending sempre será menor que a string word.

let palavra1 = 'trybe';
let palavra2 = 'be';

function comPalavra (palavra1, palavra2){
  if (palavra1.substr(3) === palavra2.substr(0)){
    return true
  }else {
    return false
  }

}
console.log(comPalavra(palavra1, palavra2));