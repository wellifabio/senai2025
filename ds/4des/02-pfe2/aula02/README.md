# Aula09 - AXIOS
Nesta aula, vamos aprender a utilizar o AXIOS, uma biblioteca JavaScript para fazer requisições HTTP.

## Instalação por NPM
Para instalar o AXIOS, execute o seguinte comando:
```
npm install axios
```
```javascript
import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro ao fazer a requisição:', error);
  });
```

## Instalação por CDN
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

## [Exemplo de projeto com Axios e JWT](https://github.com/wellifabio/pbe2-jwt-login-axios-2025.git)