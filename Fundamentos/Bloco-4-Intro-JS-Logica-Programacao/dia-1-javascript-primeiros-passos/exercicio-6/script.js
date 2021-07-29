let nomePeca = "peao";

switch (nomePeca.toLowerCase()){
  case "rei":
    console.log("Movimento da peça " + nomePeca + " é: horizontal, vertical ou diagonal.");
  break;
  case "dama":
    console.log("Movimento da peça " + nomePeca + " é: linha reta nas fileiras, colunas e diagonais.");
  break;
  case "torre":
    console.log("Movimento da peça " + nomePeca + " é: linha reta nas colunas e fileiras do Tabuleiro.");
  break;
  case "bispo":
    console.log("Movimento da peça " + nomePeca + " é: linhas retas nas diagonais do tabuleiro.");
  break;
  case "cavalo":
    console.log("Movimento da peça " + nomePeca + " é: diagonal ou fileiras do Tabuleiro, com o formato característico da letra L");
  break;
  case "peao":
    console.log("Movimento da peça " + nomePeca + " é: movimenta para a casa desocupada imediatamente a sua frente");
  break;
  default:
    console.log("Peça invalida.")
}