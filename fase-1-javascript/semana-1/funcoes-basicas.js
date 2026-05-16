function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Nao e possivel dividir por zero";
  }

  return a / b;
}

function ehPar(numero) {
  return numero % 2 === 0;
}

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function converterCelsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function maiorNumero(a, b) {
  if (a > b) {
    return a;
  }

  return b;
}

function menorNumero(a, b) {
  if (a < b) {
    return a;
  }

  return b;
}

console.log("somar:", somar(2, 3));
console.log("subtrair:", subtrair(10, 4));
console.log("multiplicar:", multiplicar(6, 7));
console.log("dividir:", dividir(10, 2));
console.log("dividir por zero:", dividir(10, 0));
console.log("ehPar:", ehPar(8));
console.log("ehMaiorDeIdade:", ehMaiorDeIdade(21));
console.log("calcularIMC:", calcularIMC(70, 1.75).toFixed(2));
console.log(
  "converterCelsiusParaFahrenheit:",
  converterCelsiusParaFahrenheit(25)
);
console.log("maiorNumero:", maiorNumero(9, 4));
console.log("menorNumero:", menorNumero(9, 4));
