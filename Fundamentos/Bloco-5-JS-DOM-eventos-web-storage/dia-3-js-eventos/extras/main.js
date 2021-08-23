const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

function adClasseTech(eventoClick) {
  let classeTech = document.querySelector('.tech');
  classeTech.classList.remove('tech');
  eventoClick.target.classList.add('tech');
  input.value = '';  
}

firstLi.addEventListener('click', adClasseTech);
secondLi.addEventListener('click', adClasseTech);
thirdLi.addEventListener('click', adClasseTech);

input.addEventListener('input', function(evento) {
  let techTexto = document.querySelector('.tech');
  techTexto.innerText = evento.target.value;
})

myWebpage.addEventListener('dblclick', redirecionar);
function redirecionar() {
  window.open('http://www.google.com');
}

myWebpage.addEventListener('mouseover', mouseCima);
function mouseCima() {
  event.target.style.color= 'darkgreen';
}

myWebpage.addEventListener('mouseout', mouseFora);
function mouseFora() {
  event.target.style.color= 'unset';
}