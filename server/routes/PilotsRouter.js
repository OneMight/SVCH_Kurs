const Router = require('express');
const router = new Router();
const pilotController = require('../controllers/PilotsController')

router.get('/',pilotController.getPilots);
router.post('/createPilot',pilotController.createPilot);
router.put('/updatePilot/:id',pilotController.updatePilot);
router.delete('/deletePilot/:id',pilotController.deletePilot);
router.get('/:id',pilotController.getById);
module.exports = router