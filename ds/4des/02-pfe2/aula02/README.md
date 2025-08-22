# Aula02 - AXIOS
Nesta aula, vamos aprender a utilizar o **AXIOS**, uma biblioteca **JavaScript** para fazer requisições HTTP.

## Demonstração
No exemplo a seguir vamos criar uma página HTML que vai consumir em um arquivo JavaScript a API PlaceHolder.

### Instalação por CDN
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

#### Passo 01 criar uma pasta e um arquivo HTML
Crie uma pasta chamada `exemplo-axios` e dentro dela crie um arquivo `index.html` com o conteúdo a seguir:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Exemplo Axios</title>
</head>
<body>
    <h1>Exemplo de Requisição com Axios</h1>
    <div id="app"></div>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data;
                const appDiv = document.getElementById('app');
                posts.forEach(post => {
                    const postDiv = document.createElement('div');
                    postDiv.className = 'post';
                    postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
                    appDiv.appendChild(postDiv);
                });
            })
            .catch(error => {
                console.error('Erro ao fazer a requisição:', error);
            });
    </script>
</body>
</html>
```
### Passo 02 criar o arquivo `style.css`
O arquivo `style.css` deve conter o seguinte conteúdo:
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --c1: #f0f0f0;
    --c2: #333;
    --c3: #007bff;
    --c4: #28a745;
}

header{
    background-color: var(--c3);
    color: white;
    padding: 1rem;
    text-align: center;
}

main{
    padding: 2rem;
}

footer{
    background-color: var(--c2);
    color: white;
    text-align: center;
    padding: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0;
}

.post{
    background-color: var(--c1);
    border: 1px solid var(--c2);
    border-radius: 5px;
    margin: 1rem 0;
    padding: 1rem;
}
```
### Passo 03 Resultado
Execute o arquivo `index.html` em um navegador ou com o Live Server.
- O resultado será semelhante ao screeshot abaixo:
- ![Screenshot](./screenshot00.png)

## Exemplo 2
O mesmo programa, vamos estruturar para um arquivo JavaScript separado **importando** o **AXIOS**

### Passo 01 - Vamos criar o arquivo `script.js` com o conteúdo a seguir:
```js
import axios from "https://cdn.skypack.dev/axios";

const fetchPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        const appDiv = document.getElementById('app');
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
            appDiv.appendChild(postDiv);
        });
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
    }
};

fetchPosts();
```
### Passo 02 - Modificar o arquivo `index.html` para importar o `script.js`
```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Exemplo Axios</title>
</head>

<body>
    <header>
        <h1>Exemplo de Requisição com Axios</h1>
    </header>
    <main>
        <div id="app"></div>
    </main>
    <script type="module" src="script.js"></script>
</body>

</html>
```
### Passo 03 - Resultado
O resultado será o mesmo, porém a organização do código será melhorada.

## Exemplo 3
[Exemplo de projeto com Axios e JWT](https://github.com/wellifabio/pbe2-jwt-login-axios-2025.git)