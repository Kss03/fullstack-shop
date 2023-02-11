// класс для логики соответствующего роутера с функциями к каждому запросу
class DeviceController {

    // To create a new type
    async create(req,res) {

    }

    // Function to get all devices from the database
    async getAll(req, res) {

    }

    // Function to get one device from a database
    async getOne(req, res) {

    }
}

// Экспорт нового объекта, созданного из этого класса, благодаря чему можно просто обращаться к функциям вызовом через точку (example: UserController.login())
module.exports = new DeviceController()