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

function viewAllDepartments() {
    const departmentTable = 'SELECT department.id AS department_id, department.name AS department FROM department';

    db.query(departmentTable, (err, results) => console.table(results));
};

module.exports = viewAllDepartments;