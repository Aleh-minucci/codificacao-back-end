# 📚 Aula 03 — Streams e Processamento de Logs
Nesta aula foi estudado o uso de Streams no Node.js para trabalhar com arquivos grandes de forma eficiente, evitando carregar todo o conteúdo do arquivo na memória.
O projeto simula a geração de um arquivo de log com 200.000 linhas e, posteriormente, realiza o processamento desse arquivo para identificar e separar as linhas que possuem erros.

# 🎯 Objetivos
Compreender o funcionamento de Streams no Node.js.
Gerar arquivos grandes utilizando createWriteStream().
Ler arquivos utilizando createReadStream().
Processar arquivos linha por linha com o módulo readline.
Filtrar mensagens de erro em arquivos de log.
Utilizar process.memoryUsage() para acompanhar o consumo de memória.
Demonstrar uma forma eficiente de trabalhar com arquivos grandes.
📁 Estrutura do projeto
aula03/
│
├── gerarLogGigante.js
├── processarLogs.js
├── servidor.log
└── apenas_erros.log
📝 1. Gerando um arquivo de log

O arquivo gerarLogGigante.js utiliza o módulo fs do Node.js para criar um arquivo chamado servidor.log.
Para isso, é utilizado:
const streamEscrita = fs.createWriteStream('servidor.log');
O programa gera 200.000 linhas simulando mensagens de um servidor.
A cada 7 linhas, uma mensagem de erro é criada:
const tipo = i % 7 === 0 ? 'ERRO' : 'INFO';
Depois, cada linha é escrita no arquivo utilizando:
streamEscrita.write(...)

# Ao finalizar a geração:
streamEscrita.end();
O arquivo criado simula um grande arquivo de logs de um servidor.

# 🔎 2. Processando os logs

O arquivo processarLogs.js é responsável por ler o arquivo servidor.log e encontrar somente as linhas que possuem a palavra ERROR.
Para realizar a leitura de forma eficiente, é utilizado:
const streamLeitura = fs.createReadStream('servidor.log');
Também é criado um arquivo para armazenar somente os erros:
const streamEscrita = fs.createWriteStream('apenas_erros.log');

# 💾 Consumo de memória

O projeto também utiliza:
process.memoryUsage();
para verificar o consumo de memória durante o processamento.
São exibidas duas informações principais:
RSS: memória total utilizada pelo processo.
Heap Used: memória utilizada pelo Heap do Node.js.
Exemplo de saída:
[Início] RSS: XX MB | Heap Utilizado: XX MB
[Fim] RSS: XX MB | Heap Utilizado: XX MB
Isso permite observar que o processamento com Streams é mais adequado para arquivos grandes, pois o conteúdo não precisa ser carregado inteiro na memória.

# 🚀 Tecnologias utilizadas
Node.js
JavaScript
Módulo fs
Módulo readline
Streams
process.memoryUsage()
▶️ Como executar
1. Gerar o arquivo de log
Execute:
node gerarLogGigante.js
Será criado o arquivo:
servidor.log
contendo 200.000 linhas de logs simulados.
2. Processar os logs
Depois execute:
node processarLogs.js
O programa irá analisar o arquivo servidor.log e criar:
apenas_erros.log
contendo as linhas identificadas como erros.

# 📊 Resultado esperado

Ao executar o processamento, será exibido algo semelhante a:
INICIANDO PROCESSAMENTO COM STREAMS!
[Início] RSS: XX MB | Heap Utilizado: XX MB
Processamento Concluído! Quantidade de erros encontrados: XXXXX Linhas
[Fim] RSS: XX MB | Heap Utilizado: XX MB
O arquivo apenas_erros.log armazenará somente os registros identificados como erros.