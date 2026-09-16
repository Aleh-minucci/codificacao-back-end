# 🚀 Aula 07 — NestJS

## 📚 Descrição

Nesta aula foi iniciado o desenvolvimento de uma aplicação utilizando o **NestJS**, um framework baseado em **Node.js** e **TypeScript**, voltado para a criação de aplicações back-end organizadas, eficientes e escaláveis.

O projeto utiliza a estrutura inicial fornecida pelo NestJS para conhecer a organização de uma aplicação e seus principais comandos.

---

## 🛠️ Tecnologias utilizadas

* Node.js
* NestJS
* TypeScript
* npm

---

## 📁 Estrutura do projeto

A aplicação possui uma estrutura organizada para facilitar o desenvolvimento e a manutenção do código.

```text
aula07-nestjs/
├── src/
│   ├── app.controller.ts
│   ├── app.controller.spec.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

### Principais arquivos

* **`main.ts`** — responsável por iniciar a aplicação.
* **`app.module.ts`** — módulo principal da aplicação.
* **`app.controller.ts`** — responsável pelas requisições HTTP.
* **`app.service.ts`** — contém a lógica de serviço da aplicação.
* **`app.controller.spec.ts`** — arquivo utilizado para testes do controller.

---

## ⚙️ Instalação

Para instalar as dependências do projeto:

```bash
npm install
```

---

## ▶️ Executando o projeto

### Desenvolvimento

```bash
npm run start
```

### Modo de desenvolvimento com atualização automática

```bash
npm run start:dev
```

### Produção

```bash
npm run start:prod
```

Após iniciar o servidor, a aplicação poderá ser acessada pelo endereço disponibilizado pelo NestJS, normalmente:

```text
http://localhost:3000
```

---

## 🧪 Testes

Para executar os testes unitários:

```bash
npm run test
```

Para executar os testes em modo de observação:

```bash
npm run test:watch
```

Para verificar a cobertura dos testes:

```bash
npm run test:cov
```

---

## 🎯 Objetivo da aula

O objetivo da Aula 07 é conhecer o **NestJS** e sua estrutura inicial, entendendo como criar e executar uma aplicação back-end utilizando Node.js, TypeScript e o framework NestJS.

---

## 📌 Comandos principais

npm install
npm run start
npm run start:dev
npm run start:prod
npm run test
npm run test:cov
