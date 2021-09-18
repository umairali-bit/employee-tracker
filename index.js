// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

//setu-up inquirer (choices) to present the prompts

//setup switch statements each case in switch statment will be one of the choices. each case should have its own function. that function then will use a different query. each function needs to be individually defined. 
const db = require('./db/connection');
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
            choices: [ 'View All Employees', 'View All Departments', 'View All Roles','View Employees by Manager', 'View Employees by Department','Add a Department', 'Add a Role', 
                       'Add an Employee', 'Update an Employee Role', 'Update an Employee Manager', 'Delete Employee','Delete Role',
                       'Delete Department'],
        }
    ]).then((answers) => {
        
        if (answers.choice === 'View All Employees') {
            viewAllEmployees();
        }
        if (answers.choice === 'View All Departments') {
            viewAllDepartment();
        }
        if (answers.choice === 'View All Roles') {
            viewAllRoles();
        }
        if (answers.choice === 'View Employees by Manager') {
            viewEmployeesByManager();
        }
        if (answers.choice === 'View Employees by Department') {
            viewEmployeesByDepartment();
        }
        if (answers.choice === 'Add a Department') {
            addDepartment();
        }
        if (answers.choice === 'Add a Role') {
            addRole();
        }
        if (answers.choice === 'Add an Employee') {
            addEmployee();
        }
        if (answers.choice === 'Update an Employee Role') {
            updateEmployeeRole();
        }
        if (answers.choice === 'Update an Employee Manager') {
            updateEmployeeManager();
        }
        if (answers.choice === 'Delete Employee') {
            deleteEmployee();
        }
        if (answers.choice === 'Delete Role') {
            deleteRole();
        }
        if (answers.choice === 'Delete Department') {
            deleteDepartment();
        }



});
};

// using inner join
function viewAllEmployees() {
    const sql = `SELECT e.id,e.first_name, e.last_name, r.title, d.section, r.salary, CONCAT(m.first_name," ",m.last_name) AS manager 
                FROM employee e INNER JOIN role r ON (e.id = r.id) INNER JOIN department d ON (r.department_id = d.id) INNER JOIN employee m
                ON (e.manager_id = m.manager_id) ORDER by e.id;`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
        mainPrompts();
        
    })
};

function viewAllDepartment() {
    const sql = `SELECT * FROM department;`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
        mainPrompts();
        
    })

}

function viewAllRoles() {
    const sql = `SELECT * From role;`;

    db.query(sql, (err,result) => {
        if (err) throw err;
        console.table(result);
        mainPrompts();
    })
}

// using left join
function viewEmployeesByManager() {
    const sql = `SELECT employee.id,employee.first_name, employee.last_name, CONCAT(employeem.first_name,' ',employeem.last_name) AS manager 
                FROM employee LEFT JOIN employee AS employeem on  employee.manager_id = employeem.id;`
    
    db.query(sql, (err,result) => {
        if (err) throw err;
        console.table(result);
        mainPrompts();
    })

}

// using right join
function viewEmployeesByDepartment() {
    const sql = `SELECT e.id,d.section AS department, e.first_name, e.last_name FROM department d RIGHT JOIN employee e ON e.role_id = d.id;`;

    db.query(sql, (err,result) => {
        if (err) throw err;
        console.table(result);
        mainPrompts();
    })
}



mainPrompts();


