const { Client } = require('pg')
const clientParams = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: process.env.PORT,
}
const client = new Client(clientParams);


const manager = {
    userManager: () => {
        await client.connect()
            //User manager examples
    }
}