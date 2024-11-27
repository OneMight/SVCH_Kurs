const Router = require('express');
const router = new Router();
const PilotController = require('../controllers/PilotsController')
const pilotController = new PilotController();
router.get('/',pilotController.getPilots);
router.post('/createPilot',pilotController.createPilot);
router.put('/updatePilot/:id',pilotController.updatePilot);
router.delete('/deletePilot/:id',pilotController.deletePilot);

module.exports = router