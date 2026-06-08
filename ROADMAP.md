# ROADMAP

Ultima atualizacao: 2026-06-07

## Objetivo

- Curto prazo: conseguir o primeiro emprego como desenvolvedor na Espanha o mais rapido possivel.
- Medio prazo: migrar para vagas com melhor remuneracao, preferencialmente como frontend forte ou full stack TypeScript.
- Regra central: priorizar empregabilidade real sobre curiosidade tecnica, moda ou excesso de teoria.

## Decisao de stack

- Trilho principal agora: JavaScript -> TypeScript -> React -> Node.js -> PostgreSQL.
- LeetCode no comeco: leve, em JavaScript, 2 a 3 problemas faceis por semana.
- Python e LeetCode serio: ficam para depois do primeiro emprego ou para a fase de upgrade salarial.
- Portfolio e projetos deployados valem mais agora do que certificacoes.
- React ganha prioridade porque, na amostra atual que revisei do mercado espanhol, ele aparece repetidamente junto de TypeScript, Node.js e Next.js.

## Sinais de mercado que guiaram este plano

- No relatorio InfoJobs + Esade sobre o mercado laboral em Espanha 2025, backend, frontend e full stack aparecem entre os perfis com mais vacantes em Informatica e Telecomunicaciones.
- Nas buscas recentes de vagas na Espanha, apareceram repetidamente anuncios com React, React + TypeScript, React/Next.js e Node.js/TypeScript, inclusive em Madrid, Barcelona e remoto dentro da Espanha.
- Isso reforca uma estrategia de entrada com foco em web moderna JavaScript/TypeScript, em vez de dispersar cedo para muitas linguagens.

## Ritmo recomendado

- Ritmo agressivo: 25 a 30 horas por semana -> chance realista de comecar candidaturas mais fortes em 4 a 5 meses.
- Ritmo sustentavel: 12 a 15 horas por semana -> chance realista de comecar candidaturas mais fortes em 6 a 8 meses.
- Em qualquer ritmo, a ordem das fases deve mudar pouco. O que muda e a velocidade.

## Onde voce esta hoje

- Repositorio: `/Users/guilhermequadros/Documents/dev-roadmap`
- Setup concluido:
- Node.js LTS
- Git
- GitHub via SSH
- Repositorio remoto criado e conectado

- Progresso concluido em `fase-1-javascript/semana-1`:
- [x] `funcoes-basicas.js`
- [x] `condicionais.js`
- [x] `arrays-basicos.js`
- [x] `loops-basicos.js`
- [x] `strings-basicas.js`
- [x] `objetos-basicos.js`
- [x] `metodos-de-array.js`
- [x] `desafios-simples.js`

- Em andamento:
- [ ] `semana-2` - JavaScript no browser

- Progresso atual em `fase-1-javascript/semana-2`:
- [x] `dom-basico.html` + `dom-basico.js`
- [x] `input-e-texto.html` + `input-e-texto.js`
- [x] `classlist.html` + `classlist.js`
- [x] `lista-simples.html` + `lista-simples.js`
- [x] `localstorage.html` + `localstorage.js`
- [x] `mini-projeto-tarefas.html` + `mini-projeto-tarefas.js`
- [ ] refinamento: remover tarefa e manter `localStorage` consistente

- Proximos arquivos para fechar a semana 1:
- [x] `desafios-simples.js`

## Como vamos usar este arquivo

- Antes de decidir o proximo passo, consultar este arquivo.
- Quando uma fase ou semana terminar, atualizar o snapshot acima.
- Antes de criar um novo exercicio, atualizar este plano e confirmar se o proximo passo ainda faz sentido dentro da fase atual.
- Sempre manter claro:
- o que ja foi concluido
- o que esta em andamento
- qual e o proximo entregavel

## Fase 1 - JavaScript de base

Janela sugerida: semanas 1 a 4

### Meta da fase

- Escrever JavaScript com seguranca sem depender de copiar codigo sem entender.
- Conseguir resolver exercicios pequenos de logica, arrays, loops, strings e objetos.
- Chegar pronto para DOM, TypeScript e React sem buracos grandes na base.

### Semana 1 - Fundamentos da linguagem

- `funcoes-basicas.js`
- `condicionais.js`
- `arrays-basicos.js`
- `loops-basicos.js`
- `strings-basicas.js`
- `objetos-basicos.js`
- `metodos-de-array.js`
- `desafios-simples.js`

### Semana 2 - JavaScript no browser

- DOM basico
- selecionar elementos
- eventos
- formularios
- validacao simples
- `classList`
- criacao dinamica de elementos
- listas no DOM
- `localStorage`

### Semana 3 - JavaScript assincrono

- `fetch`
- JSON
- `async/await`
- `try/catch`
- modulos
- `npm`
- variaveis de ambiente em nivel basico

### Semana 4 - Mini projetos em JavaScript puro

- mini projeto 1: app com DOM e `localStorage`
- mini projeto 2: app consumindo API publica
- publicar ao menos 1 projeto

### Criterio de saida da Fase 1

- voce entende bem `if`, loops, arrays, objetos e strings
- voce consegue ler e escrever funcoes pequenas sem travar
- voce consegue manipular DOM e consumir uma API simples
- voce tem pelo menos 2 mini projetos pequenos publicados

## Fase 2 - Web fundamentals + TypeScript

Janela sugerida: semanas 5 a 7

### Meta da fase

- Completar o que falta para web real: HTML, CSS, responsividade, browser e TypeScript.
- Sair do JavaScript puro para um JavaScript tipado, mas sem perder fluidez.

### Conteudo

- HTML semantico
- formularios HTML
- CSS base
- Flexbox
- Grid
- responsividade
- acessibilidade basica
- DevTools do navegador
- HTTP em nivel pratico
- TypeScript:
- tipos primitivos
- arrays e objetos
- funcoes tipadas
- interfaces
- unions
- tipos opcionais
- `type` vs `interface` em nivel basico

### Entregaveis

- 1 pagina responsiva em HTML/CSS puro
- 1 app pequeno em TypeScript sem framework
- 1 README melhor escrito explicando projeto, setup e aprendizado

### Criterio de saida da Fase 2

- voce consegue montar uma pagina responsiva sem tutorial completo
- voce entende por que TypeScript ajuda
- voce ja nao sente estranheza ao anotar tipos simples

## Fase 3 - React para empregabilidade

Janela sugerida: semanas 8 a 12

### Meta da fase

- Ficar apto para vagas junior frontend ou estagio/trainee com React.
- Aprender o minimo que o mercado espera de um frontend JS/TS moderno.

### Conteudo

- Vite
- componentes
- props
- estado
- eventos
- renderizacao condicional
- listas
- formularios controlados
- `useState`
- `useEffect`
- consumo de API
- tratamento de loading e error
- React Router
- organizacao basica de pastas
- CSS Modules ou Tailwind depois da base de CSS estar firme

### Projetos alvo

- projeto 1: app React + TypeScript consumindo API publica
- projeto 2: dashboard simples com filtros, busca, loading e error states

### Quando comecar a aplicar

- comecar observacao ativa de vagas desde aqui
- comecar candidaturas leves quando houver:
- 1 projeto React + TypeScript publicado
- GitHub organizado
- README decente

### Criterio de saida da Fase 3

- voce consegue montar app React pequeno sem depender do editor sugerir tudo
- voce consegue integrar API externa
- voce tem pelo menos 1 app React + TS publicado

## Fase 4 - Backend com Node.js + APIs + SQL

Janela sugerida: semanas 13 a 16

### Meta da fase

- Ficar apto para vagas junior full stack JS/TS.
- Sair de frontend puro e ganhar repertorio de API, banco de dados e deploy.

### Conteudo

- Node.js
- Express
- rotas
- controllers
- middleware
- REST
- status codes
- validacao
- `.env`
- PostgreSQL
- SQL basico
- modelagem simples
- joins em nivel inicial
- CRUD completo
- autenticacao simples
- testes basicos de API

### Entregaveis

- 1 API CRUD com Node.js
- 1 banco PostgreSQL ligado ao projeto
- 1 frontend simples consumindo essa API

### Criterio de saida da Fase 4

- voce consegue criar uma API REST pequena do zero
- voce entende como salvar, listar, editar e remover dados
- voce consegue conectar frontend e backend

## Fase 5 - Projeto full stack de portfolio

Janela sugerida: semanas 17 a 20

### Meta da fase

- Construir 1 projeto que pareca junior employable, nao so exercicio isolado.
- Ter algo que faca sentido mostrar em entrevista e no GitHub.

### Projeto principal recomendado

- Job Application Tracker

### Por que este projeto

- conversa diretamente com seu objetivo de carreira
- tem CRUD real
- filtros
- autenticacao opcional
- estado no frontend
- API no backend
- banco de dados
- README forte

### Stack recomendada do projeto principal

- Frontend: React + TypeScript
- Backend: Node.js + Express
- Banco: PostgreSQL
- Deploy: Vercel no frontend + Render/Fly/railway-like service no backend + Postgres hospedado

### Funcionalidades minimas

- cadastro de candidaturas
- status da vaga
- empresa
- cidade
- link da vaga
- notas
- filtros por status
- busca
- formulario validado

### Criterio de saida da Fase 5

- projeto online
- README claro
- screenshots
- instrucoes de instalacao
- commits coerentes
- repo apresentavel

## Fase 6 - Sprint de candidatura para Espanha

Comeca leve na Fase 3 e fica intensa a partir da Fase 5

### Meta da fase

- transformar estudo em entrevistas
- adaptar portfolio, GitHub e CV ao mercado espanhol

### Canais prioritarios

- LinkedIn
- InfoJobs
- GetManfred
- Indeed
- Wellfound para startups quando fizer sentido

### Tipos de vaga alvo

- Junior Frontend Developer
- Junior Full Stack Developer
- Web Developer
- Trainee Developer
- Junior React Developer
- Junior Node.js Developer

### Regra de aplicacao

- inicio leve: 5 a 10 candidaturas de qualidade por semana
- fase intensa: 15 a 25 candidaturas por semana
- sempre adaptar titulo, resumo e projetos ao tipo de vaga

### Materiais obrigatorios

- CV em espanhol
- CV em ingles
- LinkedIn atualizado
- GitHub com repositorios pinados
- 2 a 3 projetos que abrem e funcionam

### Preparacao de entrevista nesta fase

- JavaScript base
- React base
- HTTP e API basica
- SQL basico
- Git
- 2 ou 3 problemas simples de logica por semana em JavaScript

## Fase 7 - Upgrade para melhor remuneracao

Janela sugerida: depois do primeiro emprego ou depois de uma base full stack forte

### Meta da fase

- sair do perfil "junior que sabe exercicio"
- caminhar para vagas melhores, inclusive remotas ou internacionais

### Conteudo prioritario

- TypeScript mais forte
- Next.js
- NestJS
- testes no frontend e backend
- React Testing Library
- Playwright
- Docker basico
- GitHub Actions
- arquitetura de frontend em nivel inicial
- modelagem de banco melhor
- observabilidade basica
- cloud em nivel pratico

### Entrevistas e algoritmos

- LeetCode deixa de ser leve e passa a ser estruturado
- continuar em JavaScript no inicio
- migrar parte do treino para Python se fizer sentido para vagas de maior nivel
- iniciar system design basico depois da experiencia com projeto real

### Sinais de que chegou a hora desta fase

- voce ja tem projeto full stack de verdade
- voce ja consegue entrevistas junior
- ou voce ja entrou no primeiro emprego e quer acelerar o proximo salto

## O que NAO priorizar agora

- aprender 3 linguagens ao mesmo tempo
- estudar Python antes de consolidar JavaScript/TypeScript
- mergulhar cedo em Docker/Kubernetes/DevOps profundo
- passar semanas ajustando editor, IA local ou ferramentas
- tentar cobrir toda a `roadmap.sh` como checklist obrigatoria

## Fechamento pratico da semana 1

A semana 1 passa a ser considerada fechada quando estes tres arquivos estiverem concluidos, rodando e commitados:

- `objetos-basicos.js`
- `metodos-de-array.js`
- `desafios-simples.js`

Depois disso, seguimos para:

- semana 2 de JavaScript no browser

## Como este plano sera atualizado daqui para frente

- Ao concluir um arquivo relevante, atualizar a secao "Onde voce esta hoje".
- Ao concluir uma fase, marcar entregaveis e definir o proximo bloco.
- Se o mercado mudar ou seu objetivo mudar, revisar primeiro "Decisao de stack" e "Tipos de vaga alvo".

## Fontes consultadas para montar este plano

- InfoJobs + Esade, Estado del mercado laboral en Espana 2025:
  [PDF](https://backoffice.lepetitjournal.com/sites/default/files/inline-files/Informe_Mercado_Laboral_InfoJobs_Esade_2025_Digital.pdf)
- Amostra recente de vagas React na Espanha:
  [LinkedIn](https://es.linkedin.com/jobs/frontend-developer-%28react%29-empleos)
- Amostra recente de vagas Node.js na Espanha:
  [LinkedIn](https://es.linkedin.com/jobs/node-js-empleos)
- Amostra recente de vagas Node.js junior na Espanha:
  [LinkedIn](https://es.linkedin.com/jobs/desarrollador-nodejs-junior-empleos)
- Roadmap de referencia, usado como mapa e nao como checklist:
  [roadmap.sh](https://roadmap.sh/)
- Guia de JavaScript:
  [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide.)
- Node.js oficial:
  [Node Learn](https://nodejs.org/learn)
- TypeScript oficial:
  [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- React oficial:
  [React Learn](https://react.dev/learn/installation)
- PostgreSQL oficial:
  [PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html)
