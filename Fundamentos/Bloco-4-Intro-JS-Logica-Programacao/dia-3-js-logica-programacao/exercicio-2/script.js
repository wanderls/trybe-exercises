// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5;
let armazem = '';

if (n >= 1){
	for (let index = 0; index < n; index += 1){
			console.log(armazem += '*');
	}
} else {
	console.log('Numero invalido')
}