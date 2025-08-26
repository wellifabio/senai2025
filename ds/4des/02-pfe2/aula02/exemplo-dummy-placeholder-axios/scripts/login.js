const url = 'https://dummyjson.com/auth/';
import axios from "https://cdn.skypack.dev/axios";

//Fazer login na API dummyjson
const forms = document.querySelector('form');
forms.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dados = {
        username: forms.username.value,
        password: forms.password.value,
        expiresInMins: 5
    }
    try{
        const resp = await axios.post(url+'login', dados)
        if(resp.data.accessToken){
            localStorage.setItem('usuario', JSON.stringify(resp.data))
            window.location.href = 'posts.html';
        }else{
            alert('Usuário ou senha inválidos');
        }
    }catch(error){
        console.error(error)
        alert('Credenciais inválidas');
    }
});