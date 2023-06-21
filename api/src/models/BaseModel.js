const { db } = require("../config");

class BaseModel {
  table;
  db;

  fields = [];
  join = [];

  constructor(table) {
    this.table = table;
    this.db = db;
    // this.init();
  }

  init() {}

  getAll() {
    return this.db.query(`
      SELECT ${this.fields}
      FROM ${this.table}  
      ${this.join}
      `);
  }

  getById(id) {
    return this.db.query(
      `
      SELECT ${this.fields}
      FROM ${this.table}
      ${this.join} 
      WHERE ${this.table}.id  = ?`,
      [id]
    );
  }

  postItem(reqBody) {
    const paramKeys = Object.keys(reqBody);
    const paramVals = Object.values(reqBody);

    const sql1 = `INSERT INTO ${this.table}`;
    let sql2 = "";
    let sql3 = "";

    paramKeys.forEach((key) => {
      sql2 += `${key},`;
      sql3 += "?,";
    });

    const removeLastChar = (string) =>
      (string = string.substring(0, string.length - 1));

    sql2 = removeLastChar(sql2);
    sql3 = removeLastChar(sql3);

    return db.query(`${sql1} (${sql2}) VALUES (${sql3})`, paramVals);
  }

  updateItem(reqBody, id) {
    const paramKeys = Object.keys(reqBody);
    const paramVals = Object.values(reqBody);

    const sql1 = `UPDATE ${this.table} SET`;
    let sql2 = "";

    paramKeys.forEach((key) => {
      sql2 += `${key} = ?, `;
    });

    const removeLastChar = (string) =>
      (string = string.substring(0, string.length - 2));

    sql2 = removeLastChar(sql2);

    return db.query(`${sql1} ${sql2} WHERE ${this.table}.id = ? `, [
      ...paramVals,
      id,
    ]);
  }
}

module.exports = BaseModel;
