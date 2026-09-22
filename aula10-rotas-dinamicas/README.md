# Aula 10
## 📚 Descrição
Nesta aula foi desenvolvido um exemplo de API utilizando NestJS, trabalhando com Controllers, Services, parâmetros de rota e tratamento de exceções.

O projeto simula um pequeno acervo de livros, permitindo buscar um livro pelo seu ID.

## 🚀 Tecnologias utilizadas
* Node.js
* NestJS
* TypeScript
* npm

## 📁 Estrutura do projeto
aula10-nestjs/
├── src/
│   ├── livros/
│   │   ├── livros.controller.ts
│   │   └── livros.service.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   └── main.ts
├── test/
├── package.json
├── tsconfig.json
└── nest-cli.json


## 📖 Funcionalidades desenvolvidas

### Controller de livros

Foi criado o `LivrosController`, utilizando:
* `@Controller('livros)`
* `@Get(':id')`
* `@Param()`
* `ParseIntPipe`

A rota permite buscar um livro pelo ID:
GET /livros/:id
Exemplo:
GET /livros/1

### Service de livros
Foi criado o LivrosService, contendo uma lista de livros:
1 - O Senhor dos Anéis — J.R.R Tolkien
2 - 1984 — George Orwell
3 - Dom Casmurro — Machado de Assis
4 - O Alienista — Machado de Assis
O método encontrarPorId() procura o livro pelo seu identificador.

### Tratamento de erro

Quando o ID informado não corresponde a nenhum livro do acervo, é utilizada a exceção:
NotFoundException
Assim, a API informa que o livro não foi localizado.

## 🔧 Instalação
Instale as dependências do projeto:
npm install

## ▶️ Executando o projeto
Para iniciar o servidor:
npm run start


Para executar em modo de desenvolvimento:
npm run start:dev


O servidor será iniciado em:
http://localhost:3000


## 🔎 Testando a API
Para buscar um livro pelo ID:
GET http://localhost:3000/livros/1

Exemplo de resposta:
{
  "id": 1,
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R Tolkien"
}

Caso seja informado um ID que não existe:


GET http://localhost:3000/livros/10
A aplicação retorna um erro `404 Not Found`, informando que o livro não foi localizado.

## 📚 Conceitos praticados

* `@Controller`
* `@Get`
* `@Param`
* `ParseIntPipe`
* `@Injectable`
* `NotFoundException`
* Services
* Controllers
* Parâmetros de rota
* Tratamento de exceções