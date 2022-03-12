let Manager = require("./Manager");
let Participant = require("../models/Participants");

class ParticipantsManager extends Manager {
  static queries = {
    getAll: "SELECT * FROM participants", // Array de participants
    getParticipant: "SELECT * FROM participants WHERE id=$1",
    getParticipantCourse: "SELECT * FROM participants WHERE courseid=$1",
    postParticipant:
      "INSERT INTO participants (lastname,firstname,courseid,createdat) VALUES ($1,$2,$3,$4) RETURNING *;", //Array participant con user creado
    patchParticipant:
      "UPDATE participants SET lastname = $1,firstname = $2,courseid = $3,createdat = $4 WHERE id = $5", //Array participant con user modificado
    deleteParticipant: "DELETE FROM participants WHERE id=$1 RETURNING *", //Array participant con user eliminado
    countParticipant: "SELECT id FROM participants where courseid = $1;",
  };

  static async getAllParticipants() {
    return await this.queryExec(this.queries.getAll, Participant);
  }

  static async getParticipant({ id }) {
    return await this.queryExec(this.queries.getParticipant, Participant, [id]);
  }
  static async getParticipantCourse({ courseid }) {
    return await this.queryExec(
      this.queries.getParticipantCourse,
      Participant,
      [courseid],
    );
  }

  static async postParticipants({ lastname, firstname, courseid, createdat }) {
    const params = [lastname, firstname, courseid, createdat];

    return await this.queryExec(
      this.queries.postParticipant,
      Participant,
      params
    );
  }
  static async patchParticipant({
    id,
    lastname,
    firstname,
    courseid,
    createdat,
  }) {
    const params = [lastname, firstname, courseid, createdat, id];
    return await this.queryExec(
      this.queries.patchParticipant,
      Participant,
      params
    );
  }
  static async deleteParticipants({ id }) {
    return await this.queryExec(this.queries.deleteParticipant, Participant, [
      id,
    ]);
  }
  static async getParticipantsCount({ courseid }) {
    return await this.queryExec(this.queries.countParticipant, Participant, [
      courseid,
    ]);
  }
}

module.exports = ParticipantsManager;
