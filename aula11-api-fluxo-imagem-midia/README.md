Aula 11

## 📚 Descrição
Projeto desenvolvido durante a aula de Programação Back-End utilizando o framework NestJS.

Nesta atividade foi implementado um sistema para upload de arquivos de imagem, utilizando o Multer para processamento dos arquivos enviados e o UUID para gerar nomes únicos.

O projeto também foi testado utilizando o Insomnia, realizando o envio de uma imagem para verificar o funcionamento da API.
## 🚀 Tecnologias utilizadas

* Node.js
* NestJS
* TypeScript
* Multer
* UUID
* Insomnia


## 📁 Estrutura do projeto

A funcionalidade de mídia foi organizada utilizando um módulo e um controller:

src/
└── midia/
    ├── midia.controller.ts
    └── midia.module.ts
Também é criada a pasta:
uploads/
Essa pasta é utilizada para armazenar os arquivos enviados pela API.
## 📤 Upload de arquivos
Foi criada a rota:
POST /midia/upload

O arquivo deve ser enviado utilizando o campo:
arquivo

### Formato da requisição
A requisição deve utilizar `multipart/form-data`.
Exemplo:
POST http://localhost:3000/midia/upload

Campo:
arquivo: imagem.jpg

## 🖼️ Tipos de arquivos permitidos
A API permite o envio dos seguintes formatos:
* `.jpg`
* `.jpeg`
* `.png`
* `.gif`
* `.webp`

Arquivos com outros formatos são rejeitados pela aplicação.
Mensagem retornada:
Apenas arquivos do tipo: jpg, jpeg, png, gif e webp são permitidos

## 📏 Limite do arquivo
Foi configurado um limite máximo de:
2 MB

Arquivos maiores que esse tamanho não são aceitos pela API.

## 🔐 Nome único dos arquivos

Para evitar conflitos entre arquivos com o mesmo nome, foi utilizado o pacote UUID.
O nome original do arquivo é substituído por um identificador único, mantendo sua extensão.

Exemplo:
imagem.jpg
pode ser armazenada como:
550e8400-e29b-41d4-a716-446655440000.jpg
## 💻 Configuração do armazenamento

Os arquivos enviados são armazenados na pasta:
./uploads
O nome do arquivo é gerado automaticamente utilizando:
uuidv4()
e a extensão original utilizando:
extname(file.originalname)

## 📦 Resposta da API
Após o envio de uma imagem válido, a API retorna informações sobre o arquivo recebido.
Exemplo:
{
  "filename": "arquivo",
  "size": 125478,
  "url": "http://localhost:3000/api/uploads/550e8400-e29b-41d4-a716-446655440000.jpg"
}

## ❌ Validações
A aplicação possui validações para impedir o envio de arquivos inválidos.
### Nenhum arquivo enviado
Caso nenhum arquivo seja enviado:
Nenhum arquivo enviado!
### Tipo de arquivo inválido
Caso o arquivo não seja uma imagem permitida:
Apenas arquivos do tipo: jpg, jpeg, png, gif e webp são permitidos

### Arquivo maior que 2 MB
Arquivos que ultrapassarem o limite configurado são rejeitados.

## 🧪 Teste com Insomnia
A API foi testada utilizando o Insomnia.
Foi realizada uma requisição POST para:
/midia/upload
Utilizando multipart/form-data e enviando uma imagem no campo:
arquivo

### Resultado
O teste confirmou o recebimento e processamento da imagem pela API, com o arquivo sendo armazenado na pasta uploads.

## ▶️ Como executar o projeto
Instale as dependências:
npm install
Execute o projeto em modo de desenvolvimento:
npm run start:dev
Após iniciar o servidor, a API estará disponível localmente.


## 📌 Objetivo da atividade
O objetivo desta atividade foi praticar:
* Criação de módulos no NestJS;
* Criação de controllers;
* Criação de rotas POST;
* Upload de arquivos;
* Utilização do Multer;
* Armazenamento de arquivos no servidor;
* Geração de nomes únicos com UUID;
* Validação de tipos de arquivos;
* Limitação do tamanho dos arquivos;
* Tratamento de erros com `BadRequestException`;
* Testes de APIs utilizando o Insomnia.


## 📖 Conclusão
Nesta atividade foi desenvolvido um recurso de **upload de imagens utilizando NestJS**, permitindo receber, validar e armazenar arquivos enviados através de uma requisição HTTP.

O uso do **Multer** facilitou o processamento dos arquivos, enquanto o **UUID** permitiu gerar nomes únicos para evitar conflitos no armazenamento. O funcionamento da API foi validado através de testes realizados no **Insomnia**.
