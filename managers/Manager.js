const { Client } = require('pg')

class Manager {

    static #clientParams = {
        user: process.env.USER,
        host: process.env.HOST,
        database: process.env.DB,
        password: process.env.PASSWORD,
        port: process.env.PORT
    }
    static client = new Client(this.#clientParams)

}
console.log();
module.exports = Manager;