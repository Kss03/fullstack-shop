require('dotenv').config(); // import module dotenv to using .env
const express = require('express'); //import express 
const sequelize = require ('./db'); // import objecct from db.js
const models = require('./models/models'); // import database models

const fileUpload = require('express-fileupload'); // импорт пакета для работы с файлами
const cors = require('cors'); // import cors function from cors package
const router = require('./routes/index'); // import routers
const errorHandler = require('./middleware/ErrorHandingMiddleware'); // import middleware
const path = require('path'); // пакет для грамотной работы с путями файловой системы


const PORT = process.env.PORT || 5000; //import PORT from .env or 5000

const app = express(); // object declaration usage express function
app.use(cors()); // передаем функцию cors в функцию use, которую вызываем у app
app.use(express.json()); // передаем в app.use() express.json(), чтобы наше приложение могло парсить json
app.use(express.static(path.resolve(__dirname, 'static'))); // указываем явно, что файлы статики нужно раздавать как статику (например картинки девайсов)
app.use(fileUpload({})); // to register fileupload package
app.use('/api', router); // 1 параметр: url по которому router должен обрабатываться, 2 пар-р: сам роутер

// указываем замыкающий middleware, которым возвращаем ответ на клиент ! обязательно указывем последним !
app.use(errorHandler);




const start = async () => { // вызов функции для подключения к бд, async делает функцию асинхронной т.к. все операцции с бд являются асинхронными 

    // оборачиваем все функции в блок try ... catch для отлова потенциальных ошибок 
    try {
        await sequelize.authenticate() //импорт функции auntheticate с помощью которой устанавливается подключение к бд
        // await также для асинхронных функций
        await sequelize.sync() // сверяет состояние БД со описанной схемой данных ( опишем позже)

        // перенес ранее созданную функцию app.listen
        app.listen(PORT, () => {  //call listen function to specifying the port to listen
            console.log(`server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }

}

start() // запуск созданной функции