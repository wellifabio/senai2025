const jsonwebtoken = require("jsonwebtoken");
const Middlewares = require('../middlewares/auth');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const login = async (req, res) => {
    const { email, senha, validade } = req.body;

    try {
        const usuario = await prisma.usuario.findFirst({
            where: {
                email: email,
            }
        });

        if (!usuario) {
            return res.status(401).json({ message: 'E-mail ou Senha incorretos!' });
        } else {
            const isValidPassword = await Middlewares.validatePassword(senha, usuario.senha);
            if (!isValidPassword) {
                return res.status(401).json({ message: 'E-mail ou Senha incorretos!' });
            }
            const token = jsonwebtoken.sign(
                {
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                },
                process.env.SECRET_JWT,
                { expiresIn: validade ? validade + "min" : "60min" }
            );
            res.status(200).json({ token: token });
        }
    } catch (err) {
        console.error('Erro no login:', err);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

const validaToken = (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).send({ message: "Acesso negado. Nenhum token recebido." }).end();
    }

    jsonwebtoken.verify(token, process.env.SECRET_JWT, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: "Token inválido ou expirado." }).end();
        }
        req.user = decoded;
        res.status(200).json({ message: req.user });
    });
};

module.exports = {
    login,
    validaToken
}