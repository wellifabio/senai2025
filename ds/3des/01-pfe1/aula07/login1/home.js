const token = localStorage.getItem('token');
if (!token) {
    window.location.href = '/index.html';
}

const usuario = JSON.parse(atob(token.split('.')[1]));
document.querySelector('header h1').innerHTML = usuario.name;
document.querySelector('header img').src = usuario.avatar;


const options = {
    method: 'GET',
    headers: {
        'User-Agent': 'insomnia/11.1.0',
        Authorization: `Bearer ${token}`
    }
};

fetch('http://localhost:4000/posts', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        const main = document.querySelector('main');
        response.forEach(post => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.summary}</p>
                <p>❤️ ${post.likes}👁️ ${post.views} - ${new Date(post.date).toLocaleDateString()}</p>           
            `;
            main.appendChild(card);
        });
    })
    .catch(err=>sair());


function sair() {
    localStorage.removeItem('token');
    window.location.href = '/index.html';
}