# Employee Tracker

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
The Employee Tracker is a content management system (CMS) where business owners can view and manage the departments, roles, and employees in their company. Business owners are able to organize and plan their business using this application.

## Installation
1. Download the repository by running ```git clone <SSH key>``` in the command line interface.
2. Install the following dependencies to run the application
    * inquirer v 8.2.4: ```npm i inquirer@8.2.4```
    * console.table: ```npm i console.table```
    * mysql2: ```npm i mysql2```

## Usage
After installation, run ```node index.js``` to start the application. Navigate the menu using the arrow keys (↑ and ↓), and hit ```enter``` (or ```return``` for Mac users) to select an action. For actions to add new departments, to add new roles, or to add new employees, answer the prompts to update the database with the new entry. Pick another task action when the menu appears. If there are no other tasks to run, select ```Quit``` to exit out of the program.

### Link to video walkthrough


## Credits

### Special Thanks
Made with help from Scott McAnally (tutor) and Drew Zinck (AskBCS Learning Assistant)

### Resources Accessed
* Esat Erkec - [SQL multiple joins for beginners with examples](https://www.sqlshack.com/sql-multiple-joins-for-beginners-with-examples/)
* Aashiya Mittal - [How to Exit a Process in Node.js: process.exit() Method](https://www.knowledgehut.com/blog/web-development/node-js-process-exit#using-process.exit())
* Brandon Morelli - [JavaScript: What the heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)
* SQLServerTutorial.Net - [SQL Server Self Join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-self-join/)
* Stack Overflow - [MySQL SELECT AS combine two columns into one](https://stackoverflow.com/questions/18860233/mysql-select-as-combine-two-columns-into-one)
* Title made with [Text to ASCII Art Generator](https://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=Employee%0AManager) by [patorjk](https://github.com/patorjk)

## License
This repository is licensed under the [MIT License](https://opensource.org/licenses/MIT).