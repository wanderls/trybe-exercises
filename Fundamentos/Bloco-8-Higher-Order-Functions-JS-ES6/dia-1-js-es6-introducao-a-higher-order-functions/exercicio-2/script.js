const sorteio = () => {
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

function checarResultado(sorteio,numeroAposta) {
  if (sorteio === numeroAposta) {
    return 'Parabéns você ganhou!';
  }
  return 'Tente novamente';
}

console.log(checarResultado(sorteio(), 4));