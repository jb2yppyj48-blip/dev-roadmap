function dobrarNumeros(array) {
  return array.map((numero)=>{
    return numero*2;
    });
}

function filtrarNumerosPares(array) {
  return array.filter((numero) => numero % 2 === 0);
}

function somarTodosOsNumeros(array) {
  return array.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0)
}

function encontrarPrimeiroNumeroMaiorQueDez(array) {
  return array.find((numero) => numero > 10);
}

function verificarSeTodosSaoPositivos(array) {
  return array.every((numero) => numero > 0);
}

function verificarSeExisteNumeroNegativo(array) {
  return array.some((numero) => numero < 0);
}

function transformarEmStrings(array) {
  return array.map((numero) => String(numero));
}

function ordenarNumeros(array) {
  return array.sort((a, b) => a - b);
}

console.log("dobrar numeros:", dobrarNumeros([1, 2, 3]));
console.log("filtrar pares:", filtrarNumerosPares([1, 2, 3, 4, 5, 6]));
console.log("somar todos:", somarTodosOsNumeros([1, 2, 3, 4]));
console.log(
  "primeiro maior que dez:",
  encontrarPrimeiroNumeroMaiorQueDez([4, 8, 11, 15])
);
console.log(
  "todos sao positivos:",
  verificarSeTodosSaoPositivos([1, 2, 3, 4])
);
console.log(
  "existe numero negativo:",
  verificarSeExisteNumeroNegativo([1, 2, -3, 4])
);
console.log("transformar em strings:", transformarEmStrings([1, 2, 3]));
console.log("ordenar numeros:", ordenarNumeros([3, 1, 4, 2]));
