function contarDeZeroAte(numero) {
  let resultado = []
  for (let i = 0; i <= numero; i++) {
    resultado.push(i)
  }
  return resultado
}

function mostrarNumerosDoArray(array) {
  let resultado = []
  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i])
  }
  return resultado
}

function somarDeZeroAte(numero) {
  let resultado = 0
  for (let i = 0; i <= numero; i++) {
    resultado += i
  }
  return resultado
}

function contarParesAte(numero) {
  let resultado = []
  for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
      resultado.push(i)
    }
  }
  return resultado
}

function encontrarNumero(array, numero) {
  for (let i = 0; i < array.length; i++){
    if (array[i]===numero){
      return true;
    }
  }
  return false;
}

function repetirPalavra(palavra, vezes) {
  let resultado = []
  for (let i = 0; i < vezes; i++){
    resultado.push(palavra)
  }
  return resultado
}

function inverterArray(array) {
  let resultado = []
  for (let i = array.length -1; i >= 0; i--){
    resultado.push(array[i])
  }
  return resultado
}

console.log("contarDeZeroAte:", contarDeZeroAte(5));
console.log("mostrarNumerosDoArray:", mostrarNumerosDoArray([10, 20, 30]));
console.log("somarDeZeroAte:", somarDeZeroAte(5));
console.log("contarParesAte:", contarParesAte(10));
console.log("encontrarNumero:", encontrarNumero([10, 20, 30], 20));
console.log("repetirPalavra:", repetirPalavra("oi", 3));
console.log("inverterArray:", inverterArray([10, 20, 30]));
