const Router = require('express');
const router = new Router();
const teamRouter = require('./TeamsRouter')
const pilotRouter = require('./PilotsRouter')
const groupRouter = require('./GoupRouter')
const trophiesRouter = require('./TrophiesRouter')
const StatsRouter = require('./PilotStatsRouter')
const BestCurcuitRouter = require('./BestCircuitRouter')
const NewsRouter = require('./NewsRouter')
const UserRouter = require('./UserRouter')
const SavedPilotRouter = require('./SavedPilotRouter')
router.use('/teams',teamRouter);
router.use('/pilot',pilotRouter);
router.use('/group',groupRouter);
router.use('/trophies',trophiesRouter);
router.use('/stats',StatsRouter);
router.use('/bestcurcuit', BestCurcuitRouter);
router.use('/news',NewsRouter)
router.use('/user',UserRouter)
router.use('/savedpilots',SavedPilotRouter)

router.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(), 
        timestamp: new Date().toISOString()
    });
});

module.exports = router;