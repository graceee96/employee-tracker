//import dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'company_db',
    }
);

function addEmployee(callback) {
    db.query('SELECT * FROM role', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const roles = result.map(a => ({
                name: a.title,
                value: a.id
            }));
            // console.log(roles)
            db.query('SELECT * FROM company_db.employee WHERE manager_id IS NULL', (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    const managers = result.map(a => ({
                        name: a.first_name + ' ' + a.last_name,
                        value: a.id
                    }));
                    
                    // console.log(managers);

                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: 'What is the employee\'s first name?',
                                name: 'new_firstname',
                            },
                            {
                                type: 'input',
                                message: 'What is the employee\'s last name?',
                                name: 'new_lastname',
                            },
                            {
                                type: 'list',
                                message: 'What is the employee\'s role?',
                                name: 'new_role',
                                choices: roles,
                            },
                            {
                                type: 'list',
                                message: 'Who is the employee\'s manager?',
                                name: 'new_manager',
                                choices: managers,
                            }
                        ])
                        .then((input) => {
                            // console.log(input);
                            const insertEmployee = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
                            const employeeInfo = [input.new_firstname, input.new_lastname, input.new_role, input.new_manager];

                            db.query(insertEmployee, employeeInfo, (err, results) => {
                                if(err) {
                                    console.log(err);
                                } else {
                                    // console.log(results);
                                    console.log(`Successfully added new employee: ${input.new_firstname} ${input.new_lastname}`)
                                }
                            })

                            callback();
                        });
                };
            });
        };
    });
};

module.exports = addEmployee;