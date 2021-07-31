// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

// A resolução do problema acontece em 3 etapas:
// 1-Interpretação;
// 2-Criação do algoritmo;
// 3-Codificação do algoritmo.

// Analisando o enunciado, sabemos que:

// devemos utilizar o array fruits ;
// o termo " percorra " indica uma estrutura de repetição, ou loop;
// " somando todos os valores " mostra que devemos ter uma variável que guarda o valor da soma dos valores;
// o termo " caso " indica uma estrutura condicional, ou if ;
// " imprima o valor final " indica um console.log ;

// Agora vamos criar o algoritmo, e pra isso faremos uso dos baby steps . Eles nos estimulam a dividir grandes e complexos problemas em pequenos e simples
// 1-Adicionar o array;
// 2-Criar uma variável com valor 0;
// 3-Criar um loop que percorre o array;
// 4-Incrementar a variável com o valor correspondente a cada loop;
// 5-Criar um if com a condição da variável ser maior que 15;
// 6-Caso a variável obedeça a condição;
//    1-Imprimir a variável
// 7-Caso não obedeça a condição;
//    1-Imprimir a mensagem "valor menor que 16";

// Adicionar o array
let fruits = [3, 4, 10, 1, 12];
// Criar uma variável com valor 0
let sum = 0;

// Criar um loop que percorre o array;
for (let index = 0; index < fruits.length; index += 1) {
  // Incrementar a variável com o valor correspondente a cada loop
  sum += fruits[index];
}
  //Criar um if com a condição da váriavel ser maior que 15
if (sum > 15) {
//  Caso a varíavel obedeça a condição: Imprimir a varíavel
  console.log(sum);
} else {
// Caso não obedeça a condição: Imprimir a mensagem “valor menor que 16”
  console.log('valor menor que 16');
}