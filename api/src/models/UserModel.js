const BaseModel = require("./BaseModel");

class UserModel extends BaseModel {
  queryFields;

  constructor({ fields }) {
    super("users");

    //securisation si fields vide et split de la chaine issue de la query
    this.init(fields && fields.split(","));
  }

  getByEmailWithPass(email) {
    return this.db.query("SELECT * FROM users WHERE email = ?", [email]);
  }

  getByCity(city) {
    return this.db.query(
      `
      SELECT ${this.fields}
      FROM ${this.table} 
      ${this.join}
      WHERE locations.city = ?`,
      [city]
    );
  }

  //si la query est vide, on affiche toutes les idees, sinon uniquement les donnes pour la card
  init(fields) {
    if (!fields) {
      this.fields.push("*");
    } else {
      this.queryFields = fields;
      if (this.queryFields.includes("id")) {
        this.fields.push(`users.id AS user_id`);
      }
      if (this.queryFields.includes("firstname")) {
        this.fields.push(`users.firstname`);
      }
      if (this.queryFields.includes("lastname")) {
        this.fields.push(`users.lastname`);
      }
      if (this.queryFields.includes("picture")) {
        this.fields.push(`users.picture`);
      }
      if (this.queryFields.includes("occupation")) {
        this.fields.push(`users.occupation`);
      }
      if (this.queryFields.includes("service")) {
        this.fields.push(`users.service`);
      }
      if (this.queryFields.includes("email")) {
        this.fields.push(`users.email`);
      }
      if (this.queryFields.includes("locations")) {
        this.fields.push(`locations.city`);
        this.fields.push("locations.country");
      }
      if (this.queryFields.includes("users")) {
        this.fields.push(`users.id AS user_id`);
        this.fields.push(`users.firstname`);
        this.fields.push(`users.lastname`);
        this.fields.push(`users.picture`);
      }

      this.join.push(`LEFT JOIN locations ON locations.id = users.id_location
      `);
    }
  }
}

module.exports = UserModel;
