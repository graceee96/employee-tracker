INSERT INTO department (name)
    VALUES ('Engineering'),
           ('Finance & Accounting'),
           ('Legal'),
           ('Marketing'),
           ('Design');

INSERT INTO role (title, salary, department_id)
    VALUES ('Software Engineer', 120000, 1),
           ('Data Engineer', 145000, 1),
           ('Lead Engineer', 150000, 1),
           ('Account Manager', 160000, 2),
           ('Accountant', 125000, 2),
           ('Senior Counsel', 230000, 3),
           ('Lawyer', 190000, 3),
           ('Marketing Manager', 77000, 4),
           ('Social Media Specialist', 50000, 4),
           ('Content Marketer', 60000, 4),
           ('Product Designer', 115000, 5),
           ('Graphic Designer', 50000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ('Dorothy', 'Zbornak', 8, NULL),
           ('Sofia', 'Petrillo', 11, NULL),
           ('Leslie', 'Knope', 3, NULL),
           ('Ron', 'Swanson', 6, NULL),
           ('Chris', 'Traeger', 4, NULL),
           ('Rose', 'Nylund', 10, 1),
           ('Blanche', 'Devereaux', 9, 1),
           ('Ann', 'Perkins', 12, 2),
           ('Mark', 'Brendanawicz', 2, 3),
           ('Tom', 'Haverford', 10, 2),
           ('April', 'Ludgate', 7, 4),
           ('Andy', 'Dwyer', 1, 3),
           ('Ben', 'Wyatt', 5, 5),
           ('Jerry', 'Gergich', 5, 5),
           ('Donna', 'Meagle', 10, 1);