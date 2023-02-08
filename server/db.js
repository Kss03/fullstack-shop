const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    //import variables
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        //object
        dialect: 'postgres', // used Database Management System (СУБД)
        // import host & port
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
)