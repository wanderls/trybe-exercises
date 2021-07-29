let custoCompra = 20;
let custoVenda = 60;

if (custoCompra < 0 || custoVenda < 0){
  console.log("Valores invalidos.");
}
else{
  let lucroVenda = custoVenda - custoCompra + (custoCompra * 0.2);
  lucroMil = lucroVenda * 1000;
  console.log("Lucro unitario é: R$ " + lucroVenda + ". Lucro da venda de 1000 un é: R$ " + lucroMil);
}
