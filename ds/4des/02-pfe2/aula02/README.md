# Aula02 - AXIOS
Nesta aula, vamos aprender a utilizar o **AXIOS**, uma biblioteca **JavaScript** para fazer requisições HTTP.

## Demonstração
No exemplo a seguir vamos criar uma página HTML que vai consumir em um arquivo JavaScript a API PlaceHolder.

### Instalação por CDN
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

## Passo 1 criar uma pasta e um arquivo HTML
Crie uma pasta chamada `exemplo-axios` e dentro dela crie um arquivo `index.html` com o conteúdo a seguir:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

## [Exemplo de projeto com Axios e JWT](https://github.com/wellifabio/pbe2-jwt-login-axios-2025.git)