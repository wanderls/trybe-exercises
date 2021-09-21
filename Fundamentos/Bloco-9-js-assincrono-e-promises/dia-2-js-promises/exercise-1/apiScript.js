// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json'}
  }

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => contarPiada(data));
};

const contarPiada = (piada) => {
  const piadaH2 = document.getElementById('jokeContainer');
  const paragrafo = document.createElement('p');
  paragrafo.innerText = `Piada ID: ${piada.id}
    ${piada.joke}`; 

  piadaH2.appendChild(paragrafo);
};

window.onload = () => fetchJoke();
