window.onload = function() {

  // Botão Alterar Cor de Fundo
  function criarBotaoMudaCor() {
    let corBackground = document.querySelector('.menu');
    let botaoCorBack = document.createElement('button');

    botaoCorBack.className = 'botao';
    botaoCorBack.name = 'Alterar Cor';
    botaoCorBack.innerText = 'Modo Noturno';
    
    corBackground.appendChild(botaoCorBack);
  }
  criarBotaoMudaCor();

  // Função para alterar cor do background
  function clickCorFundo(cor) {
    let mudaCor = document.querySelector('.botao');
    let backgroundCor = document.querySelector('.container');
  

    mudaCor.addEventListener('click', function() {
      if (cor === true){
        backgroundCor.style.backgroundColor = 'black';
        backgroundCor.style.color = 'white';
        localStorage.setItem('fundoCor', 'black');
        localStorage.setItem('fontCor', 'white')
        return cor = false;
      } else {
        backgroundCor.style.backgroundColor = 'white';
        backgroundCor.style.color = 'black';
        localStorage.setItem('fundoCor', 'white');
        localStorage.setItem('fontCor', 'black')
        return cor = true;
      }    
    })
  }
  clickCorFundo();

  // Botão Aumentar Fonte do Texto
  function botaoMaior() {
    let aumenta = document.querySelector('.menu');
    let botaoAumentaTexto = document.createElement('button');

    botaoAumentaTexto.className = 'botaoTamanho aumentar';
    botaoAumentaTexto.name = 'aumentaTexto';
    botaoAumentaTexto.innerText = '+';

    aumenta.appendChild(botaoAumentaTexto);
  }
  botaoMaior();

// Botão Diminuir Fonte do Texto
  function botaoMenor() {
    let diminui = document.querySelector('.menu');
    let botaoDiminuiTexto = document.createElement('button');

    botaoDiminuiTexto.className = 'botaoTamanho diminuir';
    botaoDiminuiTexto.name = 'diminuiTexto';
    botaoDiminuiTexto.innerText = '-';

    diminui.appendChild(botaoDiminuiTexto);
  }
  botaoMenor();

   // Função Tamanho Fonte do Texto
   function aumentaTexto() {
    let aumentarFont = document.querySelector('.aumentar');
    let diminuirFont = document.querySelector('.diminuir');
    let box2 = document.querySelector('.box2');

    aumentarFont.addEventListener('click', function(){
      box2.style.fontSize = '20px';
      localStorage.setItem('tamanhoFont', '20px');
    })

    diminuirFont.addEventListener('click', function(){
      box2.style.fontSize = '15px';
      localStorage.setItem('tamanhoFont', '15px');
    })
  }
  aumentaTexto();

// Função que armazena o visual da pagina  
  function carregarStorage() {
    let saveFundoCor = localStorage.getItem('fundoCor');
    let saveFontCor = localStorage.getItem('fontCor');
    document.body.style.backgroundColor = saveFundoCor;
    document.body.style.color = saveFontCor;

    let saveFontSize = localStorage.getItem('tamanhoFont');
    let box2 = document.querySelector('.box2');
    box2.style.fontSize = saveFontSize;
  }
  carregarStorage()
}