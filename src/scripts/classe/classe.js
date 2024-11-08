class Clube {
  nome;
  anoDeFundacao;

  descrever(){
    return `O ${this.nome} foi fundado em ${this.anoDeFundacao}`;
  }
}

const barcelona = new Clube();
barcelona.nome = 'Barcelona';
barcelona.anoDeFundacao = 1899;
console.log(barcelona.descrever());

const ajax = new Clube();
ajax.nome = 'Ajax';
ajax.anoDeFundacao = 1900;
console.log(ajax.descrever());

/*
Anotação : Como o descrever está usando return, na chamada do metodo
para ser impresso o resultado, eu tenho que dar console.log.
Se caso eu tivesse usado console.log no metodo, eu poderia chamar o metodo
apenas usando (nome do objeto).descrever().
*/