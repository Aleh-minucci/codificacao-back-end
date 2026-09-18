🚀 Projeto NestJS
API desenvolvida com NestJS e TypeScript, seguindo uma arquitetura modular e preparada para facilitar manutenção, escalabilidade e evolução do projeto.

📋 Sobre o projeto
Este projeto utiliza o NestJS
 como framework principal para construção de uma aplicação server-side eficiente e escalável sobre Node.js.
A aplicação foi estruturada de forma modular, permitindo a separação das responsabilidades e facilitando o desenvolvimento, testes e manutenção do código.

🛠️ Tecnologias
Node.js
NestJS
TypeScript
npm
Jest — testes unitários
Supertest — testes end-to-end
Outras tecnologias utilizadas no projeto podem ser adicionadas a esta lista conforme a necessidade.

📁 Estrutura do projet
Uma estrutura comum deste projeto é:
src/
├── modules/
│   ├── ...
│
├── app.controller.ts
├── app.service.ts
├── app.module.ts
└── main.ts

Você pode verificar as versões instaladas com:
node --version
npm --version
git --version

📦 Instalaçã
Clone o repositório:
git clone <URL_DO_REPOSITORIO>
Entre no diretório do projeto
cd <NOME_DO_PROJETO>
Instale as dependências:
npm install
🔐 Variáveis de ambiente

Crie um arquivo .env na raiz do projeto:

PORT=3000

# Adicione aqui as demais variáveis utilizadas pela aplicação
# DATABASE_URL=
# JWT_SECRET=
# API_KEY=
Nunca versione informações sensíveis, como senhas, tokens ou chaves privadas.

▶️ Executando o projeto
Desenvolvimento
npm run start

Desenvolvimento com hot reload
npm run start:dev

Produção

Primeiro, compile o projeto:

npm run build


Depois execute:

npm run start:prod


Por padrão, a aplicação estará disponível em:

http://localhost:3000

🧪 Testes
Testes unitários
npm run test

Testes em modo watch
npm run test:watch

Testes end-to-end
npm run test:e2e

Cobertura de testes
npm run test:cov

🔌 API

Após iniciar a aplicação, os endpoints podem ser acessados através de:

http://localhost:3000


Caso o projeto possua documentação Swagger, ela pode estar disponível em:

http://localhost:3000/api


Ajuste a URL acima conforme a configuração real da aplicação.
