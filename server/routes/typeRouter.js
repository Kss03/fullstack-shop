const Router = require('express'); // import router from express
const typeController = require('../controllers/typeController');
const router = new Router(); // to create a new object from this router 

// указываем все необходимые запросы
router.post('/', typeController.create) // создание типа
router.get('/', typeController.getAll) // получение всех типов
// попробовать создать метод DELETE



module.exports = router; // export to use
