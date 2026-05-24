function retornarNome(pessoa) {
  return pessoa.nome;
}

function retornarIdade(pessoa) {
  return pessoa.idade;
}

function adicionarProfissao(pessoa, profissao) {
  pessoa.profissao = profissao;
  return pessoa;
}

function atualizarIdade(pessoa, novaIdade) {
  pessoa.idade = novaIdade;
  return pessoa;
}

function verificarSeTemPropriedade(objeto, propriedade) {
  return propriedade in objeto;
}

function retornarChaves(objeto) {
  return Object.keys(objeto);
}

function retornarValores(objeto) {
  return Object.values(objeto);
}

function retornarQuantidadeDePropriedades(objeto) {
  return Object.keys(objeto).length;
}

const pessoa = {
  nome: "Guilherme",
  idade: 29,
};

console.log("nome:", retornarNome(pessoa));
console.log("idade:", retornarIdade(pessoa));
console.log(
  "adicionar profissao:",
  adicionarProfissao({ nome: "Ana" }, "dev")
);
console.log(
  "atualizar idade:",
  atualizarIdade({ nome: "Ana", idade: 20 }, 21)
);
console.log(
  "tem propriedade:",
  verificarSeTemPropriedade({ nome: "Ana", idade: 20 }, "idade")
);
console.log("chaves:", retornarChaves({ nome: "Ana", idade: 20 }));
console.log("valores:", retornarValores({ nome: "Ana", idade: 20 }));
console.log(
  "quantidade de propriedades:",
  retornarQuantidadeDePropriedades({ nome: "Ana", idade: 20 })
);
