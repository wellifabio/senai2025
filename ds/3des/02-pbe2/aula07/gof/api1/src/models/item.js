class ItemBuilder{
    constructor(body){
        this.pedidoId = body.pedidoId;
        this.produto = body.produto;
        this.quantidade = body.quantidade;
        this.preco = body.preco;
        this.subtotal = body.quantidade * body.preco;
    }
}

module.exports = ItemBuilder;