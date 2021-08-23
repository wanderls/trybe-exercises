function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
// Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" .
// Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let ulDay = document.getElementById('days');

for (let index = 0; index < dezDaysList.length; index += 1) {
  let liFilhoUlDay = document.createElement('li');
  if (dezDaysList[index] === 24 ||  dezDaysList[index] === 31) {
    liFilhoUlDay.classList = 'day holiday';
  } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
    liFilhoUlDay.classList = 'day friday';
  } else if (dezDaysList[index] === 25) {
    liFilhoUlDay.classList = 'day holiday friday';
  } else {
    liFilhoUlDay.classList = 'day';
  }
  liFilhoUlDay.innerText = (dezDaysList[index]);
  ulDay.appendChild(liFilhoUlDay);
}

// Exercicio 2
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function botaoFeriados() {
  let div = document.querySelector('.buttons-container');
  let botaoFilhoDiv = document.createElement('button');
  botaoFilhoDiv.id = 'btn-holiday';
  botaoFilhoDiv.innerText = 'Feriados';
  botaoFilhoDiv.name = 'Feriados';
  div.appendChild(botaoFilhoDiv);
}
botaoFeriados();

// Exercicio 3
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function clickFeriados() {
  let botaoFeriado = document.querySelector('#btn-holiday');
  let diasFeriados = document.querySelectorAll('.holiday');
  let corFundoPadrao = 'rgb(238,238,238)';
  let novaCor = 'yellow';

  botaoFeriado.addEventListener('click', function() {
    for (let index = 0; index < diasFeriados.length; index += 1) {
      if (diasFeriados[index].style.backgroundColor === novaCor) {
        diasFeriados[index].style.backgroundColor = corFundoPadrao;
      } else {
        diasFeriados[index].style.backgroundColor = novaCor;
      }
    }
  })
};
clickFeriados();

// Exercicio 4
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function botaoSexta() {
  let div = document.querySelector('.buttons-container');
  let botaoFilhoDiv = document.createElement('button');
  botaoFilhoDiv.id = 'btn-friday';
  botaoFilhoDiv.innerText = 'Sexta-feira';
  botaoFilhoDiv.name = 'Sexta-feira';
  div.appendChild(botaoFilhoDiv);
}
botaoSexta();

// Exercicio 5
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa.
// Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function clickSextas(arraySexta) {
  let botaoFeriado = document.querySelector('#btn-friday');
  let diasFeriados = document.querySelectorAll('.friday');
  let textoSexta = 'SEXTOU o/';
  

  botaoFeriado.addEventListener('click', function() {
    for (let index = 0; index < diasFeriados.length; index += 1) {
      if (diasFeriados[index].innerHTML !== textoSexta) {
        diasFeriados[index].innerHTML = textoSexta;
      } else {
        diasFeriados[index].innerHTML = arraySexta[index];
      }
    }
  })
}
let diasSextas = [4, 11, 18, 25];
clickSextas(diasSextas);

// Exercicio 6
// Implemente duas funções que criem um efeito de "zoom".
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function diasZoom() {
  let zoom = document.querySelector('#days');

  zoom.addEventListener('mouseover', function(evento){
    evento.target.style.fontSize = '25px';
    evento.target.style.fontWeight = '600';
  })  
}

function diasMenosZoom() {
  let menosZoom = document.querySelector('#days');

  menosZoom.addEventListener('mouseout', function(evento){
    evento.target.style.fontSize = '20px';
    evento.target.style.fontWeight = '200';
  })  
}
diasZoom();
diasMenosZoom();

// Exercicio 7
// Implemente uma função que adiciona uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addTarefas(tarefas) {
  let filhoDiv = document.querySelector('.my-tasks');
  let span = document.createElement('span');

  span.innerHTML = tarefas;
  filhoDiv.appendChild(span);
}
addTarefas('Caminhar');

// Exercicio 8
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior.
// Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function corTarefas(cor) {
  let filhoDiv = document.querySelector('.my-tasks');
  let novaTarefa = document.createElement('div');

  novaTarefa.className = 'task';
  novaTarefa.style.backgroundColor = cor;
  filhoDiv.appendChild(novaTarefa);
}
corTarefas('green');

// Exercicio 9
// Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function eventoDiv() {
  let selecionarTarefas = document.getElementsByClassName('task selected');
  let minhasTarefas = document.querySelector('.task');

  minhasTarefas.addEventListener('click', function(evento) {
    if (selecionarTarefas.length === 0) {
      evento.target.className = 'task selected';
    } else {
      evento.target.className = 'task';
    }
  })
}
eventoDiv();

// Exercicio 10
// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function diaCor() {
  let selecionarTarefas = document.getElementsByClassName('task selected');
  let dias = document.querySelector('#days');
  let minhasTarefas = document.querySelector('.task');
  let corTarefas = minhasTarefas.style.backgroundColor;

  dias.addEventListener('click', function(evento) {
    let mudarCor = evento.target.style.color;
    if (selecionarTarefas.length > 0 && mudarCor !== corTarefas) {
      let cor = selecionarTarefas[0].style.backgroundColor;
      evento.target.style.color = cor;
    } else if (mudarCor === corTarefas && selecionarTarefas.length !== 0) {
      evento.target.style.color = 'rgb(119,119,119)';
    }
  })
}
diaCor();