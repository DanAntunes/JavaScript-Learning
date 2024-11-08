/*
  2) Crie uma classe para representar pessoas.
  Para cada pessoa teremos os atributos nome, peso e altura.
  As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
  Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
  do seu IMC;
*/

  class Pessoa {
    nome;
    peso;
    altura;

      constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
      }

      calcularImc() {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
      }

      classificarImc(){
        const imc = this.calcularImc(); // Calcula o IMC internamente
        if(imc < 18.5 ){
          return `Seu IMC é : ${imc} você está Abaixo do peso.`;
        }if(imc >= 18.5 && imc <= 25){
          return `Seu IMC é : ${imc} Peso normal.`;
        }if (imc >= 25 && imc <= 30){
          return `Seu IMC é : ${imc} você está Acima do peso`;
        }if (imc >= 30 && imc <= 40){
          return `Seu IMC é : ${imc} você está Obeso`;
        }
          return `Seu IMC é : ${imc} você está Obeso`;
      }
  }

  const jose = new Pessoa('José', 70, 1.75);
  console.log(jose.calcularImc());
  console.log(jose.classificarImc());
  const danilo = new Pessoa('Danilo', 85, 1.91);
  console.log(danilo.calcularImc());
  console.log(danilo.classificarImc());