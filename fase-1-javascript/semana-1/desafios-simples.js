function contarVogais(texto) {
  let qtdVogais = 0;

  for (let i = 0; i < texto.length; i += 1) {
    if (texto[i] === "a" || texto[i] === "e" || texto[i] === "i" || texto[i] === "o"|| texto[i] === "u"){
      qtdVogais = qtdVogais + 1;
}
}
return qtdVogais;
}

function inverterPalavras(texto) {
  return texto.split(" ").reverse().join(" ");
}

function encontrarMaiorNumero(array) {
  let maior = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i]> maior){
      maior = array [i];
}
}
return maior;
}

function somarNumerosPares(array) {
  let somapares = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0){
      somapares = somapares + array [i];
}
}
return somapares;
}

function filtrarPalavrasMaioresQue(array, tamanhoMinimo) {
  return array.filter((palavra) => palavra.length > tamanhoMinimo);
}

function verificarPalindromo(texto) {
  let textoInvertido = texto.split("").reverse().join("");
  return texto === textoInvertido;
}

function agruparPorParOuImpar(array) {
  let resultado = {
   par: [],
   impar: []
}
for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0){
      resultado.par.push(array[i]);
    } else{
      resultado.impar.push(array[i]);
      
}
}
return resultado;
}

function calcularMediaDasIdades(pessoas) {
  let soma = 0

for (let i = 0; i < pessoas.length; i += 1) {
      soma = soma + pessoas[i].idade;
}
return soma/pessoas.length;
}

console.log("contar vogais:", contarVogais("javascript"));
console.log("inverter palavras:", inverterPalavras("ola mundo"));
console.log("encontrar maior numero:", encontrarMaiorNumero([4, 9, 2, 15, 7]));
console.log("somar numeros pares:", somarNumerosPares([1, 2, 3, 4, 5, 6]));
console.log(
  "filtrar palavras maiores que:",
  filtrarPalavrasMaioresQue(["ola", "javascript", "dev", "frontend"], 4)
);
console.log("verificar palindromo:", verificarPalindromo("arara"));
console.log("agrupar por par ou impar:", agruparPorParOuImpar([1, 2, 3, 4, 5, 6]));
console.log(
  "calcular media das idades:",
  calcularMediaDasIdades([
    { nome: "Ana", idade: 20 },
    { nome: "Bruno", idade: 30 },
    { nome: "Carla", idade: 40 },
  ])
);
