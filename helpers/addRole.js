//import dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'company_db',
    },
    console.log(`Connected to the company_db database.`)
);

//SEE LIST OF DEPARTMENTS
//turn result into a single array with just the values of the objects
db.query('SELECT department.name FROM department', (err, results) => {
    let departmentList = results.map(a => a.name)
    console.log(departmentList);
})