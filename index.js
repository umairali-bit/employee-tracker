// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

//setu-up inquirer (choices) to present the prompts

//setup switch statements each case in switch statment will be one of the choices. each case should have its own function. that function then will use a different query. each function needs to be individually defined. 

const { prompt } = require("inquirer");
const logo = require('asciiart-logo');
const config = require('./package.json');
require("console.table");
console.log(logo(config).render());


// Inquirer function

function mainPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do",
            choices: [
                {
                    name: "View All Employees",
                    value: "View_Employees"
                },
                {
                    name: "View All Employees By Department",
                    value: "View_Employees_By_Department"
                },
                {
                    name: "View All Employees By Manager",
                    value: "View_Employees_By_Manager"
                },
                {
                    name: "Add an Employee",
                    value: "Add_Employee"
                },
                {
                    name: "Remove an Employee",
                    value: "Remove_Employee"
                },
                {
                    name: "Update Employee Role",
                    value: "Update_Employee"
                },
                {
                    name: "Update Employee Manager",
                    value: "Update_Manager"
                }
            ]
        }
    ])
}
mainPrompts();