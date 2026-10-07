# 🚀 Aula 15 — Tratamento de Erros no NestJS
## 📋 Sobre a aula
A Aula 15 apresenta o conceito de tratamento de erros em aplicações NestJS.

Durante a aula, foi desenvolvida uma API de produtos para demonstrar como identificar situações inválidas durante uma requisição e retornar respostas HTTP adequadas para cada tipo de erro.

Foram utilizados recursos nativos do NestJS, como:
* BadRequestException;
* NotFoundException;
* Logger;
* Validação de parâmetros;
* Tratamento de erros HTTP;
* Códigos de status 400 e 404.

## 🎯 Objetivo
O objetivo da aula é aprender como tratar situações de erro em uma API de forma organizada, informando ao cliente o que aconteceu através de mensagens e códigos HTTP apropriados.
Na aplicação, são tratados principalmente dois casos:
1. Quando o ID informado não é válido;
2. Quando o ID é válido, mas o produto não existe.

## 🛠️ Tecnologias utilizadas
* **Node.js**
* **NestJS**
* **TypeScript**
* **npm**

## 📦 API de Produtos
Para demonstrar o tratamento de erros, foi criada uma lista de produtos:
| ID | Produto       |     Preço |
| -: | ------------- | --------: |
|  1 | Teclado 1     | R$ 199,99 |
|  2 | Mouser Gamer  |  R$ 99,99 |
|  3 | Monitor 144Hz | R$ 899,99 |
|  4 | Headset RGB   | R$ 149,99 |
|  5 | Cadeira Gamer | R$ 499,99 |

# ⚠️ Tratamento de erros
## 🔴 BadRequestException — Erro 400
O `BadRequestException` é utilizado quando a requisição possui um dado inválido.
Neste projeto, ele é utilizado quando o usuário informa um ID que não é numérico.
O sistema identifica que `abc` não pode ser convertido corretamente para um número e retorna:
400 Bad Request
Mensagem:
ID inválido. Deve ser um número inteiro!

## 🔴 NotFoundException — Erro 404
O `NotFoundException` é utilizado quando o recurso solicitado não existe.
Neste projeto, ele é utilizado quando o ID é válido, mas não existe na lista de produtos.
Exemplo:
Como o produto com ID `10` não existe, a API retorna:
404 Not Found
Mensagem:
Produto com ID 10 não encontrado.

# 📝 Logger
Além das exceções, a aplicação utiliza o `Logger` do NestJS para registrar situações de erro.
O sistema registra, por exemplo:

### ID inválido
Tentativa de busca com ID não numérico: abc
### Produto não encontrado
Produto com ID 10 não localizado.
Isso ajuda a identificar problemas e acompanhar o comportamento da aplicação.

# 🌐 Rotas

## Listar produtos
GET /produtos
Retorna todos os produtos cadastrados.

## Buscar produto por ID
GET /produtos/:id
Exemplo:
GET /produtos/1
Retorno:
{
  "id": 1,
  "nome": "Teclado 1",
  "preco": 199.99
}

# 🚨 Exemplos de erros

### ID inválido
GET /produtos/ab
**Status:** `400 Bad Request`


{
  "statusCode": 400,
  "message": "ID inválido. Deve ser um número inteiro!",
  "error": "Bad Request"
}

### Produto não encontrado
GET /produtos/10
**Status:** `404 Not Found`


{
  "statusCode": 404,
  "message": "Produto com ID 10 não encontrado.",
  "error": "Not Found"
}

# ▶️ Como executar o projeto
Execute o projeto em modo de desenvolvimento:
npm run start:dev
A aplicação ficará disponível em:
http://localhost:3000
