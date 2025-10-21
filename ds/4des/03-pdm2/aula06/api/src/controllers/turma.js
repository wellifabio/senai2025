const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const create = async (req, res) => {
    try {
        const turma = await prisma.turma.create({
            data: req.body
        });
        return res.status(201).json(turma);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const read = async (req, res) => {
    if (req.params.id !== undefined) {
        const turma = await prisma.turma.findMany({
            where: {
                professorId: Number(req.params.id)
            },
            select: {
                "id": true,
                "nome": true,
                "professorId": true,
                "atividades": true
            }
        });
        return res.json(turma);
    } else {
        const turmaes = await prisma.turma.findMany({});
        return res.json(turmaes);
    }
};

const update = async (req, res) => {
    try {
        const turma = await prisma.turma.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(turma);
    } catch (error) {
        return res.status(404).json({ message: "Turma não encontrada" });
    }
};

const del = async (req, res) => {
    try {
        const turma = await prisma.turma.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(204).json(turma);
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ message: "Turma não encontrada" });
        } else if (error.code === 'P2003') {
            return res.status(409).json({ message: "Você não pode excluir uma turma com atividades cadastradas" });
        } else {
            return res.status(400).json({ error });
        }
    }
}

module.exports = {
    create,
    read,
    update,
    del
};