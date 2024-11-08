const precoEtiqueta = 100;
const formaDePagamento = 3;

function aplicarDesconto(valor, desconto) {
  return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
  return (valor + (valor * (juros / 100)));
}

if (formaDePagamento === 1) {
  console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
  console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
  console.log(precoEtiqueta);
} else if (formaDePagamento === 4) {
  console.log(aplicarJuros(precoEtiqueta, 10));
} else {
  console.log('Escolha a forma de pagamento');
}