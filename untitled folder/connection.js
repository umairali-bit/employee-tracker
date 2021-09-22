//create a const variable call it mysql
// set that equal to mysql2 (dependency)
// create a mysql connection. define the host, user, password and database. that file needs to export the connection in the end. 

const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '6102075b',
      database: 'employees_db'
    },
    console.log('Connected to the employees database.')
  );


  module.exports = db;