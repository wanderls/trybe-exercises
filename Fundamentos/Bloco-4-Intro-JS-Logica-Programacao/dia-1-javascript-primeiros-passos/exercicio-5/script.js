let angulo1 = 100;
let angulo2 = 30;
let angulo3 = 50;
let soma = angulo1 + angulo2 + angulo3;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
  console.log("Nenhum dos angulos pode ser negativo!")
}
else{
  if (soma === 180){
    console.log("É um triangulo? " + true)
  }
  else {
    console.log("É um triangulo? " + false)
  }
}