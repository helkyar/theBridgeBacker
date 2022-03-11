let Manager = require("./Manager");
const Assist = require("../models/Assist");

class AssistManager extends Manager {
  static queries = {
    getAll: "SELECT * FROM assistance;",
    getAssist: "SELECT * FROM assistance WHERE id=$1;",
    getAssistClass: "SELECT * FROM assistance WHERE classid=$1;",
    postAssist:"INSERT INTO assistance (participantid, classid, ispartial, coments, assistance) VALUES ($1,$2,$3,$4,$5) RETURNING *;", //Array assist con assist creado
    patchAssist:
      "UPDATE assistance SET participantid=$1, classid=$2, ispartial=$3, coments=$4, assistance=$5 WHERE id = $6 RETURNING *;", //Array assist con assist modificado
    deleteAssist: "DELETE FROM assistance WHERE id=$1;", //Array assist con assist eliminado
  };

  static async getAllAssists() {
    return await this.queryExec(this.queries.getAll, Assist);
  }

  static async getAssist({ id }) {
    return await this.queryExec(this.queries.getAssist, Assist, [id]);
  }
  static async getAssistClass({ classid }) {
    return await this.queryExec(this.queries.getAssist, Assist, [classid]);
  }
  static async postAssists({
    participantid,
    classid,
    ispartial,
    coments,
    assistance,
  }) {
    const params = [participantid, classid, ispartial, coments, assistance];
    return await this.queryExec(this.queries.postAssist, Assist, params);
  }
  static async patchAssists({
    id,
    participantid,
    classid,
    ispartial,
    coments,
    assistance,
  }) {
    const params = [participantid, classid, ispartial, coments, assistance, id];
    return await this.queryExec(this.queries.patchAssist, Assist, params);
  }
  static async deleteAssists({ id }) {
    return await this.queryExec(this.queries.deleteAssist, Assist, [id]);
  }
}

module.exports = AssistManager;
