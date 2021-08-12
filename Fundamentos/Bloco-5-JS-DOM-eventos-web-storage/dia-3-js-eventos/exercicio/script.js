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

//Botão Feriados
function botaoFeriados() {
  let div = document.querySelector('.buttons-container');
  let botaoFilhoDiv = document.createElement('button');
  botaoFilhoDiv.id = 'btn-holiday';
  botaoFilhoDiv.innerText = 'Feriados';
  botaoFilhoDiv.name = 'Feriados';
  div.appendChild(botaoFilhoDiv);
}
botaoFeriados();

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

//Botão Sexta-feira
function botaoSexta() {
  let div = document.querySelector('.buttons-container');
  let botaoFilhoDiv = document.createElement('button');
  botaoFilhoDiv.id = 'btn-friday';
  botaoFilhoDiv.innerText = 'Sexta-feira';
  botaoFilhoDiv.name = 'Sexta-feira';
  div.appendChild(botaoFilhoDiv);
}
botaoSexta();

function clickSextas() {
  let botaoFeriado = document.querySelector('#btn-friday');
  let diasFeriados = document.querySelectorAll('.friday');
  let corFundoPadrao = 'rgb(238,238,238)';
  let novaCor = 'lightgreen';

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
clickSextas();

