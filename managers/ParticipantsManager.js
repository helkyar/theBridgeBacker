let Manager = require("./Manager");
let Participants = require("../models/Participants");
const { Client } = require("pg");

class ParticipantsManager extends Manager {
  static queries = {
    getAll: "SELECT * FROM participants",
    post: "INSERT INTO participants (createdat) VALUES ('2022-09-22')",
  };

  static queries() {
    const data = {
      getAll: "SELECT * FROM participants",
      post: "INSERT INTO participants (createdat) VALUES ('2022-09-22')",
    };
    return data;
  }
  static async getAllParticipants() {
    let client = new Client(this.clientParams);
    try {
      client.connect();
      let data = await client.query(this.queries.post);
      let tempParticipants = [];

      // data.rows.map((e) => {
      //   tempParticipants.push(new Participants(e).getParticipants());
      // });
      console.log(data);
      client.end();
      return tempParticipants;
    } catch (error) {
      client.end();
      console.log("Error en getParticipants");
      console.log(error);
    }
  }
}

module.exports = ParticipantsManager;
