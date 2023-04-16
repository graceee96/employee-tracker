//import dependencies - for testing
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
);


function addDepartment() {
    inquirer
        //prompt user to input new department
        .prompt({
            type: 'input',
            message: 'What is the name of the department?',
            name: 'new_department',
        })
        .then((input) => {
            //.then add input to department table
            // console.log(input);

            const insertDepartment = `INSERT INTO department (name) VALUES (?)`;

            db.query(insertDepartment, input.new_department, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    // console.log(result);
                    console.log(`Successfully added new department: ${input.new_department}`)
                }
            });

        })
};

module.exports = addDepartment;

//SELECT department.name FROM department;
// db.query('SELECT department.name FROM department', (err, results) => {
//     results.flat();
// })