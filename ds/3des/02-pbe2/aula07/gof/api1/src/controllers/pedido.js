const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const pedido = require('../models/pedido');

const create = async (req, res) => {
    try {
        const { cliente } = req.body;
        //Se não informar o cliente, o pedido é criado como "Balcão" (Patthern Builder)
        if (!cliente) {
            const ped = await pedido.create({ data: pedido });
            res.status(201).json(ped);
        } else {
            //Senão, o pedido é criado com os dados informados no body (corpo da requisição)
            const ped = await pedido.create({ data: req.body });
            res.status(201).json(ped);
        }
    }catch (e) {
        res.status(500).json(e);
    }
}

const read = async (req, res) => {
    const pedidos = await prisma.pedido.findMany();
    res.json(pedidos);
}

module.exports = {
    create,
    read
}