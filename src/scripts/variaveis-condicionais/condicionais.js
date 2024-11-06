const numero = 15;
const iSnumeroDiviseivelPor5 = (numero % 5) === 0;
//Por convenção, a varaivel boleana tem que começar com "is"
if (numero === 0) {
  console.log('O número é inválido');
}else if(isNumeroDiviseivelPor5){
  console.log('Sim')
}else{
  console.log('Não')
}

/*
if (!numeroPar) {
  console.log('Impar')
}*/