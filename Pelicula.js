const { DataTypes } = require('sequelize');
const sequelize = require('../modules/db'); // tu conexión a SQLite

const Pelicula = sequelize.define('Pelicula', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING
  },
  anio: {
    type: DataTypes.INTEGER
  }
});

// Exportar el modelo correctamente
module.exports = Pelicula;
