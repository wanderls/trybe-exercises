// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) 
// do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain,
// Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os
//valores de cada objeto juntos de acordo com cada uma das chaves.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

// Criando novas entradas
// info.sexo = 'Feminino';

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O ultimo MacPatinhas',
  recorrente: 'Sim'
}

if (info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
recorrente2 = ('Ambos recorrentes.');
} else{
  recorrente2 = ('Não são recorrenes.')
}

// Dot notation - Notação de Ponto
console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
console.log(recorrente2)

// Bracket notation - Notação de Colchete
console.log(info['personagem'] + ' e ' + info2['personagem']);
console.log(info['origem'] + ' e ' + info2['origem']);
console.log(info['nota'] + ' e ' + info2['nota']);
console.log(recorrente2);