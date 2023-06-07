const { db } = require('../config');

class BaseModel {

    table;
    db;

    constructor(table){

        this.table = table;
        this.db = db;

    }

    getAll() {
        return this.db
        .query(`SELECT * FROM ${this.table}`)
    }

    getById(id) {
        return this.db
        .query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
    }
    
    getCardHeader() {
        return this.db
            .query(`
                SELECT ${this.cardHeader.fields}
                FROM ${this.table}
                ${this.cardHeader.join}
            `)
    }
}

module.exports = BaseModel;