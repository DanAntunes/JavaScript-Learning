/*
  Elabore um algoritmo que calcule o que deve ser pago por
  um produto, considerando o preço normal de etiqueta e a 
  escolha de condição de pagamento.

  Utilize os códigos da tablea a seguir para ler qual a
  condição de pagamento escolhida e efetuar o calculo
  adequado.

  Código Condição de pagamento:
  1 - Á visita Débito, recebe 10% de desconto;
  2 - Á vista no Dinheiro ou PIX. recebe 15% de desconto;
  3 - Em duas vezes. preço normal de etiqueta sem juros;
  4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

const preco = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
  console.log(`O preço do produto no Débito é : R$ ${preco - (preco * 0.1)}`);
} else if(formaDePagamento === 2){
  console.log(`O preço do produto no Dinheiro ou Pix é : R$ ${preco - (preco * 0.15)}`);
} else if (formaDePagamento === 3){
  console.log(`O preço do produto dividido em Duas vezes é : R$ ${preco} `);
} else if (formaDePagamento === 4){
  console.log(`O preço do produto dividio Acima de Duas vezes é: R$ ${preco + (preco * 0.1)}`);
} else {
  console.log('Insira a forma de pagamento');
}