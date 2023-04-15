function viewAllRoles() {
    const rolesTable = 'SELECT role.id, role.title AS title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id';

    db.query(rolesTable, (err, results) => console.table(results));
};

module.exports = viewAllRoles;