let arrayEstados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MT", "MS", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"];
// ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
// "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará",
// "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul",
// "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

function criarOptionEstados() {
  const selectEstados = document.querySelector('#dropdown-estado');
  for (index in arrayEstados) {
    const optionEstados = document.createElement('option');
    optionEstados.innerText = arrayEstados[index];
    optionEstados.value = arrayEstados[index];
    selectEstados.appendChild(optionEstados)
  }   
}
criarOptionEstados();

function interromperFluxo(event) {
  event.preventDefault();
}

let enviarFormulario = document.querySelector('#enviarFormulario');
enviarFormulario.addEventListener('click', interromperFluxo => {
  let dataInicio = document.querySelector('#dataInicio').value;
  let dia = parseInt(dataInicio.substring(0,2)) || '';
  let mes = parseInt(dataInicio.substring(3,5)) || '';
  let ano = parseInt(dataInicio.substring(6,10)) || '';

  if (typeof(dia) !== 'number' || typeof(mes) !== 'number' || typeof(ano) !== 'number') {
    alert('Data invalida');
  } else if (dia < 0 || dia > 31) {
    alert(`${dia} não é um numero valido`);
  } else if (mes < 1 || dia > 12) {
    alert(`${mes} não é um numero valido`);
  } else if (ano < 0) {
    alert(`${ano} não é um numero valido`);
  }
})

