const servicioSchema = require('../schemas/servicioSchema');

async function getServicios(req, res) {

  try {
    const servicios = await servicioSchema.find();

    return res.status(200).json(servicios);
  } 
  catch (error) {
    console.error('Error trayendo los servicios:', error);
    return res.status(500).json({ message: 'No se pudieron traer los servicios' });
  }
}

module.exports = {
  getServicios
};