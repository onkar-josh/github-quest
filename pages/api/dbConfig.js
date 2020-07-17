require("dotenv").config("../.env");
const Pool = require('pg').Pool
const dbConfig = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.PORT,
});

module.exports = dbConfig;