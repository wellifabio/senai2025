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

const form = document.getElementById('formNovoPost');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const novoPost = {
        title: formData.get('titulo'),
        body: formData.get('conteudo')
    };
    try {
        await axios.post('https://jsonplaceholder.typicode.com/posts', novoPost);
        form.reset();
        fetchPosts();
    } catch (error) {
        console.error('Erro ao criar novo post:', error);
    }
});

fetchPosts();
