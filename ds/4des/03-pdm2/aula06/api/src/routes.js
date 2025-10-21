const express = require('express');

const router = express.Router();

const Professor = require('./controllers/professor');
const Turma = require('./controllers/turma');
const Atividade = require('./controllers/atividade');

router.post('/login', Professor.login);
router.post('/professor', Professor.create);
router.get('/professor', Professor.read);
router.get('/professor/:id', Professor.read);
router.patch('/professor', Professor.update);
router.delete('/professor/:id', Professor.del);

router.post('/turma', Turma.create);
router.get('/turma', Turma.read);
router.get('/turma/:id', Turma.read);
router.put('/turma/:id', Turma.update);
router.delete('/turma/:id', Turma.del);

router.post('/atividade', Atividade.create);
router.get('/atividade', Atividade.read);
router.get('/atividade/:id', Atividade.read);
router.put('/atividade/:id', Atividade.update);
router.delete('/atividade/:id', Atividade.del);

router.get('/', (req, res) => {
    return res.json({
        titulo: "API Escola - Gestão de turmas",
        version: "1.0.0",
        rotas: [
            { metodo: "POST", rota: "/login", descricao: "Login de professor" },
            { metodo: "POST", rota: "/professor", descricao: "Criar um novo professor" },
            { metodo: "GET", rota: "/professor", descricao: "Listar todos os professores" },
            { metodo: "GET", rota: "/professor/:id", descricao: "Listar um professor pelo ID" },
            { metodo: "PATCH", rota: "/professor", descricao: "Atualizar um professor" },
            { metodo: "DELETE", rota: "/professor/:id", descricao: "Deletar um professor pelo ID" },
            { metodo: "POST", rota: "/turma", descricao: "Criar uma nova turma" },
            { metodo: "GET", rota: "/turma", descricao: "Listar todas as turmas" },
            { metodo: "GET", rota: "/turma/:id", descricao: "Listar uma turma pelo ID" },
            { metodo: "PUT", rota: "/turma", descricao: "Atualizar uma turma" },
            { metodo: "DELETE", rota: "/turma/:id", descricao: "Deletar uma turma pelo ID" },
            { metodo: "POST", rota: "/atividade", descricao: "Criar uma nova atividade" },
            { metodo: "GET", rota: "/atividade", descricao: "Listar todas as atividades" },
            { metodo: "GET", rota: "/atividade/:id", descricao: "Listar uma atividade pelo ID" },
            { metodo: "PUT", rota: "/atividade", descricao: "Atualizar uma atividade" },
            { metodo: "DELETE", rota: "/atividade/:id", descricao: "Deletar uma atividade pelo ID" }
        ]
    })
});

module.exports = router;