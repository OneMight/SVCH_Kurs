const Router = require('express');
const router = new Router();
const teamRouter = require('./TeamsRouter')
const pilotRouter = require('./PilotsRouter')
const groupRouter = require('./GoupRouter')
const trophiesRouter = require('./TrophiesRouter')
const StatsRouter = require('./PilotStatsRouter')
const BestCurcuitRouter = require('./BestCircuitRouter')
const NewsRouter = require('./NewsRouter')

router.use('/teams',teamRouter);
router.use('/pilot',pilotRouter);
router.use('/group',groupRouter);
router.use('/trophies',trophiesRouter);
router.use('/stats',StatsRouter);
router.use('/bestcurcuit', BestCurcuitRouter);
router.use('/news',NewsRouter)

module.exports = router;