--see all departments
SELECT department.id AS department_id, department.name AS department
FROM department;

--see roles & department name
SELECT role.id, role.title AS title, role.salary, department.name AS department
FROM role
LEFT JOIN department ON role.department_id = department.id;

--see employee names, job titles, department names, managers
SELECT
	e.id,
    e.first_name,
    e.last_name,
    role.title AS title,
    department.name AS department,
    CONCAT_WS(' ' , m.first_name, m.last_name) AS manager
FROM employee e
	INNER JOIN role ON e.role_id = role.id
	INNER JOIN department ON role.department_id = department.id
    LEFT JOIN employee m ON m.id = e.manager_id
	ORDER BY e.id;