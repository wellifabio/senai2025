class Item{
    constructor(id, produto, preco, quantidade) {
        this.id = id;
        this.produto = produto;
        this.preco = preco;
        this.quantidade = quantidade;
        this.subtotal = this.calcularSubtotal();
    }
    calcularSubtotal() {
        return this.preco * this.quantidade;
    }
}

module.exports = Item;