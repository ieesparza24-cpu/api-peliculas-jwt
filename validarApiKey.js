function validarApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === '12345') {
    next();
  } else {
    res.status(401).json({ error: 'API Key inválida' });
  }
}

module.exports = validarApiKey;
