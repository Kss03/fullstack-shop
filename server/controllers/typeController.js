const {Type} = require('../models/models'); // импорт модели типа устройства 
const ApiError = require('../error/ApiError'); // import ApiError

// класс для логики соответствующего роутера с функциями к каждому запросу
class TypeController {

    // To create a new type
    async create(req, res) {
        const {name} = req.body; //делаем деструктуризацию и из тела запроса (по скольку это post-запрос) извлекаем название этого типа
        const type = await Type.create({name}) // затем с помощью функции create этот тип мы создаем (добавляем awate т.к функция асинхронна) параметром в функцию create передаем объект, где указываем нужные поля, в данном случае только название типа, а id будет присваиваться автоматически
        return res.json(type);
    }

    // Function to get all types from the database
    async getAll(req, res) {
        const types = await Type.findAll(); // Create a variable "type", and from the model "Type" we called the function "findAll",  which will return all existing records in the database
        return res.json(types); // return to the client all objects array
    }
}

// Экспорт нового объекта, созданного из этого класса, благодаря чему можно просто обращаться к функциям вызовом через точку (example: UserController.login())
module.exports = new TypeController();