# API - Escola - Gestão de atividades e turmas
## Tecnologias utilizadas
- Node.js
- Express
- MySQL (XAMPP MariaDB)
- Prisma ORM

## Instalação e configuração
1. Clone o repositório e instale as dependências:
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>]
npm install
```
1. Configure o banco de dados:
- Instale o XAMPP e inicie o serviço do MySQL (MariaDB).
- Crie o arquivo .env na raiz do projeto e adicione a string de conexão com o banco de dados:
```js
DATABASE_URL="mysql://root@localhost:3306/escola"
```
- Execute as migrações do Prisma para criar as tabelas no banco de dados:
```bash
npx prisma migrate dev --name init
```
1. Inicie o servidor:
```bash
npm run dev
```
