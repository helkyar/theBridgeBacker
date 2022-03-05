const { Client } = require("pg");

class Manager {

    static clientParams = {
        user: process.env.USER,
        host: process.env.HOST,
        database: process.env.DB,
        password: process.env.PASSWORD,
        port: process.env.PORT
    }

    static async queryExec(query, model, params) {
        let client = new Client(this.clientParams);
        try {
            client.connect();
            let data = await client.query(params ? query : query, params);
            let tempUsers = [];
            data.rows.map((e) => {
                tempUsers.push(new model(e));
            });
            // console.log(tempUsers);
            return tempUsers;
        } catch (error) {
            console.log("Error en managerUser");
            console.log(error);
            console.log(query);
        } finally {
            client.end();
        }
    }
}
module.exports = Manager;