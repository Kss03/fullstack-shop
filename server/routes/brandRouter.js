const Router = require('express'); // import router from express
const brandController = require('../controllers/brandController');
const router = new Router(); // to create a new object from this router 

// указываем все необходимые запросы
router.post('/', brandController.create) // создание бренда
router.get('/', brandController.getAll) // получение всех брендов
// попробовать создать метод DELETE



module.exports = router; // export to use
