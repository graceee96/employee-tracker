//import dependencies
const mysql = require('mysql2');
const consoleTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'company_db',
    }
);

function viewAllDepartments(callback) {
    const departmentTable = 'SELECT department.id AS department_id, department.name AS department FROM department';

    db.query(departmentTable, (err, results) => {
        console.log('\n' + consoleTable.getTable(results));
    });

    callback();
};

module.exports = viewAllDepartments;