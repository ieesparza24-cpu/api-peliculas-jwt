const express = require('express');
const morgan = require('morgan');

const sequelize = require('./modules/db');

const peliculasRouter = require('./routes/Peliculas');
const authRouter = require('./routes/auth');

const validarApiKey = require('./middleware/validarApiKey');
const validarToken = require('./middleware/validarToken');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(validarApiKey);

app.use('/', authRouter);
app.use('/peliculas', validarToken, peliculasRouter);

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`API corriendo en puerto ${PORT}`);
  });
}).catch((error) => {
  console.error('Error al conectar la base de datos:', error);
});
