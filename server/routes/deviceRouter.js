const Router = require('express'); // import router from express
const deviceController = require('../controllers/deviceController');
const router = new Router(); // to create a new object from this router 

// указываем все необходимые запросы
router.post('/', deviceController.create) // создание устройства
router.get('/', deviceController.getAll) // получение всех устройств
router.get('/:id', deviceController.getOne) // для получения отдельно взятого девайса
// попробовать создать метод DELETE



module.exports = router; // export to use
