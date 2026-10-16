# 🚀 Aula 17 — Documentação de API com Swagger

## 📋 Sobre a aula

Nesta aula, foi desenvolvida a documentação técnica interativa de uma API utilizando o **Swagger** integrado ao framework NestJS.

O objetivo é facilitar a visualização, a compreensão e a utilização dos endpoints da aplicação, permitindo consultar as operações disponíveis e testar requisições diretamente pela interface de documentação.

O projeto utiliza o Swagger para documentar uma API de catálogo e estoque, incluindo a operação de cadastro de produtos.

## 🛠️ Tecnologias utilizadas
- **Node.js** — ambiente de execução JavaScript.
- **NestJS** — framework para desenvolvimento de aplicações back-end.
- **TypeScript** — linguagem utilizada no desenvolvimento.
- **Swagger** — ferramenta para documentação e teste de APIs REST.
- **DTO (Data Transfer Object)** — estrutura utilizada para definir os dados recebidos pela aplicação.

## 📚 Conteúdos desenvolvidos

### 1. Configuração do Swagger

Foi realizada a configuração do Swagger no arquivo principal da aplicação, utilizando `DocumentBuilder` e `SwaggerModule`.

A documentação foi configurada com as seguintes informações:

- **Título:** API de Catálogo e Estoque!
- **Descrição:** Documentação Técnica interativa e viva para integração.
- **Versão:** 1.0.
- **Tag:** Produtos.
- **Autenticação:** Basic Auth configurada na documentação.

A interface do Swagger é disponibilizada na rota `/docs`.

### 2. Documentação dos endpoints

Foram utilizados decorators do pacote `@nestjs/swagger` para descrever as operações da API.

- `@ApiTags()` — agrupa os endpoints por categoria.
- `@ApiOperation()` — descreve a finalidade de uma operação.
- `@ApiResponse()` — documenta as possíveis respostas HTTP.
- `@ApiProperty()` — descreve as propriedades dos dados utilizados pela API.

Esses recursos tornam a documentação mais organizada e facilitam a integração com outros sistemas.

### 3. DTO para cadastro de produtos

Foi criada a classe `CriarProdutoDto`, responsável por descrever os dados necessários para cadastrar um produto.

O DTO possui três propriedades:

| Campo | Tipo | Descrição |
|---|---|---|
| `nome` | `string` | Nome comercial do produto. |
| `preco` | `number` | Preço unitário de venda. |
| `categoria` | `string` | Categoria à qual o produto pertence. |

Cada propriedade utiliza `@ApiProperty()` para apresentar exemplos e descrições na documentação do Swagger.

### 4. Controller de produtos

Foi implementado o `ProdutosController`, responsável por disponibilizar a rota de cadastro de produtos.

**Endpoint criado:**

- **Método HTTP:** `POST`
- **Rota:** `/produtos`
- **Finalidade:** receber os dados de um produto por meio do corpo da requisição.

A operação utiliza `@Body()` para receber os dados enviados e o decorator `@ApiOperation()` para descrever o endpoint na documentação.

Também foram documentadas as respostas HTTP:

- **201 — Created:** produto cadastrado com sucesso.
- **400 — Bad Request:** requisição com dados inválidos.

O código apresentado retorna um objeto com identificador, dados do produto e data de criação. Nesta versão, o identificador é fixo e não há persistência em banco de dados.
### 4. Acessar a documentação

Com o servidor em execução, abra o navegador e acesse:

```text
http://localhost:3000/docs
```

Para consultar a rota de cadastro, localize o grupo **Produtos**, selecione `POST /produtos` e utilize a opção de teste disponibilizada pelo Swagger.

## 🎯 Objetivos de aprendizagem

- Compreender a importância da documentação técnica de APIs.
- Integrar o Swagger a uma aplicação NestJS.
- Documentar endpoints e respostas HTTP.
- Utilizar DTOs para descrever os dados recebidos.
- Organizar a documentação com tags, operações e propriedades.
- Facilitar os testes e a integração da API com outros sistemas.