# 🚀 Aula 16 — Validação de Dados com Zod no NestJS

## 📋 Sobre a aula
O objetivo é garantir que os dados enviados nas requisições HTTP estejam de acordo com as regras definidas antes de serem processados pela aplicação.
Neste projeto, foi desenvolvido um sistema de cadastro de colaboradores, utilizando um esquema de validação (colaboradorSchema) e um pipe personalizado chamado ZodValidationPipe.

## 🎯 Objetivos
* Implementar validações de dados com Zod.
* Criar um esquema para validar as informações dos colaboradores.
* Desenvolver um pipe personalizado com PipeTransform.
* Utilizar BadRequestException para retornar erros de validação.
* Criar uma rota POST para cadastrar colaboradores.
* Retornar mensagens específicas para cada campo inválido.

## 📁 Estrutura e funcionalidades
### 1. colaborador.schema.ts
Define as regras de validação dos dados do colaborador.
Os campos validados são:
| Campo          | Regra                                     |
| -------------- | ----------------------------------------- |
| `nome`         | Deve conter no mínimo 3 letras.           |
| `email`        | Deve possuir um formato de e-mail válido. |
| `idade`        | Deve ser um número entre 18 e 65 anos.    |
| `departamento` | Deve ser `TI`, `RH` ou `Financeiro`.      |
O arquivo também utiliza `z.infer` para gerar o tipo TypeScript `Colaborador` com base no esquema definido.

### 2. `zod-validation.pipe.ts`
Implementa um pipe personalizado para validar os dados recebidos no corpo (`body`) das requisições.
Suas principais responsabilidades são:
* Verificar se os dados recebidos atendem ao esquema definido.
* Utilizar `safeParse()` para validar as informações.
* Identificar os campos que apresentam erros.
* Retornar o código HTTP `400 (Bad Request)` quando os dados forem inválidos.
* Informar o campo e a mensagem correspondente ao erro.
* Retornar os dados validados quando a validação for bem-sucedida.

### 3. `colaborador.controller.ts`
Define a rota responsável pelo cadastro de colaboradores:
`POST /colaboradores`
O controller utiliza `@UsePipes()` para aplicar o `ZodValidationPipe` e validar o corpo da requisição antes de executar o cadastro.

Quando os dados são válidos, a resposta contém uma mensagem de sucesso e os dados do colaborador.

## 🧪 Exemplos de validação

### Cadastro válido
Requisição para POST /colaboradores:
{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "idade": 25,
  "departamento": "TI"
}
Resposta esperada:
{
  "message": "Colaborador criado como sucesso!",
  "colaborador": {
    "nome": "Maria Silva",
    "email": "maria@email.com",
    "idade": 25,
    "departamento": "TI"
  }
}

### Cadastro inválido
Exemplo de requisição com nome curto, e-mail inválido e idade abaixo do mínimo:
{
  "nome": "Ana",
  "email": "email-invalido",
  "idade": 16,
  "departamento": "TI"
}
A aplicação retorna o status HTTP 400, acompanhado de mensagens indicando os campos inválidos e os motivos da rejeição.

## ⚙️ Instalação e execução
### 1. Instalar as dependências
npm install
Caso o Zod ainda não esteja instalado:
npm install zod
### 2. Iniciar o servidor
npm run start:dev
O servidor será iniciado em modo de desenvolvimento, permitindo acompanhar as alterações realizadas no código.
### 3. Testar a rota
Utilize o Postman ou outra ferramenta para enviar uma requisição:

* Método:POST
* URL:http://localhost:3000/colaboradores
* Body:raw → JSON

Envie os dados do colaborador e verifique o resultado da validação.

