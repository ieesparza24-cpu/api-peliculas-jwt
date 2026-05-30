const express = require('express');
const router = express.Router();
const service = require('../services/peliculasService');

router.get('/', service.getAll);
router.get('/:id', service.getById);
router.post('/', service.create);
router.put('/:id', service.update);
router.delete('/:id', service.remove);

module.exports = router;
