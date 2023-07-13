const database = require("mysql2/promise");
require("dotenv").config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const db = database.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

db.getConnection()
  .then(() => {
    ("Can reach database");
  })
  .catch((err) => {
    console.warn("warning : DB connection failed");
    console.error(err);
  });

module.exports = db;
