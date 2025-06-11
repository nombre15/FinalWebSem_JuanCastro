const {Router} = require('express');
const router = Router();
const servicioAgente = require('../agentes/servicioAgente');

router.get('/getServicios', servicioAgente.getServicios);

router.get('/test', (req, res) => {
  res.json({ status: "ok" });
});

module.exports = router;
