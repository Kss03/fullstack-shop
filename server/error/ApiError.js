
// универсальный handler из класса ApiError с родительским классом Error
class ApiError extends Error {
    // Реализовываем конструктор
    constructor (status, message) {// <= параметры

        super(); // Вызов родительского конструктора с помощью super()

        // и присваиваем то, что получаем параметрами
        this.status = status;
        this.message = message;
    }

    // Далее создадим несколько статических функций 
    // статические функции - это функции, которые можно вызывать без создания объекта. т.е можно обращаться напрямую к классу и вызывать ту или иную функцию

    static badRequest(message) {
        return new ApiError(404, message); // отсюда возвращаем новый объект ApiError первым параметром которого передаем статус-код, а втоорым сообщение которое будем получать параметром
        // 404 -- not found (server cannot find the requested resource)
    }

    static internal(message) {
        return new ApiError(500, message);
        // 500 -- Internal Server Eroor (the server encountered an unexpected condition that prevented it from fulfilling the request.)
    }

    static forbidden(message) {
        return new ApiError(403, message);
        // 403 -- forbidden (запрещенный, нет доступа к содержимому)
    }


}

module.exports = ApiError;