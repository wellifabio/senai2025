const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Middlewares = require('../middlewares/auth');
// const Email = require('../middlewares/email');

const read = async (req, res) => {
    try {
        const usuarios = await prisma.usuario.findMany();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuarios' });
    }
}

const create = async (req, res) => {
    try {
        req.body.senha = await Middlewares.createHash(req.body.senha);
        const usuario = await prisma.usuario.create({
            data: req.body
        });
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuario' });
    }
}

const reset = async (req, res) => {
    if (!req.body.email) {
        res.status(400).json({ error: 'Necessário o envio do email' }).end();
    }
    const senha = await Middlewares.createHash("senha000");
    try {
        const usuarios = await prisma.usuario.findMany({
            where: { email: req.body.email }
        });
        if (!usuarios || usuarios.length === 0) {
            return res.status(400).json({ erro: "Email não encontrado" }).end();
        }
        const usuario = await prisma.usuario.update({
            where: { email: req.body.email },
            data: { senha: senha }
        });
        // await Email.enviarEmail(req.body.email, "senha000");
        res.status(202).json({usuario: usuario, senhaProvisoria: "senha000"}).end();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuario' });
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    if (req.body.senha) req.body.senha = await Middlewares.createHash(req.body.senha);
    try {
        const usuario = await prisma.usuario.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.status(202).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuario' });
    }
}

const del = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.usuario.delete({
            where: { id: Number(id) }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuario' });
    }
}

module.exports = {
    read,
    create,
    reset,
    update,
    del
};