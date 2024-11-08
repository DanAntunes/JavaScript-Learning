
function quadrado (valor) {
  return valor * valor;
}

//console.log(quadrado(100));

function incremntarJuros(valor, percentualJuros) {
  const valorDeAcrecimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrecimo
}

console.log(incremntarJuros(250, 10));