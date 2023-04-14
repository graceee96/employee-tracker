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
    VALUES ('Rose', 'Nylund', 10, 2),
           ('Dorothy', 'Zbornak', 8, NULL),
           ('Blanche', 'Devereaux', 9, 2),
           ('Sofia', 'Petrillo', 11, NULL),
           ('Leslie', 'Knope', 3, NULL),
           ('Ann', 'Perkins', 12, 4),
           ('Mark', 'Brendanawicz', 2, 5),
           ('Tom', 'Haverford', 10, 2),
           ('Ron', 'Swanson', 6, NULL),
           ('April', 'Ludgate', 7, 9),
           ('Andy', 'Dwyer', 1, 5),
           ('Ben', 'Wyatt', 5, 13),
           ('Chris', 'Traeger', 4, NULL),
           ('Jerry', 'Gergich', 5, 13),
           ('Donna', 'Meagle', 10, 2),