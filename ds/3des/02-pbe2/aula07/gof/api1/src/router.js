const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ titulo: 'Pedidos Exps. Patterns' });
});

module.exports = router;