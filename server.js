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

const updateUser = (request, response) => {
  pool.query(
    `UPDATE users SET emissions=${request.body.emissions}, offsets=${request.body.offsets} WHERE id=${request.body.id}; `,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
  response.status(200);
};

module.exports = {
  getUsers,
  updateUser,
};
