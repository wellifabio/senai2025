# Aula05 - Deploy React com Vite no GitHub Pages
A concluir um projeto front end com o framework Vite React podemos implantar nossa aplicação de forma simples e rápida no GitHub Pages. Para isso, siga os passos abaixo para implantar a aplicação do **Desafio da Aula04** no **Git Pages**.

## 1 - Criar um repositório no GitHub

Primeiro, crie um novo repositório no GitHub com o nome de **receitas-web** e suba sua aplicação com os comandos a seguir

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
git push -u origin main
```

## 2 - Configurar o Vite para GitHub Pages

No arquivo `vite.config.ts`, adicione a seguinte configuração para definir a base da sua aplicação:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/REPOSITORY_NAME/'
})
```

Substitua `REPOSITORY_NAME` pelo nome do seu repositório.

## 3 - Altere o package.json

No arquivo `package.json`, adicione um script para construir sua aplicação e um script para implantar no GitHub Pages:

```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
Acrescente também o caminho da homepage no início do `package.json`:

```json
{
  "homepage": "https://USERNAME.github.io/REPOSITORY_NAME/"
}
```

Substitua `USERNAME` pelo seu nome de usuário do GitHub e `REPOSITORY_NAME` pelo nome do seu repositório.
- O package.json deve ficar semelhante a este:

```json
{
  "homepage": "https://wellifabio.github.io/tarefas",
  "name": "reacttarefas",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@vitejs/plugin-react": "^5.0.1",
    "firebase": "^12.1.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "devDependencies": {
    "gh-pages": "^6.3.0",
    "vite": "^7.1.3"
  }
}
```
### 4 Para fazer o deploy rapidamente baixe a extensão "gh-pages" do npm

```bash
npm i gh-pages --save-dev
```
Podemos fazer o commit das configurações de deploy. e em seguida executar o deploy com o comando:

```bash
npm run deploy
```
Pronto! Sua aplicação React está agora implantada no GitHub Pages.

## Entrega
Envie o link da sua aplicação web neste **[formulário](https://forms.gle/tkuA6wV4Jq2KdQFd6)**