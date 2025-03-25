# Aula03 - ORM Prisma
- ORM (Object Relationship Management)
## Demonstração
Projeto modelo com prisma **[SNOOPY PetShop](https://github.com/wellifabio/pbe2-aula03-prisma-2025.git)**
- ![Der-DC](./der+dc.png)
### Step by Step
- Iniciar um projeto com prisma
- 1 Ter um documento DER ou DC
- 2 Criar um repositório
- 3 Clonar o repositório e abrir com VsCode
- 4 Criar a pasta API e o arquivo server
- 5 Abrir um terminal CTRL + ' e dar os comandos a seguir para iniciar o projeto
```bash
cd api
npm init -y
npm i express cors dotenv
```
- Iniciar o uso do Prisma instalaremos ele globalmente
```bash
npm i prisma -g
```
- Conctar o prisma ao um SGBD MySQL
```bash
npx prisma init --datasouce-provider mysql
```
- Editar a variável de ambiente DATABASE_URL no arquivo **.env**
```js
DATABASE_URL="mysql://root@localhost:3306/petshop?schema=public&timezone=UTC"
```
- Navegar até o arquivo ./prisma/schema.prisma
```js
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Cliente{
  id Int @id @default(autoincrement())
  cpf String? @db.VarChar(20)
  nome String
  telefones Telefone[]
  pedidos Pedido[]
}

model Telefone{
  id Int @id @default(autoincrement())
  clienteId Int
  numero String @db.VarChar(20)
  tipo String @db.VarChar(20)
  cliente Cliente @relation(fields: [clienteId], references: [id])
}

model Pedido{
  id Int @id @default(autoincrement())
  clienteId Int
  data DateTime @default(now())
  produto String
  qtd Int
  preco Decimal @db.Decimal(10,2)
  subTotal Decimal? @db.Decimal(10,2)
  cliente Cliente @relation(fields: [clienteId], references: [id])
}
```
- Como os modelos prontos no schema Realizar a migração
```bash
npx prisma migrate dev --name init
```
- Caso seja necessário remover o banco de dados para testar a criação novamente
    - Exclua a pasta migrations
```bash
prisma migrate reset
```
- Editar o .gitignore
```js
node_modules
# Keep environment variables out of version control
.env
prisma/migrations
package-lock.json
```