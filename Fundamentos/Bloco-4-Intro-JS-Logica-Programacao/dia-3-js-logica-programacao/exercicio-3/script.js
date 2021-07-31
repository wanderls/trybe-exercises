// Agora inverta o lado do triângulo

let n = 5;
let armazem = '    ';
let armazen2 = '';

if (n >= 1){
  for (let index = 0; index < n; index += 1){
    console.log(armazem.substr(index),(armazen2 += '*'));  
  }
} else {
  console.log('Numero invalido');
}