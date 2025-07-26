const mysql = require('mysql2');

// Create MySQL connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '2005@ekr',
  database: 'bank_db'  // Change this to your database name
});

// Export the pool
module.exports = db.promise(); // Use promise-based interface

