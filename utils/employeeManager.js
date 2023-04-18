const inquirer = require('inquirer');

//import helper functions
const viewAllDepartments = require('./viewAllDepartments');
const viewAllRoles = require('./viewAllRoles');
const viewAllEmployees = require('./viewAllEmployees')
const addDepartment = require('./addDepartment');
const addRole = require('./addRole');
const addEmployee = require('./addEmployee');
const updateEmployeeRole = require('./updateEmployeeRole');

function employeeManager() {
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'task',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Quit'
            ],
        })
        .then((input) => {
            // console.log(input);
            
            //switch statements
            switch (input.task) {
                case 'View all departments':
                    viewAllDepartments();

                    break;
                case 'View all roles':
                    viewAllRoles();

                    break;
                case 'View all employees':
                    viewAllEmployees();

                    break;
                case 'Add a department':
                    addDepartment();

                    break;
                case 'Add a role':
                    addRole();

                    break;
                case 'Add an employee':
                    addEmployee();

                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    
                    break;
                case 'Quit':
                    return;
            };

        })
}

module.exports = employeeManager;