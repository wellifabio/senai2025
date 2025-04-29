const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Item = require('../models/item');

const create = async (req, res) => {
    try {
        //Aplicando o pattern Bulder para criar um novo item já calculando o subtotal
        const itemBuilder = new Item(req.body);
        const item = await prisma.item.create({ data: itemBuilder });
        res.status(201).json(item);
    } catch (e) {
        res.status(500).json(e.message);
    }
}

const read = async (req, res) => {
    const itens = await prisma.item.findMany();
    res.json(itens);
}

module.exports = {
    create,
    read
}