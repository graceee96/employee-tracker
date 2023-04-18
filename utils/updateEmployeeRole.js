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

function updateEmployeeRole() {
    db.query('SELECT * FROM role', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            const role = result.map(a => ({
                name: a.title,
                value: a.id,
            }));

            db.query('SELECT * FROM employee', (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    const employee = result.map(a => ({
                        name: a.first_name + ' ' + a.last_name,
                        value: a.id
                    }));

                    inquirer
                        .prompt([
                            {
                                type: 'list',
                                message: 'Which employee\'s role do you want to update?',
                                name: 'update_employee',
                                choices: employee,
                            },
                            {
                                type: 'list',
                                message: 'Which role do you want to assign to the selected employee?',
                                name: 'update_role',
                                choices: role,
                            }
                        ])
                        .then((input) => {
                            // console.log(input);

                            const updateEmployee = `UPDATE company_db.employee SET role_id = ? WHERE id = ?`;
                            const updateInfo = [input.update_role, input.update_employee];

                            db.query(updateEmployee, updateInfo, (err, result) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log(`Successfully updated role`)
                                };
                            });
                        });
                };
            });
        };
    });
};


module.exports = updateEmployeeRole;
