// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let palavra1 = 'arara';

function palavraNova (palavra1){
  if (palavra1 === palavra1.split('').reverse().join('')){
    return true;
  } else {
    return false;
  }
}

console.log('A palavra ' + palavra1 + ' é palindromo? ' +palavraNova(palavra1));