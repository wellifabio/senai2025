# Aula03 - ORM Prisma
- ORM (Object Relationship Management)
## Demonstração
Projeto modelo com prisma **[SNOOPY PetShop](https://github.com/wellifabio/pbe2-aula03-prisma-2025.git)**

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