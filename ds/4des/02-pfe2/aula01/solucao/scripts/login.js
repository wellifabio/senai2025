const url = 'https://dummyjson.com/auth/';

//Redireciona para a página de posts se o token for válido
async function direcionamento() {
    if (await validaToken()) {
        window.location.href = 'posts.html';
    } else {
        localStorage.removeItem('usuario');
    }
}

direcionamento();

//Método para fazer login via API
const forms = document.querySelector('form');
forms.addEventListener('submit', async (event) => {
    event.preventDefault();
    const dados = {
        username: forms.username.value,
        password: forms.password.value,
        expiresInMins: 5
    }
    fetch(url + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => {
            if (data.accessToken) {
                console.log('Login bem-sucedido:', data);
                localStorage.setItem('usuario', JSON.stringify(data));
                window.location.reload();
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});

//Método para validar o token de acesso
async function validaToken() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    let result = false;
    if (usuario) {
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + usuario.accessToken,
            }
        };

        await fetch(url + 'me', options)
            .then(response => response.json())
            .then(response => {
                if (response.id) {
                    result = true;
                }
            })
            .catch(err => console.error(err));
    }
    return result;
}
