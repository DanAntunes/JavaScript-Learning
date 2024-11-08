function escreverMeuNome(name){
  return `meu nome é ${name}`
}

function verificadorIdade(idade){
  if ( idade >= 18){
    console.log(`${escreverMeuNome('Danilo')} e sou maior de idade`);
  } else {
    console.log(`${escreverMeuNome('Danilo')} e sou menor de idade`);
  }
}

verificadorIdade(23);