const express = require('express');
const router = express.Router();

const Pedido = require('./controllers/pedido');

router.get('/', (req, res) => {
    res.json({ titulo: 'Pedidos Exps. Patterns' });
});

router.post('/pedidos',Pedido.create);
router.get('/pedidos',Pedido.read);

module.exports = router;