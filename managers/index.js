const { Client } = require('pg')
const clientParams = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: process.env.PORT,
}
const client = new Client(clientParams);
const userManager = require('./userManger');

const manager = {
    //En un futuro definimos que tipo de peticion se le hace al manager por params
    userManager: () => {

        return userManager.getAllUsers(client)


    }
}