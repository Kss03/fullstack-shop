// import ApiError
const ApiError = require('../error/ApiError');

// И из самого файла ErrorHandingMiddleware экспортируем функцию которая по сути и является middleware
module.exports = function(err, req, res, next) {
    // err - error
    // req - request
    // res - response
    // next - функция, которой передадим следующему в цепочке middleware. 

    if (err instanceof ApiError) {
        return res.status(err.status).json( { message: err.message } );  
        // если класс  ошибки ApiError, то тогда на клиент возвращаем ответ (res) со статус-кодом, который будем получать из ошибки (err) и с сообщением (message), в которое эту ошибку поместим. И return прекращает выполнение функции
    }

    // а в ситуациях когда к нам попала ошибка, которая не является инстансом ApiError, то тогда вернем 500-ую ошибку и в сообщении укажем, что "ошибка была непредвиденной"
    return res.status(500).json( {message: "Unexpected error!"} );
}