module.exports = class User {
    id;
    lastName;
    firstName;
    email;
    login;
    password;
    rol;

    constructor({
        id,
        lastname,
        firstname,
        login,
        password,
        rol,
        email,
    }) {
        this.id = id;
        this.lastName = lastname;
        this.firstName = firstname;
        this.email = email;
        this.login = login;
        this.password = password;
        this.rol = rol;
    }

    getObject() {
        return {
            id: this.id,
            lastname: this.lastname,
            firstname: this.firstname,
            login: this.login,
            password: this.password,
            email: this.email,
            rol: this.rol
        }
    }
};