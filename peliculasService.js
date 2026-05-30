const Pelicula = require('../models/Pelicula');

// Obtener todas las películas
async function getAll(req, res) {
  const peliculas = await Pelicula.findAll();
  res.json(peliculas);
}

// Obtener una película por id
async function getById(req, res) {
  const pelicula = await Pelicula.findByPk(req.params.id);
  if (pelicula) {
    res.json(pelicula);
  } else {
    res.status(404).json({ error: 'No encontrada' });
  }
}

// Crear una nueva película
async function create(req, res) {
  const nueva = await Pelicula.create(req.body);
  res.json(nueva);
}

// Actualizar una película existente
async function update(req, res) {
  const pelicula = await Pelicula.findByPk(req.params.id);
  if (pelicula) {
    await pelicula.update(req.body);
    res.json(pelicula);
  } else {
    res.status(404).json({ error: 'No encontrada' });
  }
}

// Eliminar una película
async function remove(req, res) {
  const pelicula = await Pelicula.findByPk(req.params.id);
  if (pelicula) {
    await pelicula.destroy();
    res.json({ mensaje: 'Eliminada' });
  } else {
    res.status(404).json({ error: 'No encontrada' });
  }
}

module.exports = { getAll, getById, create, update, remove };
