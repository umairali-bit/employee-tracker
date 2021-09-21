# EMPLOYEE TRACKER [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

    
# Description 
 Developers frequently have to create interfaces that make it easy for non-developers to view and interact with information stored in databases. These interfaces are called content management systems (CMS). The challenge is to build a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.
# Table of Contents:
* [Installation](#installation)
* [DataBase](#database)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

# Installation 

Packages required for this application are as follows
* Node
 * Inquirer
 * MySQL2 
 * Console.table.package

 # DataBase

Created a DataBase from scratch in db folder. DB folder includes connection.js, schema.sql and seed.sql. Connection.js connects DataBase to SQL using MySQL2 package. Schema.sql populates the tables and seed.sql is for the values for the respective tables. 

# Usage

* GIVEN a command-line application that accepts user input
* WHEN I start the application
* THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
* WHEN I choose to view all departments
* THEN I am presented with a formatted table showing department names and department ids
* WHEN I choose to view all roles
* THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
* WHEN I choose to view all employees
* THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
* WHEN I choose to add a department
* THEN I am prompted to enter the name of the department and that department is added to the database
* WHEN I choose to add a role
* THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
* WHEN I choose to add an employee
* THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
* WHEN I choose to update an employee role
* THEN I am prompted to select an employee to update and their new role and this information is updated in the database
 
 * [Click here to see the video of this challenge](https://watch.screencastify.com/v/eFkGSnZHNCLF6Mc26OyH)

# Credits
If you want to contribute to this application please contact me at umairmamoor@gmail.com

# License
## GPL-3.0
[License Link](https://opensource.org/licenses/GPL-3.0)

[Lisence Section](https://choosealicense.com/licenses/gpl-3.0/)

# Test
Test different tables, queries and multiple JOIN statements to see if the app works perfectly.

# Questions
For any questions, please feel free to reach out to me at the following:

Github: https://github.com/umairali-bit

Email: umairmamoor@gmail.com