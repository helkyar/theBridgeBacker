module.exports = class User {
    #id;
    #lastname;
    #firstname;
    #email;
    #login;
    #password;
    #rol;
    #courseid

    constructor({
        id,
        lastname,
        firstname,
        login,
        password,
        rol,
        email,
        courseid
    }) {
        this.#id = id;
        this.#lastname = lastname;
        this.#firstname = firstname;
        this.#email = email;
        this.#login = login;
        this.#password = password;
        this.#rol = rol;
        this.#courseid = courseid;
    }

    getObject() {
        return {
            id: this.#id,
            lastname: this.#lastname,
            firstname: this.#firstname,
            login: this.#login,
            password: this.#password,
            email: this.#email,
            rol: this.#rol,
            courseid: this.#courseid
        }
    }
};