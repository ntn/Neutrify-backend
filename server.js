const fs = require("fs");
const { Pool } = require("pg");
const config = require("./utils/config");

const pool = new Pool({
  user: config.CDB_USER,
  password: config.CDB_PASSWORD,
  host: config.CDB_HOST,
  database: config.CDB_DB,
  port: config.CDB_PORT,
  ssl: {
    ca: fs.readFileSync("cc-ca.crt").toString(),
  },
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
};
