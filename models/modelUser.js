

class User {
  #id;
  #courseId;
  #lastName;
  #firstName;
  #email;
  #login;
  #password;
  #rol;
  static userManager = require("../managers/UserManager");

  constructor(id, courseId, lastName, firstName, login, password, rol, email) {
    this.#id = id;
    this.#courseId = courseId;
    this.#lastName = lastName;
    this.#firstName = firstName;
    this.#email = email;
    this.#login = login;
    this.#password = password;
    this.#rol = rol;
  }
}

module.exports = User;
