const userManager = {
    //We expect a client already conected as param
    getAllUsers: async client => {

        try {
            await client.connect()
            let data = await client.query(getAll)
            await client.end();
            return data;

        } catch (error) {
            console.log('Error getAllUsers()');
            console.log(error);
        }
    }
}

const queries = {
    getAll: 'SELECT * FROM users'
}

module.exports = userManager;