/*
  Faça um programa para calcular o valor de uma viagem.

  Você terá 5 variáveis. Sendo elas;
  1 - Preço do etanol;
  2 - Preço da galosina;
  3 - O tipo de combustivel que está no seu carro;
  4 - Custo médio de combustivel do carro por KM;
  5 - Distância em KM da viagem;

  Imprimir no console o valor que será gasto para realizar está viagem;

*/

const precoEtanol = 4.04 ;
const precoGasolina = 6.07;
const tipoCombustivel = 'Etanol';
const kmPorLitro = 10;
const distanciaKm = 200;

const litrosConsumidos = distanciaKm / kmPorLitro;

if (tipoCombustivel === 'Gasolina') {
  const valorGasto = litrosConsumidos * precoEtanol;
  // biome-ignore lint/style/useTemplate: <explanation>
  console.log('Você gastou R$ ' + valorGasto.toFixed(2) + ' de Etanol.');
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  // biome-ignore lint/style/useTemplate: <explanation>
  console.log('Você gastou R$ ' + valorGasto.toFixed(2) + ' de Gasolina.');
}