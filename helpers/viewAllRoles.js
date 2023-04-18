//import dependencies
const consoleTable = require('console.table');
const mysql = require('mysql2');
const employeeManager = require('../index');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'company_db',
    },
    console.log(`Connected to the company_db database.`)
);

function viewAllRoles() {
    const rolesTable = 'SELECT role.id, role.title AS title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id';

    db.query(rolesTable, (err, results) => console.log(consoleTable.getTable(results)));

    // employeeManager();
    // console.log(employeeManager)
};

module.exports = viewAllRoles;