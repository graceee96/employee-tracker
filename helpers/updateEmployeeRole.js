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

function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which employee\'s role do you want to update?',
                name: 'update_employee',
                choices: this.employees,
            },
            {
                type: 'list',
                message: 'Which role do you want to assign to the selected employee?',
                name: 'update_role',
                choices: this.roles,
            }
        ])
        .then((input) => {
            console.log(input);

            const updateEmployee = `UPDATE employee SET role_id = ? WHERE first_name = ?`;
            const updateInfo = [input.update_employee, input.update_role];

            db.query(updateEmployee, updateInfo, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Successfully updated ${input.update_employee}'s role to ${input.update_role}`)
                }
            })
        })
};

module.exports = updateEmployeeRole();