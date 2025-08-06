const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    try {
        const produtos = await prisma.produto.findMany();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
}

const create = async (req, res) => {
    try {
        const produto = await prisma.produto.create({
            data: req.body
        });
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const produto = await prisma.produto.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.status(202).json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
}

const del = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.produto.delete({
            where: { id: Number(id) }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
}

module.exports = {
    read,
    create,
    update,
    del
};