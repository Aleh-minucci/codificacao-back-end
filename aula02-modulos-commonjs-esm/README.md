# 📚 Aula 2 - Sistema de Logs com Node.js
Nesta aula foi desenvolvido um pequeno sistema de registro de logs utilizando Node.js.
O projeto utiliza os módulos nativos do Node.js para criar uma pasta de logs e salvar mensagens de funcionamento do sistema em um arquivo chamado system.log.
Também foi criada uma função auxiliar para formatar as mensagens com data e horário.

# 🎯 Objetivo
Importação e utilização de módulos no Node.js;
Uso do fs/promises para trabalhar com arquivos;
Uso do módulo path;
Uso do fileURLToPath;
Criação e organização de funções em arquivos separados;
Criação e gravação de arquivos de log;
Uso de funções async/await;
Tratamento de erros com try/catch.
📁 Estrutura do projeto
aula02/
│
├── index.js
├── utils.js
└── logs/
    └── system.log

# ⚙️ Funcionamento
utils.js

O arquivo utils.js possui a função formatLog().

Essa função recebe uma mensagem e adiciona a data e o horário antes de retorná-la formatada.

# Exemplo:
[2026-09-11 16:30:00] - Inicialização do servidor concluída!
index.js

# O arquivo index.js é responsável por:

Importar os módulos necessários;
Criar o caminho da pasta logs;
Criar a pasta caso ela ainda não exista;
Criar ou acessar o arquivo system.log;
Formatar as mensagens utilizando formatLog();
Adicionar as mensagens ao arquivo;
Informar no console se o registro foi realizado com sucesso.
📝 Mensagens registradas

O sistema registra inicialmente duas mensagens:

Inicialização do servidor concluída!
Conexão com o banco de dados estabelecida!

Essas mensagens são adicionadas ao arquivo:

logs/system.log
▶️ Como executar

Primeiro, certifique-se de ter o Node.js instalado.

No terminal, execute:

node index.js

Após executar, será criada a pasta logs e dentro dela o arquivo:

system.log
🛠️ Tecnologias utilizadas
Node.js
JavaScript
FS Promises
Path
ES Modules

Projeto desenvolvido como atividade da Aula 2 de Node.js.