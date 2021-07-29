let salario = 3090;
let salarioBase = 0;
let salarioBruto = 0;

// Calculo INSS
if (salario >= 0 && salario <= 1556.94){
  salarioBase = salario - (salario * 0.08);
}
else if (salario >= 1556.95 && salario <= 2594.92){
  salarioBase = salario - (salario * 0.09);
}
else if (salario >= 2594.93 && salario <= 5189.82){
  salarioBase = salario - (salario * 0.11);
}
else if (salario >= 5189.83){
  salarioBase = salario - 570.88;
}
else {
  console.log("Valor invalido.");
}

// calculo IR

if (salarioBase >=0 && salarioBase <= 1903.98){
  salarioBruto = salarioBase;
  console.log("Isento de imposto de renda!");
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
  salarioBruto = salarioBase - ((salarioBase * 0.075) - 142.80);
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
  salarioBruto = salarioBase - ((salarioBase * 0.15) - 354.80);
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
  salarioBruto = salarioBase - ((salarioBase * 0.225) - 636.13);
}
else if (salarioBase >= 4664.68){
  salarioBruto = salarioBase - ((salarioBase * 0.275) - 869.36);
}
else {
  console.log("Valor invalido")
}

console.log("Salario base é de: R$ " + salarioBase);
console.log("Salario bruto é de: R$ " + salarioBruto);
