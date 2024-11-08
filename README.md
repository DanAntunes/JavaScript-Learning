# JavaScript-Learning

## Aprendizado em Java Script pela DIO

  ### Variaveis

    1. Como declarar variavies: let e const.
    
    Let é uma vaviarel que você pode alterar o valor dela depois.
    Const é uma variavel constante, sendo assim,  não é possivel alterar o seu valor.

  [Arquivo](./src/scripts/variaveis-condicionais/variaveis.js)

  ### Condicionais

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
### Funções

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

  ### Objetos literais

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
  