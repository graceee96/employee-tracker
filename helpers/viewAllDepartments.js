function viewAllDepartments() {
    const departmentTable = 'SELECT department.id AS department_id, department.name AS department FROM department';

    db.query(departmentTable, (err, results) => console.table(results));
};

module.exports = viewAllDepartments;