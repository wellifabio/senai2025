const fLogin = document.getElementById('fLogin');
fLogin.addEventListener('submit', e => {
    e.preventDefault();
    const body = {
        user: fLogin.email.value,
        psw: fLogin.senha.value
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    fetch('http://localhost:4000/login', options)
        .then(response => response.json())
        .then(response => {
            if(response.message)
                alert(response.message);
            else if(response.token) {
                localStorage.setItem('token', response.token);
                window.location.href = './home.html';
            }
        })
        .catch(err => console.error(err));
});

document.getElementById('olho').addEventListener('click', function() {
  if(document.getElementById('senha').type == 'password') {
    document.getElementById('senha').type = 'text';
  } else {
    document.getElementById('senha').type = 'password';
  }
});