const Router = require('express');
const router = new Router();
const groupsController = require('../controllers/GroupController')

router.get('/',groupsController.getGroups);
router.post('/createGroup',groupsController.createGroup);
router.put('/updateGroup/:id',groupsController.UpdateGroup);
router.delete('/deleteGroup/:id',groupsController.DeleteGroup);
router.get('/:id', groupsController.getById);

module.exports = router
