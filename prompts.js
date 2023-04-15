//prompts to ask users: view all departments, view all roles, view all employees, add a department, add a role, add an employee, update employee role
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

const departments = db.query('SELECT department.name FROM department', (err, results) => {
    results.flat();
});

console.log(departments);

const cliPrompt = {
    options: {
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
    },

    addDepartment: {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'new_department',
    },

    addRole: [
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
    ],

    roles: [],

    managers: [],

    addEmployee: [
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
            choices: this.roles
        },
        {
            type: 'list',
            message: 'Who is the employee\'s manager?',
            name: 'new_manager',
            choices: this.managers
        }
    ],

    employees: [],

    updateEmployeeRole: [
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
    ]
}

module.exports = cliPrompt;