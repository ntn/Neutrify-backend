require("dotenv").config();

const {
  PORT,
  CDB_USER,
  CDB_PASSWORD,
  CDB_HOST,
  CDB_DB,
  CDB_PORT,
} = process.env;

module.exports = {
  PORT,
  CDB_USER,
  CDB_PASSWORD,
  CDB_HOST,
  CDB_DB,
  CDB_PORT,
};
