# JavaScript-Learning Aprendizado em Java Script pela DIO

## Variaveis

    1. Como declarar variavies: let e const.
    
    Let é uma vaviarel que você pode alterar o valor dela depois.
    Const é uma variavel constante, sendo assim,  não é possivel alterar o seu valor.

  [Arquivo](./src/scripts/variaveis-condicionais/variaveis.js)

## Condicionais


    2.Condicionais: bolean(True ou false).
    
    % - oé o operador de módulo, também conhecido como operador de resto. Ele é usado para calcular o resto da divisão de dois números. 

    = - para atribuiçã, operador usado para atribuir um valor a uma variavel.

    == - operador de igualdade não estrita, compara dois valores para verificar se são iguais, mas não leva em consideração o tipo dos valores. Se os tipos forem diferentes, o JS tenta converter um ou ambos os valores para o mesmo tipo antes de comparar.

  ```javascript
  exemplo: 

  console.log(5 == '5'); // Saída: true (o número 5 é igual à string '5' após a conversão de tipo)
  console.log(null == undefined); // Saída: true
  ```

    === - Compara dois valores e verifica tanto o valor quanto o tipo. Se os tipos forem diferentes, ele não faz a conversão e retorna false.


    If - A declaração if é usada para testar uma condição. Se a condição for verdadeira (true), o bloco de código dentro do if será executado.

  ```Javascript
    sintaxe:
    if (condição) {
    // Código a ser executado se a condição for verdadeira
    }
  ```

    Else - é usada em estruturas de controle de fluxo para especificar um bloco de código que deve ser executado quando a condição de um if é falsa. Ela permite que você defina um comportamento alternativo para o caso em que a condição não é atendida.

  ```Javascript
    sintaxe:
    if (condição) {
    // Código a ser executado se a condição for verdadeira
    } else {
    // Código a ser executado se a condição for falsa
    }
  ```
    Else If - é utilizada em estruturas de controle de fluxo para testar múltiplas condições em sequência. Ela permite que você verifique uma nova condição se a condição anterior (if) for falsa. Isso é útil quando você tem mais de duas condições a serem avaliadas, tornando seu código mais legível e organizado.

  ```Javascript
   sintaxe:
   if (condição1) {
    // Código a ser executado se condição1 for verdadeira
    } else if (condição2) {
        // Código a ser executado se condição2 for verdadeira
    } else {
        // Código a ser executado se nenhuma das condições anteriores for verdadeira
    }
 ```

    ! - é usado como um operador de negação lógica (ou negação booleana). Quando você coloca ! antes de uma variável ou expressão, ele inverte seu valor de verdade (truthy ou falsy). ransforma um valor verdadeiro (true) em falso (false) e vice-versa.

  [Arquivo](./src/scripts/variaveis-condicionais/condicionais.js)

  ```JavaScript
    Math.pow(base, expoente)
//uma função usada para calcular a potência de um número. Ela recebe dois argumentos: o primeiro é a base, e o segundo é o expoente. A função retorna a base elevada ao expoente especificado.
  ```

## Funções

    3 - Funçoes.

    function - é um bloco de código reutilizável que executa uma tarefa específica. As funções permitem organizar o código, evitar a repetição de lógica e criar estruturas mais modulares e fáceis de manter. Elas são fundamentais na programação em JavaScript e estão presentes em praticamente todos os scripts.

   ```JavaScript
    function nomeDaFuncao(parametro1, parametro2) {
    // Código a ser executado
    }

    //invocar a função
    nomeDaFuncao();
  ```

    Uma Função Imediatamente Invocada ou IIFE (Immediately Invoked Function Expression) - é uma função em JavaScript que é executada assim que é definida. Ela é útil para encapsular variáveis e criar um escopo separado, evitando que as variáveis definidas dentro dela "vazem" para o escopo global.

  ```JavaScript
  (function() {
  // Código aqui
  })();
  ```
  ```JavaScript
  (function(nome) {
    console.log("Olá, " + nome);
  })("Alice");
  // Saída: Olá, Alice
  ```
[Arquivo](./src/scripts/funcoes/funcao.js)
## Objetos literais

  4 - Objetos

    objetos - são uma estrutura fundamental para armazenar e manipular dados de maneira organizada. Eles permitem armazenar pares de chave-valor e são amplamente usados para representar entidades e modelar dados complexos. Aqui estão alguns pontos importantes sobre objetos em JavaScript: 

    Em JavaScript, um objeto é definido usando chaves {} e contém uma coleção de pares de chave-valor.

    As chaves (também chamadas de propriedades) podem ser strings ou símbolos, e os valores podem ser de qualquer tipo: números, strings, funções, arrays ou até outros objetos.

  ``` JavaScript
    const pessoa = {
      nome: "Ana",
      idade: 25,
      saudacao: function() {
          return `Olá, meu nome é ${this.nome}!`;
      }
    };
  ```

    Métodos são funções que pertencem a objetos. Eles podem acessar outras propriedades do objeto usando this, que se refere ao próprio objeto.

  ``` JavaScript
  const car = {
      marca: "Toyota",
      modelo: "Corolla",
      descricao() {
          return `Este carro é um ${this.marca} ${this.modelo}.`;
      }
  };
  ```
  
## Classes

    class - Classes em JavaScript foram introduzidas no ES6 (ECMAScript 2015) como uma maneira mais organizada e conveniente de trabalhar com a criação de objetos e com o conceito de programação orientada a objetos (POO). Embora JavaScript seja baseado em protótipos, as classes oferecem uma sintaxe mais próxima da encontrada em linguagens como Java ou Python, tornando o código mais intuitivo.

    1. Definindo uma Classe

  - Uma classe em JavaScript é definida usando a palavra-chave class, seguida pelo nome da classe.

  - O construtor da classe é definido pelo método constructor, que é invocado quando uma nova instância da classe é criada.

  ``` JavaScript
  class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
  }
  ```

- Neste exemplo, Pessoa é uma classe com duas propriedades: nome e idade. Elas são inicializadas no construtor quando a classe é instanciada.

##  Instanciando Objetos

- Para criar uma nova instância de uma classe, utiliza-se a palavra-chave new:

``` JavaScript
const pessoa1 = new Pessoa("Ana", 25);
console.log(pessoa1.nome); // "Ana"
console.log(pessoa1.idade); // 25

```

- Cada instância criada com new é independente e tem suas próprias propriedades e métodos.

## Métodos em Classes

 - Métodos de uma classe são definidos diretamente dentro da classe, fora do constructor.

 - Esses métodos são compartilhados por todas as instâncias da classe e podem acessar as propriedades da instância usando this.

 ``` JavaScript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

const pessoa2 = new Pessoa("Carlos", 30);
console.log(pessoa2.saudacao()); // "Olá, meu nome é Carlos e eu tenho 30 anos."

```
    Math.round(): Arredonda para o inteiro mais próximo.
    Math.floor(): Arredonda para baixo.
    Math.ceil(): Arredonda para cima.

## Array 

  Array - é uma estrutura de dados usada para armazenar uma lista de valores. Os arrays podem armazenar diferentes tipos de dados, como números, strings, objetos, ou até mesmo outros arrays. Eles são especialmente úteis quando você precisa trabalhar com uma coleção de dados de forma ordenada.

  Existem algumas formas de criar um array:

  1. Usando colchetes (literal):

  ```JavaScript
  let frutas = ["maçã", "banana", "laranja"];
  ```
  2. Usando o construtor Array:
  ```JavaScript
  let numeros = new Array(1, 2, 3, 4);
  ```
  3. Array vazio:
  ```JavaScript
  let vazio = [];
  ```
    Os elementos de um array podem ser acessados e modificados através de seu índice. Os índices em arrays começam em 0.

  ```JavaScript
  let cores = ["vermelho", "azul", "verde"];
  console.log(cores[0]); // Saída: vermelho

  cores[1] = "amarelo"; // Modificando o segundo elemento
  console.log(cores[1]); // Saída: amarelo
  ```
   - Acessando e Modificando Elementos

   Os elementos de um array podem ser acessados e modificados através de seu índice. Os índices em arrays começam em 0.

   ```JavaScript
   let cores = ["vermelho", "azul", "verde"];
   console.log(cores[0]); // Saída: vermelho

   cores[1] = "amarelo"; // Modificando o segundo elemento
   console.log(cores[1]); // Saída: amarelo
  ```

  - Propriedades e Métodos de Arrays
   
   1. Propriedade length: Retorna o número de elementos no array.

  ```JavaScript
  let numeros = [10, 20, 30];
  console.log(numeros.length); // Saída: 3
  ```
  2. Método push(): Adiciona um ou mais elementos ao final do array.

  ```JavaScript
  let frutas = ["maçã", "banana"];
  rutas.push("laranja");
  console.log(frutas); // Saída: ["maçã", "banana", "laranja"]
  ```
  3. Método pop(): Remove o último elemento do array.
  ```JavaScript
  let frutas = ["maçã", "banana", "laranja"];
  let removida = frutas.pop();
  console.log(frutas); // Saída: ["maçã", "banana"]
  console.log(removida); // Saída: laranja

  ```

  4. Método shift(): Remove o primeiro elemento do array.
  ```JavaScript
  let frutas = ["maçã", "banana", "laranja"];
  let removida = frutas.shift();
  console.log(frutas); // Saída: ["banana", "laranja"]
  console.log(removida); // Saída: maçã

  ```

  5.Método unshift(): Adiciona um ou mais elementos ao início do array.
  ```JavaScript
  let frutas = ["banana", "laranja"];
  frutas.unshift("maçã");
  console.log(frutas); // Saída: ["maçã", "banana", "laranja"]

  ```

  6. Método concat(): Junta dois ou mais arrays, retornando um novo array.
  ```JavaScript
  let frutas1 = ["maçã", "banana"];
  let frutas2 = ["laranja", "uva"];
  let todasAsFrutas = frutas1.concat(frutas2);
  console.log(todasAsFrutas); // Saída: ["maçã", "banana", "laranja", "uva"]

  ```
  7.Método slice(): Retorna uma cópia rasa de uma parte do array em um novo array.
  ```JavaScript
  let frutas = ["maçã", "banana", "laranja", "uva"];
  let frutasSelecionadas = frutas.slice(1, 3); // Extrai elementos do índice 1 até o 3 (não inclusivo)
  console.log(frutasSelecionadas); // Saída: ["banana", "laranja"]

  ```
  8. Método splice(): Modifica o conteúdo de um array removendo, substituindo ou adicionando elementos.
  ```JavaScript
  let frutas = ["maçã", "banana", "laranja"];
  frutas.splice(1, 1, "morango", "kiwi"); // Remove 1 elemento no índice 1 e adiciona "morango" e "kiwi"
  console.log(frutas); // Saída: ["maçã", "morango", "kiwi", "laranja"]

  ```
  9.Método forEach(): Executa uma função para cada elemento do array.
  ```JavaScript
  let numeros = [1, 2, 3, 4];
  numeros.forEach(function(numero) {
      console.log(numero * 2); // Multiplica cada número por 2
  });
  // Saída: 2, 4, 6, 8

  ```
  10. Método map(): Cria um novo array com os resultados da aplicação de uma função a cada elemento.
  ```JavaScript
  let numeros = [1, 2, 3];
  let quadrados = numeros.map(function(numero) {
      return numero * numero;
  });
  console.log(quadrados); // Saída: [1, 4, 9]

  ```

  ## FOR

  O for é uma estrutura de controle em JavaScript (e outras linguagens) usada para executar um bloco de código repetidamente até que uma condição especificada seja atendida. Ele é amplamente utilizado para percorrer arrays, realizar operações repetitivas e criar loops controlados.

  A estrutura básica do for é:

  ```JavaScript
  for (inicialização; condição; incremento) {
    // Código a ser executado em cada iteração
  }

  ```

- Inicialização: Define uma variável para começar o loop (geralmente um contador). Esse passo é executado apenas uma vez, antes da primeira execução do loop.

- condição: Define a condição que, enquanto for verdadeira, manterá o loop em execução. Quando essa condição se torna falsa, o loop é encerrado.

- incremento: Define como o valor da variável inicial será alterado a cada iteração do loop (por exemplo, incremento ou decremento do contador).

Exemplo básico de for
```JavaScript
let frutas = ["maçã", "banana", "laranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// Saída: maçã, banana, laranja
```

Loop for com decremento

```JavaScript
let numeros = [10, 20, 30, 40, 50];

for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
}
// Saída: 50, 40, 30, 20, 10
```