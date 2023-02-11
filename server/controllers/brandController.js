// класс для логики соответствующего роутера с функциями к каждому запросу
class BrandController {

    // To create a new brand
    async create(req,res) {

    }

    // Function to get all brands from the database
    async getAll(req, res) {

    }
}

// Экспорт нового объекта, созданного из этого класса, благодаря чему можно просто обращаться к функциям вызовом через точку (example: UserController.login())
module.exports = new BrandController()