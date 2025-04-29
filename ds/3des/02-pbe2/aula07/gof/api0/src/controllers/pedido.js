const Pedido = require('../models/builderPedido');
const Item = require('../models/builderItem');

const pedido = new Pedido(1, "Arnaldo");

const readPedido = async (req, res) => {
    res.json(pedido);
}

const createItem = async (req, res) => {
    const { produto, preco, quantidade } = req.body;
    const item = new Item(pedido.itens.length + 1, produto, preco, quantidade)
    pedido.addItem(item);
    res.json(pedido);
}

module.exports = {
    readPedido,
    createItem
};