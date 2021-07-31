// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let numero = 8000;
let primo = true;

if (numero > 1){
  for (let index = 2; index < numero; index += 1){
    if (numero % index === 0){
      primo = false;
      break;
    }
  }
  if (primo){
    console.log(numero + " é primo.");
  } else{ 
    console.log(numero + " não é primo.");
  }
} else {
  console.log('Numero invalido.');
}