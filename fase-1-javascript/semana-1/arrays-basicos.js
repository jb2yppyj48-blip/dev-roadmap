function retornarPrimeiroElemento(array) {
  return array[0];
}

function retornarUltimoElemento(array) {
  return array[array.length - 1];
}

function contarElementos(array) {
  return array.length;
}

function adicionarElementoNoFinal(array, elemento) {
  array.push(elemento);
  return array;
}

function removerUltimoElemento(array) {
  array.pop();
  return array;
}

function verificarSeInclui(array, elemento) {
  return array.includes(elemento);
}

function somarElementos(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i += 1) {
    soma += array[i];
  }
  return soma;
}

function retornarMaiorNumero(array) {
  let maior = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}

console.log("primeiro:", retornarPrimeiroElemento([10, 20, 30]));
console.log("ultimo:", retornarUltimoElemento([10, 20, 30]));
console.log("quantidade:", contarElementos([10, 20, 30]));
console.log(
  "adicionar no final:",
  adicionarElementoNoFinal([10, 20], 30)
);
console.log("remover ultimo:", removerUltimoElemento([10, 20, 30]));
console.log("inclui:", verificarSeInclui([10, 20, 30], 20));
console.log("somar elementos:", somarElementos([10, 20, 30]));
console.log("maior numero:", retornarMaiorNumero([10, 20, 30]));
