const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
const port = 3000;
const version = "v1";
const router = require('./routes/routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`/api/${version}/`, router);

// Servir la documentation Swagger UI
app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});