class Pedido{

    itens = [];

    constructor(id, cliente) {
        this.id = id;
        this.cliente = cliente;
        this.data = new Date();
    }

    addItem(item) {
        this.itens.push(item);
    }
}

module.exports = Pedido;