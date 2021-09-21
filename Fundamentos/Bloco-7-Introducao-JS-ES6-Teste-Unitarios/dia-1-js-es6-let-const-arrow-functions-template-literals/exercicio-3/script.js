let valor = 2;
const fatorial = numero => {
  let resultado = 1;

  for (let index = 2; index <= numero; index += 1) {
    resultado *= index;
  }
  return resultado;
}

console.log(`O fatorial de ${valor} é: ${fatorial(valor)}`);

const fatorial2 = numero => numero > 1 ? numero * fatorial2(numero - 1) : 1;
console.log(fatorial2(valor));
