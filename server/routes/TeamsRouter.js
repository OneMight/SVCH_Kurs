const Router = require('express');
const router = new Router();
const teamController = require('../controllers/TeamsController')

router.get('/',teamController.getTeams);
router.post('/createTeam',teamController.createTeam);
router.put('/updateTeam/:id',teamController.updateTeam);
router.delete('/deleteTeam/:id',teamController.deleteTeam);
router.get('/:id',teamController.getById);

module.exports = router
