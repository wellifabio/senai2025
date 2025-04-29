const express = require('express');
const router = express.Router();

const Pedido = require('./controllers/pedido');
const Item = require('./controllers/item');

router.get('/', (req, res) => {
    res.json({ titulo: 'Pedidos Exps. Patterns' });
});

router.post('/pedidos',Pedido.create);
router.get('/pedidos',Pedido.read);

router.post('/itens',Item.create);
router.get('/itens',Item.read);

module.exports = router;