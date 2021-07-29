let nota = -100;

if (nota >= 90 && nota <= 100){
  console.log("Você acertou: " + nota + "% - Nota: A.");
}
else if (nota >= 80 && nota < 90){
  console.log("Você acertou: " + nota + "% - Nota: B.");
}
else if (nota >= 70 && nota < 80){
  console.log("Você acertou: " + nota + "% - Nota: C.");
}
else if (nota >= 60 && nota < 70){
  console.log("Você acertou: " + nota + "% - Nota: D.");
}
else if (nota >= 50 && nota <60){
  console.log("Você acertou: " + nota + "% - Nota: E.");
}
else if (nota < 50 && nota >=0){
  console.log("Você acertou: " + nota + "% - Nota: F.");
}
else {
  console.log("Nota invalida.")
}