// Função para adicionar um nome ao localStorage
function addName() {
    const input = document.getElementById('nameInput');
    const name = input.value.trim();

    if (name === "") {
        alert("Digite um nome válido!");
        return;
    }

    // Pega o array atual ou cria um novo
    let names = JSON.parse(localStorage.getItem("names")) || [];

    names.push(name);
    localStorage.setItem("names", JSON.stringify(names));

    alert("Nome cadastrado com sucesso!");
    input.value = "";
}

// Função para exibir a lista de nomes na list.html
function showNameList() {
    const listElement = document.getElementById("nameList");
    const names = JSON.parse(localStorage.getItem("names")) || [];

    if (names.length === 0) {
        listElement.innerHTML = "<li>Nenhum nome cadastrado.</li>";
        return;
    }

    listElement.innerHTML = ""; // Limpa a lista

    names.forEach((name, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${name}`;
        listElement.appendChild(li);
    });
}

// Limpar a lista de nomes
function clearList() {
    if (confirm("Tem certeza que deseja apagar todos os nomes?")) {
        localStorage.removeItem("names");
        location.reload();
    }
}