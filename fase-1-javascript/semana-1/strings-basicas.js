function retornarTamanhoDaString(texto) {
  return texto.length;
}

function converterParaMaiusculas(texto) {
  return texto.toUpperCase();
}

function converterParaMinusculas(texto) {
  return texto.toLowerCase();
}

function retornarPrimeiraLetra(texto) {
  return texto[0];
}

function retornarUltimaLetra(texto) {
  return texto[texto.length-1];
}

function verificarSeContemPalavra(texto, palavra) {
  return texto.includes(palavra);
}

function substituirPalavra(texto, palavraAntiga, palavraNova) {
  return texto.replace(palavraAntiga, palavraNova);
}

function inverterString(texto) {
  let resultado = [];
  for (let i = texto.length -1; i >= 0; i--){
    resultado.push(texto[i])
  }
  return resultado.join("");
}

console.log("tamanho:", retornarTamanhoDaString("javascript"));
console.log("maiusculas:", converterParaMaiusculas("javascript"));
console.log("minusculas:", converterParaMinusculas("JAVASCRIPT"));
console.log("primeira letra:", retornarPrimeiraLetra("javascript"));
console.log("ultima letra:", retornarUltimaLetra("javascript"));
console.log(
  "contem palavra:",
  verificarSeContemPalavra("eu gosto de javascript", "javascript")
);
console.log(
  "substituir palavra:",
  substituirPalavra("eu gosto de javascript", "javascript", "typescript")
);
console.log("inverter string:", inverterString("javascript"));
