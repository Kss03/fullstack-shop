// класс для логики соответствующего роутера с функциями к каждому запросу
class TypeController {

    // To create a new type
    async create(req,res) {

    }

    // Function to get all types from the database
    async getAll(req, res) {

    }
}

// Экспорт нового объекта, созданного из этого класса, благодаря чему можно просто обращаться к функциям вызовом через точку (example: UserController.login())
module.exports = new TypeController()