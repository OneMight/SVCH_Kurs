const Router = require('express')
const router = new Router()

const pilotStatsController = require('../controllers/PilotStatsController')

router.get('/', pilotStatsController.getAllStat)
router.get('/:id', pilotStatsController.getPilotStat)
router.post('/create',pilotStatsController.createPilotStat)
module.exports = router