const Router = require('express'); // import router from express
const router = new Router(); // to create a new object from this router  
const typeController = require('../controllers/typeController'); // import typeController для указания функций которые должны отрабатывать на тот или иной маршрут

// указываем все необходимые запросы
router.post('/', typeController.create) // создание типа
router.get('/', typeController.getAll) // получение всех типов
// попробовать создать метод DELETE



module.exports = router; // export to use
