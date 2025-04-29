const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const router = require('./src/router');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`API respondendo em http://localhost:${port}`);
});