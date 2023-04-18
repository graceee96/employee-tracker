//import necessary packages
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'company_db',
    },
    console.log(`Connected to the company_db database.`)
);

//import helper functions
const viewAllDepartments = require('./utils/viewAllDepartments');
const viewAllRoles = require('./utils/viewAllRoles');
const viewAllEmployees = require('./utils/viewAllEmployees')
const addDepartment = require('./utils/addDepartment');
const addRole = require('./utils/addRole');
const addEmployee = require('./utils/addEmployee');


//inquirer
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

                    //employeeManager();

                    break;
                case 'View all roles':
                    viewAllRoles();

                    //employeeManager();

                    break;
                case 'View all employees':
                    viewAllEmployees();

                    //employeeManager();
                    break;
                case 'Add a department':
                    addDepartment();

                    //employeeManager();
                    break;
                case 'Add a role':
                    addRole();

                    //employeeManager();
                    break;
                case 'Add an employee':
                    addEmployee();
                    //employeeManager();
                    break;
                case 'Update an employee role':
                    //employeeManager();
                    break;
                case 'Quit':
                    return;
            };

            // employeeManager();
        })
}

module.exports = employeeManager;

//init function - display title & employeeManager()
function init() {
    console.log(`
    
███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗
██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝
█████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗  
██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝  
███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗
╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝
                                                                     
███╗   ███╗ █████╗ ███╗   ██╗ █████╗  ██████╗ ███████╗██████╗        
████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝ ██╔════╝██╔══██╗       
██╔████╔██║███████║██╔██╗ ██║███████║██║  ███╗█████╗  ██████╔╝       
██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║   ██║██╔══╝  ██╔══██╗       
██║ ╚═╝ ██║██║  ██║██║ ╚████║██║  ██║╚██████╔╝███████╗██║  ██║       
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝ 


`);
    
employeeManager();
};

init();

