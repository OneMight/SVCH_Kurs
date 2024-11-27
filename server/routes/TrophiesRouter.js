const Router = require('express');
const router = new Router();
const TrophieController = require('../controllers/TrophiesController')
const trophieController = new TrophieController();
router.get('/',trophieController.getTrophies);
router.post('/createTrophie',trophieController.createTrophie);
router.put('/updateTrophie/:id',trophieController.UpdateTrophie);
router.delete('/deleteTrophie/:id',trophieController.DeleteTrophie);
router.get('/:id', trophieController.getById)
module.exports = router