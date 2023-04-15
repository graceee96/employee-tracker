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

function addRole() {
    inquirer
        .prompt ([
            {
                type: 'input',
                message: 'What is the name of the new role?',
                name: 'title',
            },
            {
                type: 'number',
                message: 'What is the salary for this position?',
                name: 'salary',
            },
            {
                type: 'input',
                message: 'What department is this role in?',
                name: 'departments',
            }
        ])
        .then ((input) => {
            console.log(input);
            
        })
}

module.exports = addRole;