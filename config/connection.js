// Set up MySQL connection.
const mysql = require("mysql");
const localInfo = {
  port: 3306,
  host: "localhost",
  user: "michael",
  password: "",
  database: "burgers_db"
};

const connection = mysql.createConnection(
  process.env.JAWSDB_URL ?
   process.env.JAWSDB_URL :
   localInfo
);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;