const Router = require('express'); // import router from express
const router = new Router(); // to create a new object from this router 

// указываем все необходимые запросы
router.post('/registration', ); // user registration
router.post('/login',); // authorization user
router.get('/auth',); //check authorization user (авторизован или нет, делаем по jwt токену)



module.exports = router; // export to use
