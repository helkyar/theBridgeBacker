const { Client } = require("pg");

class Manager {
    static clientParams = {
        user: process.env.USER,
        host: process.env.HOST,
        database: process.env.DB,
        password: process.env.PASSWORD,
        port: process.env.PORT,
    };

    static async queryExec(query, model, params) {
        let client = new Client(this.clientParams);
        try {
            client.connect();
            console.log(params,'params');
            console.log(query,'query');
            let data = params ?
            await client.query(query, params) :
            await client.query(query);
            let tempUsers = [];
            console.log(data.rows, 'data en manager');
            data.rows.map((e) => {
                tempUsers.push(new model(e));
            });
            return tempUsers;
        } catch (error) {
            console.log("Error en Query");
            console.log(error);
            console.log(query);
            return undefined;
        } finally {
            client.end();
        }

    }
}
module.exports = Manager;