# Aula04 -  Vite / React
O **Vite** é uma ferramenta de construção rápida e leve para projetos **front-end**. Ele é especialmente útil para projetos React devido à sua configuração simples e desempenho otimizado.
- Nesta aula, vamos configurar um projeto React usando Vite e criar uma aplicação simples de livro de receitas que permite aos usuários ver em forma de cards as receitas disponíveis no arquivo `receitas.json` com os dados a seguir:

```json
{
  "receitas": [
    {
      "id": 1,
      "titulo": "Bolo de Cenoura",
      "ingredientes": [
        "2 xícaras de cenoura ralada",
        "1 xícara de açúcar",
        "1/2 xícara de óleo",
        "3 ovos",
        "2 xícaras de farinha de trigo",
        "1 colher de sopa de fermento em pó"
      ],
      "modoPreparo": "Bata no liquidificador a cenoura, o açúcar, o óleo e os ovos. Misture com os ingredientes secos e asse em forno pré-aquecido a 180°C por 40 minutos."
    },
    {
      "id": 2,
      "titulo": "Pão de Queijo",
      "ingredientes": [
        "250g de polvilho doce",
        "100ml de leite",
        "50ml de óleo",
        "1 ovo",
        "100g de queijo minas ralado",
        "sal a gosto"
      ],
      "modoPreparo": "Misture todos os ingredientes até formar uma massa homogênea. Modele os pães e asse em forno pré-aquecido a 180°C por 20 minutos."
    }
  ]
}
```

## Iniciando o novo projeto WEB receitas com Vite
Crie uma pasta raiz, abra com **VS Code** e execute o seguinte comando no terminal **CMD** ou **bash**:
```bash
npm create vite@latest receitas -- --template react
cd receitas
npm install
npm run dev
```
Pode aparecer alguma confirmação, pressione `y` para confirmar:
### Estrutura de Pastas
Será criada uma estrutura de pastas semelhante a esta:
```bash
meu-livro-receitas
├── public
│   └── vite.svg
├── src
│   ├── App.jsx
│   ├── main.jsx
│   └── assets
│       └── receitas.json
├── index.html
├── package.json
└── vite.config.js
```
- Para executar o projeto modelo base que foi criado basta segurar o CTRL e clicar no link que aparece no terminal.
```bash
 ➜  Local:   http://localhost:5173/
```
![Print](./prints/screenshot01.png)
### Codificando a Home Page
Vamos codificar a home pagem para listar em forma de cards cada receita do arquivo `receitas.json`, antes crie uma pasta chamada **mockups** dentro da pasta **public** do seu projeto e adicione o arquivo `public/mockups/receitas.json` com o conteúdo exibido no **início** desta aula:
- Agora vamos criar o componente principal da aplicação, a página `src/App.jsx` com o conteúdo a seguir:
```jsx
import { useEffect, useState } from 'react';
import receitasData from './assets/receitas.json';

function App() {
    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        // Simulando uma chamada à API
        const fetchData = async () => {
            const response = await fetch('/assets/receitas.json');
            const data = await response.json();
            setReceitas(data.receitas);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Receitas</h1>
            <div className="card-container">
                {receitas.map((receita) => (
                    <div className="card" key={receita.id}>
                        <h2>{receita.titulo}</h2>
                        <h3>Ingredientes:</h3>
                        <ul>
                            {receita.ingredientes.map((ingrediente, index) => (
                                <li key={index}>{ingrediente}</li>
                            ))}
                        </ul>
                        <h3>Modo de Preparo:</h3>
                        <p>{receita.modoPreparo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
```
