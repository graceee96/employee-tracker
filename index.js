//import necessary packages
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

//import prompts
const prompts = require('./prompts');
const employeeList = prompts.employees;
const rolesList = prompts.roles;
const departmentList = prompts.departments;


//inquirer
function employeeManager() {
    inquirer
        .prompt(prompts.options)
        .then((input) => {
            console.log(input);
            
            //switch statements
            switch (input.task) {
                case 'View all departments':
                    employeeManager();
                    break;
                case 'View all roles':
                    employeeManager();
                    break;
                case 'View all employees':
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