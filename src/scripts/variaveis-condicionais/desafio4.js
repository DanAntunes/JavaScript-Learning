/*
 O IMC - Indice de Massa Corporal é um critério da Organização
 Mundial da Saúde para dar uma indicação sobre a condição de peso
 de uma pessoa adulta.

 Formula do IMC:
 IMC = peso / (altura * altura)

 Elabore um algoritimo que dado o peso e a altura de um adulto mostre 
 sua condição de acordo com a tabela abaixo.

 IMC em adultos Condição:
 - Abaixo de 18.5 Abaixo do peso;
 - Entre 18.5 e 25 Peso normal;
 - Entre 25 e 30 Acima do peso;
 - Entre 30 e 40 Obeso;
 - Acima de 40 Obesidade Grave;

*/

const peso = 56;
const altura = 1.60;  
// biome-ignore lint/style/useExponentiationOperator: <explanation>
const imc = peso / Math.pow(altura, 2);

if(imc < 18.5 ){
  console.log(`Seu IMC é : ${imc.toFixed(2)} você está Abaixo do peso.`);
} else if(imc >= 18.5 && imc <= 25){
  console.log(`Seu IMC é : ${imc.toFixed(2)} Peso normal.`)
} else if (imc >= 25 && imc <= 30){
  console.log(`Seu IMC é : ${imc.toFixed(2)} você está Acima do peso`)
} else if (imc >= 30 && imc <= 40){
  console.log(`Seu IMC é : ${imc.toFixed(2)} você está Obeso`)
} else {
  console.log(`Seu IMC é : ${imc.toFixed(2)} você está Obeso`)
}

//Math.pow(altura,2);