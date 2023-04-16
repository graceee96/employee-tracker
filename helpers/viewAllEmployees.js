//import dependencies
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

function viewAllEmployees() {
    const employeeTable = `SELECT
	e.id,
    e.first_name,
    e.last_name,
    role.title AS title,
    department.name AS department,
    CONCAT_WS(' ' , m.first_name, m.last_name) AS manager
FROM employee e
	INNER JOIN role ON e.role_id = role.id
	INNER JOIN department ON role.department_id = department.id
    LEFT JOIN employee m ON m.id = e.manager_id
	ORDER BY e.id;`;

    db.query(employeeTable, (err, results) => console.table(results));
};

module.exports = viewAllEmployees;