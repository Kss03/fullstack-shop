const Router = require('express'); // import router from express
const userController = require('../controllers/userController');
const router = new Router(); // to create a new object from this router 

// указываем все необходимые запросы
router.post('/registration', userController.registration); // user registration
router.post('/login', userController.login); // authorization user
router.get('/auth', userController.check); //check authorization user (авторизован или нет, делаем по jwt токену)



module.exports = router; // export to use
