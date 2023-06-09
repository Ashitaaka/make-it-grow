const { db } = require('../config');

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

  init() { }

  getAll() {
    return this.db
      .query(`
      SELECT ${this.fields}
      FROM ${this.table}  
      ${this.join}
      `)
  }

  getById(id) {

    return this.db
      .query(`
      SELECT DISTINCT ${this.fields}
      FROM ${this.table}
      ${this.join} 
      WHERE ${this.table}.id  = ?`, [id])
  }

}

module.exports = BaseModel;