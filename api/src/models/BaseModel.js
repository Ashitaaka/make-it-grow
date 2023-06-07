const { db } = require('../config');

class BaseModel {

    table;
    db;

    fields = [];
    join = [];

    constructor(table){

        this.table = table;
        this.db = db;
        // this.init();

    }

    init() { }

    getAllHeader() {
        return this.db
        .query(`SELECT * FROM ${this.table}`)
    }

    getById(id) {
        return this.db
        .query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
    }
    
    getAll() {
        return this.db
            .query(`
                SELECT ${this.fields}
                FROM ${this.table}
                ${this.join}
            `)
    }
}

module.exports = BaseModel;