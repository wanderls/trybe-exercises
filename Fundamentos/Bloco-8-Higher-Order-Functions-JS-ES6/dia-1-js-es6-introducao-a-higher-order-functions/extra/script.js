const frase1 = () => {
  return `Acordando!!`;
}

const frase2 = () => {
  return `Bora tomar café!!`;
}

const frase3 = () => {
  return `Partiu dormir!!`;
}

const doingThings = (param) => {
  console.log (param());
}

doingThings(frase3);
