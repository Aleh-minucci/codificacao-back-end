
# 📚 Aula 04 — Tratamento de Erros com Express
Nesta aula foi estudado o tratamento de erros em aplicações Node.js utilizando Express.
O projeto cria um servidor web que possui rotas para testar uma operação com sucesso, um erro síncrono e um erro assíncrono. Também foram utilizados mecanismos para capturar erros que podem acontecer durante a execução do processo.

# 🎯 Objetivos
Criar um servidor utilizando Express.
Configurar o recebimento de dados no formato JSON.
Criar rotas para testar diferentes situações.
Trabalhar com erros síncronos e assíncronos.
Utilizar middleware de tratamento de erros.
Utilizar uncaughtException.
Utilizar unhandledRejection.
Retornar respostas de erro em formato JSON.
Registrar informações dos erros no console.
📁 Estrutura do projeto
aula04/
│
├── serve.js
├── package.json
└── package-lock.json
⚙️ Tecnologias utilizadas
Node.js
Express
JavaScript
npm

# 📦 Express
O projeto utiliza o framework Express para criar o servidor:
import express from 'express';
const app = express();
Também é habilitado o recebimento de dados JSON:
app.use(express.json());

# 🛡️ Tratamento de erros do processo

O código utiliza uncaughtException para capturar exceções que não foram tratadas:
process.on('uncaughtException', (err) => {
    console.error(
        '[ERRO DE PROCESSO - uncaughtException]: ',
        err.message
    );
});

Também é utilizado unhandledRejection para identificar Promises rejeitadas que não foram tratadas:
process.on('unhandledRejection', (reason) => {
    console.error(
        '[PREMISE REJEITADA - unhandledRejection]: ',
        reason
    );
});

Esses mecanismos ajudam a identificar problemas que poderiam interromper ou afetar o funcionamento da aplicação.