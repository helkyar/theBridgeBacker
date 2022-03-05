let Manager = require("./Manager");
let Participants = require("../models/Participants");

class ParticipantsManager extends Manager {
  static queries = {
    getAll: "SELECT * FROM participants", // Array de participants
    getParticipant: "SELECT * FROM participants WHERE id=$1",
    postParticipant:
      "INSERT INTO participants (lastname,firstname,courseid,createdate) VALUES ($1,$2,$3,$4) RETURNING *;", //Array participant con user creado
    patchParticipant:
      "UPDATE participants SET lastName = $1,firstName = $2,login = $3,createdate = $4 WHERE id = $6", //Array participant con user modificado
    deleteParticipant: "DELETE FROM participants WHERE id=$1", //Array participant con user eliminado
  };

  static async getAllParticipants() {
    return await this.queryExec(this.queries.getAll, Participants);
  }

  static async getParticipant({ id }) {
    return await this.queryExec(this.queries.getParticipant, Participants, [
      id,
    ]);
  }

  static async postParticipants({ lastname, firstname, courseid, createdate }) {
    const params = [lastname, firstname, courseid, createdate];

    return await this.queryExec(
      this.queries.postParticipant,
      Participants,
      params,
    );
  }
  static async patchParticipant({
    id,
    lastname,
    firstname,
    courseid,
    createdate,
  }) {
    const params = [lastname, firstname, courseid, createdate, id];
    return await this.queryExec(
      this.queries.patchParticipant,
      Participants,
      params,
    );
  }
  static async deleteParticipant({ id }) {
    return await this.queryExec(this.queries.deleteParticipant, Participants, [
      id,
    ]);
  }
}

module.exports = ParticipantsManager;
