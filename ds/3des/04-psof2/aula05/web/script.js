const uri = "http://localhost:5000";

//Obter título da API
fetch(uri)
    .then(resp => resp.json())
    .then(dados => {
        document.querySelector("header h1").textContent = dados.titulo;
    });

//Colocar a data de hoje no rodapé
document.querySelector("footer p").textContent = new Date().toLocaleDateString();

//Preencher o main com cards de produtos obtidos da pasta assets no próprio front-end
fetch("./assets/produtos.json")
    .then(resp => resp.json())
    .then(dados => {
        const main = document.querySelector("main");
        dados.forEach(produto => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h2>${produto.produto}</h2>
                <img src="${produto.imagem}" alt="${produto.nome}">
                <p>${produto.descricao}</p>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button>Comprar</button>
            `;
            main.appendChild(card);
        });
    });

//Cadastrar novo cliente
const cadCli = document.querySelector("#novoCli form");
cadCli.addEventListener("submit", event => {
    event.preventDefault();
    fetch(`${uri}/clientes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: cadCli.nome.value,
            cpf: cadCli.cpf.value != "" ? cadCli.cpf.value : null
        })
    })
        .then(resp => resp.json())
        .then(dados => {
            if (dados.id != undefined) {
                alert("Cliente cadastrado com sucesso!");
            } else {
                alert("Erro ao cadastrar cliente!");
                window.location.reload();
            }
            return dados;
        })
        .then(dados => {
            if (dados.id != undefined && cadCli.telefone.value != "") {
                cadTelefone(dados.id, cadCli.telefone.value);
            } else {
                window.location.reload();
            }
        });

});

//Cadastrar telefone
function cadTelefone(id, telefone) {
    fetch(`${uri}/telefones`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            clienteId: id,
            numero: telefone,
            tipo: "Celular"
        })
    })
        .then(resp => resp.status)
        .then(status => {
            if (status == 201) {
                alert("Telefone cadastrado com sucesso!");
            } else {
                alert("Erro ao cadastrar telefone!");
            }
        });
}