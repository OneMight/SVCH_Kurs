const Router = require('express');
const router = new Router();
const teamRouter = require('./TeamsRouter')
const pilotRouter = require('./PilotsRouter')
const groupRouter = require('./GoupRouter')
const trophiesRouter = require('./TrophiesRouter')

router.use('/teams',teamRouter);
router.use('/pilot',pilotRouter);
router.use('/group',groupRouter);
router.use('/trophies',trophiesRouter);

module.exports = router;