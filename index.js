// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

//setu-up inquirer (choices) to present the prompts

//setup switch statements each case in switch statment will be one of the choices. each case should have its own function. that function then will use a different query. each function needs to be individually defined. 


const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());