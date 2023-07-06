const BaseModel = require("./BaseModel");

class IdeaModel extends BaseModel {
  queryFields;

  constructor({ fields }) {
    super("ideas");

    //securisation si fields vide et split de la chaine issue de la query
    this.init(fields && fields.split(","));
  }

  //si la query est vide, on affiche toutes les idees, sinon uniquement les donnes pour la card
  init(fields) {
    if (!fields) {
      this.fields.push("*");
    } else {
      this.queryFields = fields;
      if (this.queryFields.includes("id")) {
        this.fields.push(`ideas.id`);
      }
      if (this.queryFields.includes("title")) {
        this.fields.push(`ideas.title`);
      }
      if (this.queryFields.includes("deadline")) {
        this.fields.push(`ideas.deadline`);
      }
      if (this.queryFields.includes("detail")) {
        this.fields.push(`ideas.detail`);
      }
      if (this.queryFields.includes("risk")) {
        this.fields.push(`ideas.risk`);
      }
      if (this.queryFields.includes("benefit")) {
        this.fields.push(`ideas.benefit`);
      }
      if (this.queryFields.includes("impact")) {
        this.fields.push(`ideas.impact`);
      }
      if (this.queryFields.includes("users")) {
        this.fields.push(`users.id AS user_id`);
        this.fields.push(`users.firstname`);
        this.fields.push(`users.lastname`);
        this.fields.push(`users.picture`);
        this.fields.push(`users_has_ideas.is_owner`);
        this.fields.push(`roles.label AS role`);
      }

      if (this.queryFields.includes("comments")) {
        this.fields.push(`comments.content AS comment`);
        this.fields.push(`comments.id_user`);
      }
      if (this.queryFields.includes("categories")) {
        this.fields.push(`categories.id`);
        this.fields.push(`categories.label AS category`);
        this.fields.push(`categories.color`);
      }
      if (this.queryFields.includes("locations")) {
        this.fields.push(`locations.id`);
        this.fields.push(`locations.city`);
      }

      if (this.queryFields.includes("status")) {
        this.fields.push(`status.label AS status`);
        this.fields.push(`status.delay`);
      }

      this.join
        .push(`LEFT JOIN ideas_has_categories ON ideas.id = ideas_has_categories.id_idea
        LEFT JOIN categories ON ideas_has_categories.id_category = categories.id
        LEFT JOIN ideas_has_locations ON ideas.id = ideas_has_locations.id_idea
        LEFT JOIN locations ON ideas_has_locations.id_location = locations.id
        LEFT JOIN status ON ideas.id_status = status.id 
        LEFT JOIN comments ON comments.id_idea = ideas.id
        LEFT JOIN users_has_ideas ON ideas.id = users_has_ideas.id_idea
        LEFT JOIN users ON users_has_ideas.id_user = users.id
        LEFT JOIN roles ON users.id_role = roles.id
        `);
    }
  }

  insertIdeaHasCategories(ideaId, labelId) {
    const insertQuery = `INSERT INTO ideas_has_categories (id_idea, id_category) VALUES (?, ?)`;

    return this.db.query(insertQuery, [ideaId, labelId]);
  }

  insertIdeasHasLocations(ideaId, cityId) {
    const insertQuery = `INSERT INTO ideas_has_locations (id_idea, id_location) VALUES (?, ?)`;

    return this.db.query(insertQuery, [ideaId, cityId]);
  }

  postItem(reqBody) {
    const { label, city, ...ideaData } = reqBody;

    const paramKeys = Object.keys(ideaData);
    const paramVals = Object.values(ideaData);

    const sql1 = `INSERT INTO ${this.table}`;
    let sql2 = "";
    let sql3 = "";

    paramKeys.forEach((key) => {
      sql2 += `${key},`;
      sql3 += "?,";
    });

    const removeLastChar = (string) => string.substring(0, string.length - 1);

    sql2 = removeLastChar(sql2);
    sql3 = removeLastChar(sql3);

    let ideaId;

    return this.db
      .query(`${sql1} (${sql2}) VALUES (${sql3})`, paramVals)
      .then(([result]) => {
        ideaId = result.insertId;

        if (label) {
          return this.insertIdeaHasCategories(ideaId, label);
        } else {
          return Promise.resolve();
        }
      })
      .then(() => {
        if (city) {
          return this.insertIdeasHasLocations(ideaId, city);
        } else {
          return Promise.resolve();
        }
      })
      .then(() => ({ id: ideaId, ...ideaData }))
      .catch((error) => {
        console.error(error);
        throw new Error("An error occurred");
      });
  }
}

module.exports = IdeaModel;
