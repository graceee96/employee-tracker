//import necessary packages
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

//import prompts
const prompts = require('./prompts');

//import helper functions

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'company_db',
        rowsAsArray: true
    },
    console.log(`Connected to the company_db database.`)
)

// const employeeList = prompts.employees;
// const rolesList = prompts.roles;
// const departmentList = prompts.departments;


//inquirer
function employeeManager() {
    inquirer
        .prompt(prompts.options)
        .then((input) => {
            console.log(input);
            
            //switch statements
            switch (input.task) {
                case 'View all departments':
                    const viewDepartments = `SELECT * FROM company_db.department`;

                    db.query(viewDepartments, (err, results) => console.table(results));

                    employeeManager();

                    break;
                case 'View all roles':
                    const viewRoles = `SELECT role.id, role.title AS job_title, role.salary, department.name AS department
                    FROM role
                    LEFT JOIN department ON role.department_id = department.id;`;

                    db.query(viewRoles, (err, results) => console.log(results));

                    employeeManager();

                    break;
                case 'View all employees':
                    //need to do self join
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