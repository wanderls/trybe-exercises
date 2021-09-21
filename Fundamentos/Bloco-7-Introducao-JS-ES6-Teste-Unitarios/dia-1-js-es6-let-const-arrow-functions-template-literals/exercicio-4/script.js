const frase = fraseCompleta => {
  let arrayFrase = fraseCompleta.split(' ');
  let maiorPalavra = 0;
  let  resultado = '';

  for (const index of arrayFrase) {
    if (index.length > maiorPalavra) {
      maiorPalavra = index.length;
      resultado = index;
    }
  }
  return resultado;
}

console.log(frase("Choque do trovão!"));

//Ou

const frase2 = fraseCompleta => fraseCompleta.length(' ').sort((palavra1, palavra2) => palavra2.length - palavra1.length)[0];

console.log(frase("Choque do trovão!"));
