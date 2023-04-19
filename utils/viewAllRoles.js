//import dependencies
const consoleTable = require('console.table');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'company_db',
    }
);

function viewAllRoles(callback) {
    
    const rolesTable = 'SELECT role.id, role.title AS title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id';

    db.query(rolesTable, (err, results) => console.log('\n' + consoleTable.getTable(results)));

    callback();
};

module.exports = viewAllRoles;