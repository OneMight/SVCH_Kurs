const Router = require('express');
const router = new Router();
const userController = require('../controllers/UserController')

router.get('/',userController.getUsers);
router.get('/:id',userController.getById);
router.put('/updateUser/:id', userController.updateUser);
router.post('/createUser', userController.createUser);
router.put('/blockUser/:id',userController.blockUser);

module.exports = router;