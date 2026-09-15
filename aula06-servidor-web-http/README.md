
## 📚 Sobre a aula
Nesta aula foi desenvolvido um servidor web utilizando o módulo nativo http do Node.js.
O objetivo foi compreender como criar um servidor HTTP, receber requisições, identificar o método e a URL acessada e retornar respostas utilizando diferentes códigos de status HTTP.

## 🎯 Objetivos

* Criar um servidor web com o módulo http do Node.js.
* Receber e identificar requisições HTTP.
* Trabalhar com métodos e URLs das requisições.
* Criar uma rota status.
* Retornar respostas no formato JSON.
* Utilizar códigos de status HTTP, como `200` e `404`.
* Adicionar cabeçalhos de segurança às respostas.

## 💻 Tecnologias utilizadas

* **Node.js**
* **JavaScript**
* **Módulo HTTP**
* **JSON**
* **npm**

## ⚙️ Configuração do projeto

O projeto utiliza **ES Modules**, conforme definido no 
{
  "name": "aula06-servidor-web-http",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module"
}

## 🌐 Criando o servidor HTTP
Foi utilizado o módulo nativo `http` do Node.js:
import http from 'http';
const servidor = http.createServer((req, res) => {
});
O servidor fica responsável por receber as requisições e enviar as respostas para o cliente.

## 📝 Registro das requisições
O servidor registra no console o método HTTP e a URL recebida:
console.log(`[LOG] Método recebido: ${req.method} | ${req.url}`);
Isso permite acompanhar as requisições realizadas ao servidor.

## 🔐 Cabeçalhos de segurança
Foram adicionados cabeçalhos de segurança padrão:
const cabecalhoPadrao = {
  'X-Content-Type-Options': 'nosniff',
  'X-frame-Options': 'DENY'
};
Esses cabeçalhos são enviados junto com as respostas do servidor.

## ❌ Página não encontrada
Para URLs diferentes de `/status`, o servidor retorna o código `404`.
A resposta é:
{
  "erro": "Página não encontrada"
}

## 🚀 Executando o projeto
Para executar o servidor, utilize:
Após iniciar, será exibida a mensagem:
Sentinela ativo na porta 3000
O servidor estará disponível na porta:
http://localhost:3000

### Testando a rota de status

Acesse:
http://localhost:3000/status

Resposta esperada:
{
  "servidor": "Online"
}

### Testando uma rota inexistente
Por exemplo:
http://localhost:3000/teste

Resposta esperada:
{
  "erro": "Página não encontrada"
}

## 📁 Estrutura do projeto
aula06-servidor-web-http/
├── index.js
├── package.json
└── package-lock.json