const Router = require('express');
const router = new Router();
const newsController = require('../controllers/NewsController')

router.get('/',newsController.getAllNews);
router.post('/create', newsController.createNews);
router.delete('/delete/:id', newsController.deleteNews)

module.exports = router