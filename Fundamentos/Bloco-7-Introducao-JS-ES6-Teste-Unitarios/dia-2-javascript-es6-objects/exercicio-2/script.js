const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 1
// function addTurnoManha() {
//   const lesson = lesson2;
//   lesson.turno = 'manhã';
// }
// addTurnoManha();

const lesson = (addTurnoManha) => {
  addTurnoManha.turno = 'manhã';
}
lesson(lesson2);

console.log(`Objt 1: ${Object.entries(lesson1)}`);
console.log(`Objt 2: ${Object.entries(lesson2)}`);
console.log(`Objt 3: ${Object.entries(lesson3)}`);

// Exercicio 2
// function chavesObjts(parametro) {
//   const mostraChaves = Object.keys(parametro)

//   return mostraChaves;
// }

const mostraChaves = (parametro) => Object.keys(parametro);

console.log(`As Keys do objeto são: ${mostraChaves(lesson2)}`);

// Exercicio 3
const array = (parametro) => {
  const tamanhoArray = Object.entries(parametro);
  return tamanhoArray.length;
}

console.log(`O tamanho do array é: ${array(lesson2)}`);

// Exercicio 4
const valorObjt = (parametro) => Object.values(parametro);

console.log(`Os valores do array são: ${valorObjt(lesson2)}`);

// Exercicio 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

console.log(allLessons)

// Exercicio 6
const calculcarEstudantes = () => {
  const numeroEstudantes1 = allLessons.lesson1.numeroEstudantes;
  const numeroEstudantes2 = allLessons.lesson2.numeroEstudantes;
  const numeroEstudantes3 = allLessons.lesson3.numeroEstudantes;

  let totalEstudantes = numeroEstudantes1 + numeroEstudantes2 + numeroEstudantes3;

  return totalEstudantes
}

console.log(`Total de estudantes: ${calculcarEstudantes()}`);

// Exercicio 7
const getValueByNumber = (lesson, numero) => {
  const resultado = Object.values(lesson)[numero];

  return resultado;
};

console.log(getValueByNumber(lesson1,2))

// Exercicio 8
const verifyPair = (objeto, chave, valor) => {
  const array = Object.entries(objeto);
  let verifica = false;

  for (let index in array) {
    if (array[index][0] === chave && array[index][1] === valor) verifica = true;
  }

  return verifica;
};

console.log(`Os parametros existem? ${verifyPair(lesson3, 'turno', 'noite')}`);