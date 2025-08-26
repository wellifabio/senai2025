const usuario = JSON.parse(localStorage.getItem('usuario'));

if (!usuario || !usuario.accessToken) {
    window.location.href = 'login.html';
}

function sair() {
    localStorage.removeItem('usuario');
    window.location.href = 'login.html';
}

document.querySelector('h1').innerText = `${usuario.firstName} ${usuario.lastName}`;
const imagem = document.createElement('img');
imagem.src = usuario.image;
document.querySelector('header').appendChild(imagem);