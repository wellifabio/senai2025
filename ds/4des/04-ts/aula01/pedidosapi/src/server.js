const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const swaggerDoc = require('./swagger.json');
const routes = require('./router');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(routes);

app.listen(3001, (req,res) =>{
    console.log('API respondendo em http://localhost:3001');
    console.log('Documentação em http://localhost:3001/docs');
});