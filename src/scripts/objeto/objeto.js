

const pessoa = {
  nome: 'Danilo J Antunes',
  idade: 23
};
// Adicionando nova propriedade
pessoa.nascionalidade = "Brasileiro";
//Um objeto pode ser editado fora do escopo.
pessoa.idade = 1.91;
//Um atributo pode ser deletado do objeto.
// biome-ignore lint/performance/noDelete: <explanation>
delete pessoa.nome;

console.log(pessoa);