//import dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'company_db',
        rowsAsArray: true,
    },
    console.log(`Connected to the company_db database.`)
);

//prompt user to input new department
function addDepartment() {
    inquirer
        .prompt({
            type: 'input',
            message: 'What is the name of the department?',
            name: 'new_department',
        })
        .then((input) => {
            //.then add input to department table
            console.log(input);

            const insertDepartment = `INSERT INTO department (name) VALUES (${input.new_department})`;

            db.query(insertDepartment, (err, result) => console.log(result))
        })
};
addDepartment();

module.exports = addDepartment;

//SELECT department.name FROM department;
// db.query('SELECT department.name FROM department', (err, results) => {
//     results.flat();
// })