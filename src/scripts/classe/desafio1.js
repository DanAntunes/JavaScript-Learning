/*
  1) Crie uma classe para representar carros. 
  Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
  Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
  gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  //metodo para calcular a quantidade de quiliometros e o preço do combustivel.
  calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
    const gasto = distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    return Math.round(gasto);
  }

}

const nissan = new Carro('Skyline', 'Azul',1/16);
console.log(nissan.calcularGastoDePercurso(711,5));