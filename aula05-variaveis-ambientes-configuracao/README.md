# 📚 Aula 05 — Variáveis de Ambiente e Configuração
Nesta aula foi estudado o uso de variáveis de ambiente em aplicações Node.js.
O projeto utiliza o pacote dotenv para carregar informações de configuração a partir de um arquivo .env, permitindo separar configurações como porta do servidor, chave de API e endereço do banco de dados do código da aplicação.

# 🎯 Objetivos
Utilizar variáveis de ambiente em uma aplicação Node.js.
Configurar o pacote dotenv.
Carregar informações do arquivo .env.
Acessar variáveis utilizando process.env.
Configurar a porta da aplicação.
Configurar uma chave de API.
Configurar a URL do banco de dados.
Validar se uma variável obrigatória foi definida.
Encerrar a aplicação caso a chave da API não esteja configurada.
📁 Estrutura do projeto
aula05/
│
├── index.js
├── .env
├── package.json
└── package-lock.json

# ⚙️ Tecnologias utilizadas
Node.js
JavaScript
npm
dotenv

# 📦 Dependência
O projeto utiliza o pacote dotenv para carregar as variáveis definidas no arquivo .env.
npm install dotenv
A dependência utilizada no projeto é:
"dotenv": "^17.4.2"

# 🔐 Variáveis de Ambiente

As configurações da aplicação são armazenadas em variáveis de ambiente:
PORT=3000
API_KEY_PAGAMENTO=sk_live_...
DATABASE_URL=mongodb://localhost:27017/meu_banco
Essas variáveis representam:
PORT: define a porta utilizada pela aplicação.
API_KEY_PAGAMENTO: armazena a chave da API de pagamentos.
DATABASE_URL: informa o endereço de conexão com o banco de dados.
⚠️ O arquivo .env pode conter informações sensíveis, como chaves de API. Por isso, ele não deve ser enviado para o repositório público. Recomenda-se adicionar .env ao .gitignore.

# 🔧 Configuração do dotenv
O pacote dotenv é importado e configurado no início da aplicação:
import dotenv from 'dotenv'
dotenv.config();
Depois disso, as variáveis podem ser acessadas através de process.env.

# 🌐 Acessando as variáveis

Dentro da função iniciarAplicacao(), as configurações são obtidas utilizando:
const port = process.env.PORT || 8080;
const apiKey = process.env.API_KEY_PAGAMENTO;
const dbUrl = process.env.DATABASE_URL;
Caso PORT não esteja definida, a aplicação utiliza a porta 8080 como valor padrão.

# 🛡️ Validação da chave da API

O código verifica se a variável API_KEY_PAGAMENTO foi configurada:
if(!apiKey){
    console.error(
        'ERRO CRÍTICO: a chave API_KEY_PAGAMENTO não está definida nas variáveis de ambiente!'
    );

    process.exit(1);
}

Caso a chave não exista, uma mensagem de erro é exibida e a aplicação é encerrada.

# 🖥️ Informações da configuração

Após carregar as configurações, a aplicação exibe informações no console:

=== SERVIÇO DE CONFIGURAÇÃO CARREGADO ===
Servidor rodando na porta: 3000
Conexão Banco de dados: mongodb://localhost:27017/meu_banco
Status da API de Pagamentos: chave de tamanho ... autenticado
A chave da API não é exibida diretamente. O código informa apenas o tamanho da chave.

# 🚀 Execução

Para instalar as dependências:
npm install
Para executar a aplicação:
node index.js
Após iniciar, as configurações carregadas serão exibidas no terminal