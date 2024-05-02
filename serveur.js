const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Importez votre fichier JSON Swagger ici
const port = 3000;
const version = 'v1';
const router = require('./routes/routes');
const app = express();
const Music = require('./models/musics')


const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './DB/database.sqlite',
    database: './DB/database.sqlite'

  });



  (async () => {
    await Music.sync({ force: true }).then(() => {
      console.log('Models synchronized successfully.');
    }).catch(e => {
      console.log(e);
    });
    const music1 = await Music.create({ cover: "harry_styles-watermelon_sugar.jpg", sound: "Harry_Styles-Watermelon_Sugar.mp3", title: "Harry Styles - Watermelon Sugar", category: "pop"});
    const music2 = await Music.create({ cover: "THOMAS_styles-watermelon_sugar.jpg", sound: "Harry_Styles-Watermelon_Sugar.mp3", title: "Harry Styles - Watermelon Sugar", category: "pop"});
    const music3 = await Music.create({ cover: "Lucas_styles-watermelon_sugar.jpg", sound: "Harry_Styles-Watermelon_Sugar.mp3", title: "Harry Styles - Watermelon Sugar", category: "pop"});
    const music4 = await Music.create({ cover: "Matt_styles-watermelon_sugar.jpg", sound: "Harry_Styles-Watermelon_Sugar.mp3", title: "Harry Styles - Watermelon Sugar", category: "pop"});
    

    //console.log(await Music.findAll());
  })();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`/api/${version}`, router);

// Middleware pour afficher la documentation Swagger
app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});