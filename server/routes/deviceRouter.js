const Router = require('express'); // import router from express
const router = new Router(); // to create a new object from this router 

// указываем все необходимые запросы
router.post('/', ) // создание устройства
router.get('/',) // получение всех устройств
router.get('/:id',) // для получения отдельно взятого девайса
// попробовать создать метод DELETE



module.exports = router; // export to use
