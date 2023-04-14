--see all departments
SELECT
    role.id,
    role.title AS job_title,
    role.salary,
    department.name AS department
FROM role
LEFT JOIN department ON role.department_id = department.id

--see roles & department name
SELECT
    role.id,
    role.title AS job_title,
    role.salary,
    department.name AS department
FROM role
LEFT JOIN department ON role.department_id = department.id;

--see employee names, job titles, department names
SELECT
	employee.id,
    employee.first_name,
    employee.last_name,
    role.title AS job_title,
    department.name AS department,
    employee.manager_id AS manager
FROM employee
	INNER JOIN role ON employee.role_id = role.id
	INNER JOIN department ON role.department_id = department.id;