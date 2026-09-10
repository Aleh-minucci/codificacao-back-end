# 📚 Aula 01 — Revisão do Node.js e NPM

## 📌 Sobre a aula

Nesta aula foi realizada uma revisão dos principais conceitos do Node.js e do NPM, com foco na execução de JavaScript no ambiente Server-Side.

Também foi realizada a verificação do ambiente de desenvolvimento, a inicialização de um projeto Node.js e a criação de um script para diagnóstico das informações do sistema.


## 🎯 Objetivos da aula

- Compreender o conceito de Node.js Server-Side;
- Verificar se o ambiente de desenvolvimento está configurado corretamente;
- Inicializar um projeto utilizando NPM;
- Criar e executar um script em Node.js;
- Utilizar módulos nativos do Node.js;
- Conhecer o módulo `OS`;
- Consultar informações do sistema operacional e do hardware.

## 🛠️ Conteúdos desenvolvidos
Conceito de Node.js Server-Side;
Verificação e configuração do ambiente de desenvolvimento;
Verificação das versões do Node.js e NPM;
Inicialização de um projeto com NPM;
Criação e utilização do arquivo package.json;
Criação de scripts em Node.js;
Importação de módulos nativos;
Utilização do módulo nativo OS;
Consulta das informações do sistema operacional;
Utilização do método os.platform();
Utilização do método os.totalmem();
Utilização do método os.freemem();
Utilização do método os.cpus();
Criação de um script de diagnóstico do sistema;
Execução de scripts Node.js pelo terminal.

### 1. 🟢 Node.js Server-Side

Foi aplicado o conceito de execução do **JavaScript no lado do servidor (Server-Side)** utilizando o Node.js.

O Node.js permite executar códigos JavaScript fora do navegador, possibilitando a criação de aplicações Back-End.


### 2. 🔍 Verificação do ambiente

Foi realizada a verificação do ambiente de desenvolvimento para confirmar se as ferramentas necessárias estavam instaladas e funcionando corretamente.

Principais verificações:

- Node.js
- NPM
- Versões instaladas
- Funcionamento do terminal

### 🧪 Script de diagnóstico

Exemplo do script desenvolvido durante a aula:
const os = require('os');
console.log('=== DIAGNÓSTICO DO SISTEMA ===');
console.log('Plataforma:', os.platform());
console.log('Memória total:', os.totalmem());
console.log('Memória livre:', os.freemem());
console.log('Processadores:', os.cpus());

### Comandos utilizados:
node -v
npm -v