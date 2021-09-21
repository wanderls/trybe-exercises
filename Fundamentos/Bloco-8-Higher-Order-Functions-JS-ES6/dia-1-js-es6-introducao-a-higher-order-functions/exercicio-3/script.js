const right_answers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student_answers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const notaFinal = (right_answers, student_answers, calcNotaFinal) => {
  let contador = 0;
  for (let index = 0; index <= right_answers.length -1; index += 1) {
    const acertos = calcNotaFinal(right_answers[index], student_answers[index]);
    contador += acertos;
  }
  return `Nota final: ${contador}`;
};

const calcNotaFinal = (gabarito, respostaAluno) => {
  if (gabarito === respostaAluno) {
    return 1;
  } if (respostaAluno === 'N.A') {
    return 0;
  } else {
    return  -0.5;
  }
}

const resultado = notaFinal(right_answers, student_answers, calcNotaFinal);

console.log(resultado);
