let Manager = require("./Manager");
const Assist = require("../models/Assist");

class AssistManager extends Manager {
  static queries = {
    getAll: "SELECT * FROM assistance;",
    getAssist: "SELECT * FROM assistance WHERE id=$1;",
    postAssist:
      "INSERT INTO assistance (participantId, classId, isPartial, coments, assistance) VALUES ($1,$2,$3,$4,$5) RETURNING *;", //Array assist con assist creado
    patchAssist:
      "UPDATE assistance SET participantId=$1, classId=$2, isPartial=$3, coments=$4, assistance=$5 WHERE id = $6 RETURNING *;", //Array assist con assist modificado
    deleteAssist: "DELETE FROM assistance WHERE id=$1;", //Array assist con assist eliminado
  };

  static async getAllAssists() {
    return await this.queryExec(this.queries.getAll, Assist);
  }

  static async getAssist({ id }) {
    return await this.queryExec(this.queries.getAssist, Assist, [id]);
  }

  static async postAssists({
    participantId,
    classId,
    isPartial,
    coments,
    assistance,
  }) {
    const params = [participantId, classId, isPartial, coments, assistance];
    return await this.queryExec(this.queries.postAssist, Assist, params);
  }
  static async patchAssists({
    id,
    participantId,
    classId,
    isPartial,
    coments,
    assistance,
  }) {
    const params = [participantId, classId, isPartial, coments, assistance, id];
    return await this.queryExec(this.queries.patchAssist, Assist, params);
  }
  static async deleteAssists({ id }) {
    return await this.queryExec(this.queries.deleteAssist, Assist, [id]);
  }
}

module.exports = AssistManager;
