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
).promise();

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
                type: 'list',
                message: 'What department is this role in?',
                name: 'departments',
                choices: [] //??????
            }
        ])
        .then ((input) => {
            console.log(input);
            const insertRole = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
            const roleInfo = [input.title, input.salary, input.departments];

            db.query(insertRole, roleInfo, (err, result)) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                    console.log(`Successfully added new role: ${input.title} ($${input.salary} | ${input.departments})`)
                }
            }
        })
};

addRole();

// module.exports = addRole;