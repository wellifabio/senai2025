const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    try {
        const pedidos = await prisma.pedido.findMany();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pedidos' });
    }
}

const create = async (req, res) => {
    try {
        const pedido = await prisma.pedido.create({
            data: req.body
        });
        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar pedido' });
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const pedido = await prisma.pedido.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.status(202).json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pedido' });
    }
}

const del = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.pedido.delete({
            where: { id: Number(id) }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar pedido' });
    }
}

module.exports = {
    read,
    create,
    update,
    del
};