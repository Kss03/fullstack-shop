// класс для логики соответствующего роутера с функциями к каждому запросу
class UserController {

    //регоистрация пользователя ( post request)
    async registration(req,res) {

    }

    // вход в аккаунт ( post req )
    async login(req, res) {

    }

    // проверка авторизации ( get response )
    async check(req, res) {
        
    }
}

// Экспорт нового объекта, созданного из этого класса, благодаря чему можно просто обращаться к функциям вызовом через точку (example: UserController.login())
module.exports = new UserController()