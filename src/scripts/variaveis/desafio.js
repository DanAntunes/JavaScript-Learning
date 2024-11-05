/*
  Faça um programa para calcular o valor de uma viagem.
  
  Você terá 3 variáveis. Sendo elas:
  1 - Preço do combustivel;
  2 - Gasto médio de combustivel do carro por KM;
  3 - Distância em KM da viagem;

  Imprima no console o valor que será gasto para realizar está viagem.
*/

const precoCombustivel = 5.89;
const kmPorLitro = 10;
const distanciaKm = 700;

const litros = distanciaKm / kmPorLitro; 
const custoTotal = litros * precoCombustivel;
console.log(`O valor gasto para a viagem será: R$ ${custoTotal.toFixed(2)}`)