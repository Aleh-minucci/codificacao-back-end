aula 08

🚀 Projeto NestJS
API desenvolvida com NestJS e TypeScript, seguindo uma arquitetura modular e preparada para facilitar manutenção, escalabilidade e evolução do projeto.

📋 Sobre o projeto
Este projeto utiliza o NestJS
 como framework principal para construção de uma aplicação server-side eficiente e escalável sobre Node.js.
A aplicação foi estruturada de forma modular, permitindo a separação das responsabilidades e facilitando o desenvolvimento, testes e manutenção do código.

🛠️ Tecnologias
Node.js
NestJS
TypeScript
npm
Jest — testes unitários
Supertest — testes end-to-end
Outras tecnologias utilizadas no projeto podem ser adicionadas a esta lista conforme a necessidade.

📁 Estrutura do projet
Uma estrutura comum deste projeto é:
src/
├── modules/
│   ├── ...
│
├── app.controller.ts
├── app.service.ts
├── app.module.ts
└── main.ts

Você pode verificar as versões instaladas com:
node --version
npm --version
git --version

📦 Instalaçã
Clone o repositório:
git clone <URL_DO_REPOSITORIO>
Entre no diretório do projeto
cd <NOME_DO_PROJETO>
Instale as dependências:
npm install
🔐 Variáveis de ambiente

Crie um arquivo .env na raiz do projeto:

PORT=3000

# Adicione aqui as demais variáveis utilizadas pela aplicação
# DATABASE_URL=
# JWT_SECRET=
# API_KEY=
Nunca versione informações sensíveis, como senhas, tokens ou chaves privadas.

▶️ Executando o projeto
Desenvolvimento
npm run start

Desenvolvimento com hot reload
npm run start:dev

Produção

Primeiro, compile o projeto:

npm run build


Depois execute:

npm run start:prod


Por padrão, a aplicação estará disponível em:

http://localhost:3000

🧪 Testes
Testes unitários
npm run test

Testes em modo watch
npm run test:watch

Testes end-to-end
npm run test:e2e

Cobertura de testes
npm run test:cov

🔌 API

Após iniciar a aplicação, os endpoints podem ser acessados através de:

http://localhost:3000


Caso o projeto possua documentação Swagger, ela pode estar disponível em:

http://localhost:3000/api


Ajuste a URL acima conforme a configuração real da aplicação.


📚 Aula 09 — API de Convidados com NestJS

Projeto desenvolvido durante a Aula 09, utilizando NestJS para criar uma API de gerenciamento de convidados.

Nesta aula foram trabalhados conceitos de:

Services

Controllers

Injeção de dependência

GET, POST, PATCH e DELETE

Parâmetros de rota

Body das requisições

NotFoundException

Atualização de dados

Remoção de registros

🚀 Funcionalidades

A API permite:

📋 Listar todos os convidados

🔎 Buscar um convidado pelo ID

➕ Criar um convidado

✏️ Atualizar a idade de um convidado

🗑️ Remover um convidado

⚠️ Retornar erro quando o convidado não é encontrado

👥 Dados iniciais

O projeto possui inicialmente os seguintes convidados:

ID	Nome	Idade
1	Alice	23
2	Enzo	19
3	Jamily	20
4	Alessandra	18
5	Hudson	21
📁 Estrutura
src/
├── convidados/
│   ├── convidados.controller.ts
│   ├── convidados.service.ts
│   └── dto/
│       └── criar-convidado.dto.ts

🔌 Endpoints
GET /convidados

Lista todos os convidados cadastrados.

Resposta:

[
  {
    "id": 1,
    "nome": "Alice",
    "idade": 23
  },
  {
    "id": 2,
    "nome": "Enzo",
    "idade": 19
  }
]

GET /convidados/:id

Busca um convidado específico pelo ID.

Exemplo:

GET /convidados/1


Caso o ID não exista, a API retorna:

{
  "statusCode": 404,
  "message": "Convidado com ID 10 não encontrado!"
}

➕ POST /convidados

Adiciona um novo convidado.

Exemplo de requisição:

{
  "nome": "Carlos",
  "idade": 25
}


Resposta:

{
  "mensagem": "Convidado Carlos adicionado com sucesso",
  "dados": {
    "nome": "Carlos",
    "idade": 25
  }
}

✏️ PATCH /convidados/:id

Atualiza a idade de um convidado.

Exemplo:

PATCH /convidados/2


Body:

{
  "idade": 22
}


A API utiliza o método atualizarIdade() no service para localizar o convidado e alterar sua idade.

🗑️ DELETE /convidados/:id

Remove um convidado pelo ID.

Exemplo:

DELETE /convidados/3


Quando a remoção é realizada com sucesso, a API retorna o status:

204 No Content


Caso o convidado não exista:

{
  "statusCode": 404,
  "message": "Convidado com ID 10 não encontrado!"
}

⚠️ Tratamento de erros

O projeto utiliza o NotFoundException do NestJS para informar quando um convidado não existe.

Exemplo:

throw new NotFoundException(
  `Convidado com ID ${id} não encontrado!`
);


Isso permite que a API retorne automaticamente um erro HTTP 404.

🛠️ Tecnologias utilizadas

Node.js

NestJS

TypeScript

REST API

HTTP

▶️ Como executar

Instale as dependências:

npm install


Execute o projeto em modo de desenvolvimento:

npm run start:dev


Depois, acesse a API pelo endereço configurado no projeto.

📌 Observação

Os convidados estão armazenados em um array dentro do ConvidadosService. Portanto, os dados são mantidos apenas enquanto a aplicação estiver em execução e não são persistidos em um banco de dados.

🎯 Objetivo da aula

O objetivo da Aula 09 foi praticar a construção de uma API utilizando NestJS, trabalhando a comunicação entre Controller e Service, além dos principais métodos HTTP utilizados em uma API REST.