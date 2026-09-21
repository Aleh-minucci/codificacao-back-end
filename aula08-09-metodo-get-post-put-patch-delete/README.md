aula 08
🚀 Projeto NestJS
API desenvolvida com NestJS e TypeScript, seguindo uma arquitetura modular e preparada para facilitar manutenção, escalabilidade e evolução do projeto.

🛠️ Tecnologias
Node.js
NestJS
TypeScript
npm

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
npm run start:dev

Por padrão, a aplicação estará disponível em:
http://localhost:3000

🔌 API
Após iniciar a aplicação, os endpoints podem ser acessados através de:
http://localhost:3000


📚 Aula 09 — API de Convidados com NestJS
Nesta aula foram trabalhados conceitos de:
Services
Controllers
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

➕ POST /convidados
Adiciona um novo convidado.

✏️ PATCH /convidados/:id

Atualiza a idade de um convidado.
A API utiliza o método atualizarIdade() no service para localizar o convidado e alterar sua idade.

🛠️ Tecnologias utilizadas
Node.js
NestJS
TypeScript
REST API
HTTP

# TESTE NO INSOMNIA
Testes de API REST com Insomnia
 Os testes foram realizados com os métodos HTTP GET, POST, PATCH e DELETE, utilizando a rota /convidados.

Tecnologias utilizadas
• API local
• Insomnia
• HTTP/REST
• JSON

Endpoint principal
http://localhost:3000/convidados

A API trabalha com dados de convidados, contendo principalmente os campos:
{
  "id": 1,
  "nome": "Exemplo",
  "idade": 18
}

1. GET — Listar convidados
Método: GET
URL:
http://localhost:3000/convidados
O método GET foi utilizado para consultar os convidados cadastrados na API.

Exemplo de resposta

[
  {
    "id": 2,
    "nome": "Enzo",
    "idade": 19
  },
  {
    "id": 3,
    "nome": "Jamily",
    "idade": 20
  },
  {
    "id": 4,
    "nome": "Alessandra",
    "idade": 18
  },
  {
    "id": 5,
    "nome": "Hudson",
    "idade": 21
  }
]

Status: 200 OK

2. POST — Adicionar convidado
Método: POST
URL:
http://localhost:3000/convidados
No corpo da requisição foi utilizado JSON para cadastrar um novo convidado.
Body
{
  "nome": "Alessandra",
  "idade": 18
}
Resposta

{
  "message": "Convidado Alessandra adicionado com sucesso",
  "dados": {
    "nome": "Alessandra",
    "idade": 18
  }
}
Status: 201 Created
O código 201 Created indica que um novo recurso foi criado com sucesso.

3. PATCH — Atualizar convidado
Método: PATCH
URL:
http://localhost:3000/convidados/5
O PATCH foi utilizado para alterar apenas uma informação do convidado de ID 5.
Body
{
  "idade": 22
}
Resposta

{
  "id": 5,
  "nome": "Hudson",
  "idade": 22
}
Status: 200 OK
Nesse teste, somente a idade foi alterada. O nome e o ID permaneceram os mesmos.

4. DELETE — Excluir convidado
Método: DELETE
URL:
http://localhost:3000/convidados/1
O DELETE foi utilizado para remover o convidado que possui o ID 1.
Resposta
Não há conteúdo no corpo da resposta.
Status: 204 No Content
O código 204 indica que a operação foi realizada com sucesso, mas a API não retornou conteúdo na resposta.