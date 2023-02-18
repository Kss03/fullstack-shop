const uuid = require('uuid'); // import package to generate a unique id (for example, device image)
const path = require('path'); // package to correct work with the filesystem for all operating systems
const {Device} = require('../models/models'); // import device model from the models
const ApiError = require('../error/ApiError'); // import ApiError

// класс для логики соответствующего роутера с функциями к каждому запросу
class DeviceController {

    // To create a new type
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info,} = req.body; // to receive the data from request body
            const {img} = req.files; // to receive the image file

            let fileName = uuid.v4() + ".jpg"; // create a filename for image, usage "v4" function from "uuid" and add ".img" file format
            img.mv(path.resolve(__dirname, "..", 'static', fileName)) //с помощью функции mv() переместили в папку static        
            const device = await Device.create({
                name,
                price,
                brandId,
                typeId,
                img: fileName, // for the database, we post a filename like an image

            });

            return res.json(device);

        } catch(e) { // в случае ошибки передаем параметром саму ошибку
            next(ApiError.badRequest(e.message)); 
        }
        
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