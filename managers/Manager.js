const { Client } = require('pg')

class Manager {

    static #clientParams = {
        user: "postgres",
        host: "localhost",
        database: "thebridgeassistance",
        password: "1234",
        port: "5432"
    }
    static client = new Client(this.#clientParams)

}
module.exports = Manager;