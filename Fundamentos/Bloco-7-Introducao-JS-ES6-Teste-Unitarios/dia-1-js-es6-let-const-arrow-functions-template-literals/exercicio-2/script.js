const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenar = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const numerosOrdenados = ordenar();

console.log(`Os números do array oddsAndEvens [${oddsAndEvens}], foram ordenados: ${numerosOrdenados}`);

console.log(`Os números do array oddsAndEvens [${oddsAndEvens}], foram ordenados: ${oddsAndEvens.sort((a, b) => a - b)}`);
