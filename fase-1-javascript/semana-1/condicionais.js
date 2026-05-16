function verificarSeEhPositivo(numero) {
  if (numero > 0) {
    return true;
  }
  return false;
}

function verificarSeEhNegativo(numero) {
  return numero <0 ;
}

function verificarSeEhZero(numero) {
  return numero === 0;
}

function verificarAprovacao(nota) {
  return nota >= 7;
}

function podeDirigir(idade) {
  return idade >= 18;
}

function maiorDeDoisNumeros(a, b) {
  return a > b ? a : b;
}

function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "par" : "impar";
}

function classificarIdade(idade) {
  return idade < 12 ? "criança" : idade < 18 ? "adolescente" : "adulto";
}

console.log("positivo:", verificarSeEhPositivo(5));
console.log("negativo:", verificarSeEhNegativo(-3));
console.log("zero:", verificarSeEhZero(0));
console.log("aprovacao:", verificarAprovacao(7));
console.log("podeDirigir:", podeDirigir(18));
console.log("maiorDeDoisNumeros:", maiorDeDoisNumeros(8, 3));
console.log("parOuImpar:", verificarParOuImpar(9));
console.log("classificarIdade:", classificarIdade(16));
