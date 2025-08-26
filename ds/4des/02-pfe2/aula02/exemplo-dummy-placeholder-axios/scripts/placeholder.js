const url = 'https://jsonplaceholder.typicode.com/posts/';
const url2 = 'https://jsonplaceholder.typicode.com/post/';
import axios from "https://cdn.skypack.dev/axios";

const main = document.querySelector('main');

try {
    const resp = await axios.get(url);
    resp.data.forEach(post => {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        const button = document.createElement('button');
        button.textContent = 'Comentarios';
        button.onclick = () => verComentarios(post.id);
        div.appendChild(button);
        main.appendChild(div);
    });
} catch (error) {
    console.error(error);
}

async function verComentarios(id) {
    const resp = await axios.get(url2 + id + '/comments');
    const modal = document.getElementById('modal');
    modal.classList.remove('oculto');
    const postDetails = document.getElementById('post-details');
    postDetails.innerHTML = '';
    resp.data.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${post.name}</h2>
            <p>${post.email}</p>
            <p>${post.body}</p>
        `;
        postDetails.appendChild(div);
    });
}