const Router = require('express');
const router = new Router();
const savedPilotsController = require('../controllers/SavedPilotController')

router.get('/:id',savedPilotsController.getSavedPilotsForUser);
router.get('/',savedPilotsController.getAllSaved);
router.post('/save', savedPilotsController.addToSaved);
router.delete('/delete',savedPilotsController.deleteSavedPilot)

module.exports = router