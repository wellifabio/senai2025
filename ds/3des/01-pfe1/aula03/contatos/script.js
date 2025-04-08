const cadastro = document.querySelector('header form');
const tcorpo = document.querySelector('main tbody');
const listaArmazenada = JSON.parse(window.localStorage.getItem('contatos'));

if(!listaArmazenada){
    window.localStorage.setItem('contatos', JSON.stringify([]));
    alert('Esta página armazena dados sensíveis!');
    listaArmazenada = [];
}else{
    preencherTabela();
}

cadastro.addEventListener('submit', async e =>{
    e.preventDefault();
    const novoRegistro = {
        nome: cadastro.nome.value,
        email: cadastro.email.value
    };
    listaArmazenada.push(novoRegistro);
    await preencherTabela();
    await salvar();
});

async function preencherTabela(){
    tcorpo.innerHTML = '';
    listaArmazenada.forEach((c, i) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${c.nome}</td>
            <td>${c.email}</td>
            <td>
                <button class="btn btn-danger" onclick="excluir(${i})">-</button>
            </td>
        `;
        tcorpo.appendChild(tr);
    });
}

async function salvar(){
    window.localStorage.setItem('contatos', JSON.stringify(listaArmazenada));
}

function excluir(i){
    if(confirm('Deseja realmente excluir?')){
        listaArmazenada.splice(i, 1);
        preencherTabela();
        salvar();
    }
}