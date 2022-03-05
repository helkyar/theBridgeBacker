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
        lastName,
        firstName,
        login,
        password,
        rol,
        email,
    }) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.login = login;
        this.password = password;
        this.rol = rol;
    }

    getObject() {
        return {
            id: this.id,
            lastName: this.lastName,
            firstName: this.firstName,
            login: this.login,
            password: this.password,
            email: this.email,
            rol: this.rol
        }
    }
};