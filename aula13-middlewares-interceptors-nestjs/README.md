# 🚀 Aula 13 

## 📋 Sobre a aula

A Aula 13 apresenta o conceito de Middleware no NestJS.
O middleware é executado durante o processamento de uma requisição HTTP e pode ser utilizado para realizar tarefas antes que a requisição chegue ao controller.
Neste projeto, foi criado um middleware chamado:
LoggerMiddleware
Ele possui duas responsabilidades principais:
* Registrar no console o método HTTP e a rota acessada;
* Verificar o nível de acesso do usuário para a rota administrativa.

## 🎯 Objetivos
Nesta aula foram praticados os seguintes conceitos:

* Criação de Middleware no NestJS;
* Implementação da interface NestMiddleware;
* Interceptação de requisições HTTP;
* Registro de logs;
* Utilização de Request, Response e NextFunction;
* Leitura de headers HTTP;
* Controle de acesso por perfil;
* Retorno do status HTTP 403 Forbidden;
* Uso do método next();
* Criação de rotas públicas e administrativas.

## 🛠️ Tecnologias utilizadas
* Node.js
* NestJS
* TypeScript
* Express
* npm
* REST API

# 📁 Estrutura principal
src/
├── app.controller.ts
├── app.service.ts
├── app.module.ts
├── main.ts
└── logger.middleware.ts

# 🌐 Rotas da aplicação
O AppController possui duas rotas principais.

## 🔓 Rota pública
  return {
    message: 'Rota Publica acessada com sucesso!',
    data: new Date(),
  };
### Resposta
{
  "message": "Rota Publica acessada com sucesso!",
  "data": "2026-09-29T..."
}
Essa rota não exige um perfil específico de usuário.

# 🔐 Rota administrativa
Também foi criada a rota:
@Get('admin')
getAdmin() {
  return {
    message: 'Bem-vindo ao Painel administrativo!',
    data: new Date(),
  };
}

# 👤 Controle de acesso
O middleware verifica se a requisição pertence à rota administrativa:
if (req.path.startsWith('admin')) 

Quando a rota começa com admin, o middleware verifica o header:
x-user-role
O valor é obtido através de:
const role = req.headers['x-user-role'];

## 👨‍💼 Perfil Supervisor

Para acessar a área administrativa, o usuário precisa enviar:
x-user-role: supervisor
Nesse caso, o middleware permite que a requisição continue através de:
next();

A requisição chega ao AppController e retorna:
{
  "message": "Bem-vindo ao Painel administrativo!",
  "data": "2026-09-29T..."
}

# 🚫 Acesso negado
Caso o usuário tente acessar /admin sem o perfil supervisor, o middleware bloqueia a requisição.
A condição utilizada é:
if (role !== 'supervisor')
Nesse caso, o servidor retorna:
403 Forbidden
Com a seguinte resposta:
{
  "statusCode": 403,
  "message": "Acesso Negado: Privilégio de Supervisor Necessário!",
  "log": "2026-09-29T..."
}
O middleware não chama next(), portanto a requisição não chega ao controller.

# 🧪 Como testar
## Teste 1 — Rota pública
Faça uma requisição:
GET http://localhost:3000/ 
Resultado esperado:
{
  "message": "Rota Publica acessada com sucesso!",
  "data": "..."
}
## Teste 2 — Área administrativa com acesso autorizado
Envie:
GET http://localhost:3000/admin
x-user-role: supervisor
Resultado:
200 OK
Resposta:
{
  "message": "Bem-vindo ao Painel administrativo!",
  "data": "..."
}
## Teste 3 — Área administrativa sem autorização
Envie:
GET http://localhost:3000/admin
Resultado:
403 Forbidden
Resposta:
{
  "statusCode": 403,
  "message": "Acesso Negado: Privilégio de Supervisor Necessário!",
  "log": "..."
}

# ▶️ Executando o projeto
Para utilizar o modo de desenvolvimento:
npm run start:dev
A aplicação estará disponível, por padrão, em:
http://localhost:3000