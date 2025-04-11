const Router = require('express')
const router = new Router()
const bestCircuitController = require('../controllers/BestCircuitController')
router.get('/',bestCircuitController.getAllBestCircuit)
router.post('/createCircuit', bestCircuitController.createBestCurcuitPilot)

module.exports = router