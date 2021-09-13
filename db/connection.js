const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '9m>u4mbeJ.Tr$>Kx',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

module.exports = db;