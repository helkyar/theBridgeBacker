class Manager {

    static clientParams = {
        user: process.env.USER,
        host: process.env.HOST,
        database: process.env.DB,
        password: process.env.PASSWORD,
        port: process.env.PORT
    }
}
module.exports = Manager;