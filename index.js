//import necessary packages
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

//import helper functions

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'company_db',
        // rowsAsArray: true,
    },
    console.log(`Connected to the company_db database.`)
)

// const employeeList = prompts.employees;
// const rolesList = prompts.roles;


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
            console.log(input);
            
            //switch statements
            switch (input.task) {
                case 'View all departments':
                    const departmentTable = `SELECT department.id AS department_id, department.name AS department
                    FROM department;`;

                    db.query(departmentTable, (err, results) => console.table(results));

                    employeeManager();

                    break;
                case 'View all roles':
                    const rolesTable = `SELECT role.id, role.title AS title, role.salary, department.name AS department
                    FROM role
                    LEFT JOIN department ON role.department_id = department.id`;

                    db.query(rolesTable, (err, results) => console.table(results));

                    employeeManager();

                    break;
                case 'View all employees':
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
                    ORDER BY e.id`;

                    db.query(employeeTable, (err, results) => console.table(results));

                    employeeManager();
                    break;
                case 'Add a department':
                    employeeManager();
                    break;
                case 'Add a role':
                    employeeManager();
                    break;
                case 'Add an employee':
                    employeeManager();
                    break;
                case 'Update an employee role':
                    employeeManager();
                    break;
                case 'Quit':
                    return;
            }
        })
}

//init function - display title & employeeManager()
function init() {
    console.log(`
    
    ::::::::::   :::   :::   :::::::::  :::        ::::::::  :::   ::: :::::::::: :::::::::: 
    :+:         :+:+: :+:+:  :+:    :+: :+:       :+:    :+: :+:   :+: :+:        :+:         
   +:+        +:+ +:+:+ +:+ +:+    +:+ +:+       +:+    +:+  +:+ +:+  +:+        +:+          
  +#++:++#   +#+  +:+  +#+ +#++:++#+  +#+       +#+    +:+   +#++:   +#++:++#   +#++:++#      
 +#+        +#+       +#+ +#+        +#+       +#+    +#+    +#+    +#+        +#+            
#+#        #+#       #+# #+#        #+#       #+#    #+#    #+#    #+#        #+#             
########## ###       ### ###        ########## ########     ###    ########## ##########       
       :::   :::       :::     ::::    :::     :::      ::::::::  :::::::::: :::::::::        
     :+:+: :+:+:    :+: :+:   :+:+:   :+:   :+: :+:   :+:    :+: :+:        :+:    :+:        
   +:+ +:+:+ +:+  +:+   +:+  :+:+:+  +:+  +:+   +:+  +:+        +:+        +:+    +:+         
  +#+  +:+  +#+ +#++:++#++: +#+ +:+ +#+ +#++:++#++: :#:        +#++:++#   +#++:++#:           
 +#+       +#+ +#+     +#+ +#+  +#+#+# +#+     +#+ +#+   +#+# +#+        +#+    +#+           
#+#       #+# #+#     #+# #+#   #+#+# #+#     #+# #+#    #+# #+#        #+#    #+#            
###       ### ###     ### ###    #### ###     ###  ########  ########## ###    ###


`);
    
employeeManager();
};

init();