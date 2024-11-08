

const pessoa = {
  nome: 'Danilo J Antunes',
  idade: 23,

  descrever: function (){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
};

/*
  acessando dinamicamente valores de um objeto, usando uma nova variavel:
  const atributo = 'idade';
  console.log(pessoa[atributo]);

  ou de forma direta 
  console.log(pessoa[nome]);
*/

//também é possivel reatribuir um valor
pessoa[nome] = 'teste'//dinamico
//é a mesma coisa!
pessoa.nome = 'teste';//acesso direto