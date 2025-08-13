# Aula03 - Deploy (Implantação)

## Ambiente
- VsCode
- Node.js
- Prisma
- Postgres
- Vercel

## Implantar API Back-end Node.js + Postgrees na Vercel
Para implantar uma API back-end vamos precisar de um novo projeto **Node.js**, uma conta e um projeto na **[Vercel](https://vercel.com/)**, caso não possua um projeto iniciado, clone este **[projeto modelo NodeJS]()** em seu computador, envie para um repositório seu no github e vincule a um novo projeto na Vercel.

## 1 Configurando o Bando de Dados Postgress
Para este guia, usaremos um banco de dados Postgres gratuito hospedado no Vercel. Primeiro, envie o repositório que você clonou na Etapa anterior para o GitHub e implante-o no Vercel para criar um projeto Vercel.
- Após criar um projeto Vercel, selecione a   aba **"Armazenamento"** e, em seguida, o botão **"Conectar Banco de Dados"**  . Na aba  **"Criar Novo"**, escolha seu provedor Postgres favorito.
- Nosso banco de dados vazio é criado na região especificada. Como você criou o banco de dados Postgres em um projeto, criamos e adicionamos automaticamente as seguintes variáveis de ambiente ao projeto para você.

## Cofigurar as variáveis de ambiente
Abrir o **projeto Node.js** no VsCode abra um terminal **CTRL + '** tipo **CMD** e instale o interpretador de comandos vercel
```bash
npm i -g vercel@latest
```
- Link o seu projeto com a vercel e baixe as variáveis de ambiente
```hash
vercel link
vercel env pull .env
```
- Instale o CLI do Prisma
```bash
npm install prisma --save-dev
npm install @prisma/client
```
- Crie arquivo prisma/schema.prisma
```js
```
- Para implantar o esquema do banco de dados utilize o comando a seguir:
```bash
npx prisma db push
```
- Por motivos de segurança a rede SESI/SENAI bloqueia este tipo de conexão então este tutorial deve ser executado com uma outra conexão com a internet.
- Se estiver em uma internet externa a rede SESI/SENAI. Parabéns, as tabelas foram criadas! Vamos em frente adicionar alguns dados fictícios iniciais usando o Prisma Studio. Execute o seguinte comando:
```bash
npx prisma studio
```
![Prisma studio](./prisma-studio.avif)
- Caso altere algum dado no Schema usamos o comando abaixo para atualizar
```bash
npx prisma generate
```
- Podemos utilizar os comandos de migracão e para semear o banco de dados
```bash
npx prisma migrate dev --name init
npx prisma db seed
```
- Por fim para fazer o deploy da aplicação na vercel utilize o comando:
```bash
vercel deploy
```

## [Artigo Fonte](https://vercel.com/guides/nextjs-prisma-postgres)