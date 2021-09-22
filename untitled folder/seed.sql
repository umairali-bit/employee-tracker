USE employees_db;

INSERT INTO department (section)
VALUES ('sales'),('engineering'),('finance'),('legal');

INSERT INTO role (title, salary, department_id)
VALUES ('software Engineer', 90000, 1),('Manager', 100000, 2),
       ('Intern', 50000, 3), ('Account Manager', 70000, 3),('Lead Engineer', 100000, 1), 
       ('Assistant Manager', 80000, 4), ('Janitor', 30000, 3), ('Lawyer', 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Umair", "Ali", 1, 4), ("Bilal", "Ahmad",2,1), ("Bisma", "Navees",3,8), ("Kinza", "Waqar",4,5), 
("Faseeha", "Altaf",1,7), ("Danish", "Quadri",4,6), ("Yasir", "Abdullah",3,3), ("Kamran", "Khan",4,2);