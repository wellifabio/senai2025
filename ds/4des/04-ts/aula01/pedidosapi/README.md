# API de Pedidos
Esta é uma API simples para gerenciar pedidos, desenvolvida como parte do curso de Programação Orientada a Objetos (PSOF) do SESI.


## Tecnologias
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção de APIs em Node.js.
- **Prisma**: ORM para interagir com o banco de dados.
- **Swagger**: Documentação da API.

## Instalação
- 1 Clone este repositório e abra com o VsCode.
- 2 Crie o arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
```js
DATABASE_URL="mysql://root@localhost:3306/pedidosapi?schema=public&timezone=UTC"
SECRET_JWT="meu_segredo_jwt"
```
- 3 Abra o XAMPP de start no MySQL. No terminal, execute os seguintes comandos para instalar as dependências e criar o banco de dados:
```bash
npm install
npx prisma migrate dev --name init
```
4 Inicie o servidor com o comando:
```bash
npx nodemon
```
4 Clique nos links do console para acessar a documentação da API no Swagger.
![Swagger](./screenshot.png)