const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const SECRET = 'clave_secreta';

router.post('/login', (req, res) => {
  const { usuario, password } = req.body;

  if (usuario === 'admin' && password === '12345') {

    const token = jwt.sign(
      { usuario: usuario },
      SECRET,
      { expiresIn: '1h' }
    );

    return res.json({
      token: token
    });
  }

  return res.status(401).json({
    error: 'Credenciales incorrectas'
  });
});

module.exports = router;