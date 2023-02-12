const {Brand} = require('../models/models'); // импорт модели типа устройства 
const ApiError = require('../error/ApiError'); // import ApiError

// класс для логики соответствующего роутера с функциями к каждому запросу
class BrandController {

    // To create a new brand
    async create(req,res) {
        const {name} = req.body; //делаем деструктуризацию и из тела запроса (по скольку это post-запрос) извлекаем название этого бренда
        const brand = await Brand.create({name}) // затем с помощью функции create этот тип мы создаем (добавляем awate т.к функция асинхронна) параметром в функцию create передаем объект, где указываем нужные поля, в данном случае только название бренда, а id будет присваиваться автоматически
        return res.json(brand);
    }

    // Function to get all brands from the database
    async getAll(req, res) {
        const brands = await Brand.findAll(); // Create a variable "brand", and from the model "Brand" we called the function "findAll",  which will return all existing records in the database
        return res.json(brands); // return to the client all objects array
    }
}

// Экспорт нового объекта, созданного из этого класса, благодаря чему можно просто обращаться к функциям вызовом через точку (example: UserController.login())
module.exports = new BrandController()