const array = ['CSS', 'Javascript', 'Windows', 'Linux', 'HTML'];

function fraseSkills(frase) {
  const funcao = fraseInicial => (
    `Tryber ${fraseInicial} aqui!
    
  Tudo bem?`);

  let resultado = `${funcao(frase)}

  Minhas cinco habilidades são: `;

  array.forEach((skill, index) => 
  resultado = `${resultado} 
  
  - ${skill}`);

  resultado = `${resultado} 

  #goTrybe`;

  return resultado;
}

console.log(fraseSkills('Wander'));