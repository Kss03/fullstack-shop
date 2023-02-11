const ApiError = require('../error/ApiError'); // import class ApiError

// класс для логики соответствующего роутера с функциями к каждому запросу
class UserController {

    //регоистрация пользователя ( post request)
    async registration(req,res) {

    }

    // вход в аккаунт ( post req )
    async login(req, res) {

    }

    // проверка авторизации ( get response )
    async check(req, res, next) {
        const {id}=req.query;
        if  (!id) {
            // Если пользователь не указал id, то вызываем функцию next(). В нее предаем одну из функций которая есть в ApiError( в данном случае badRequest) и параметром передаем какое-нибудь сообщение. return-ом останавливаем код
            return next(ApiError.badRequest('Не задан ID'));
        }
        res.json(id); // возврат высланного ID 
    }
}

// Экспорт нового объекта, созданного из этого класса, благодаря чему можно просто обращаться к функциям вызовом через точку (example: UserController.login())
module.exports = new UserController()