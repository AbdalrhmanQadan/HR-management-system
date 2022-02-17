let table = document.getElementById("Table");

function renderHeaderTable() {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let DepartmentColumn = document.createElement('th');
    DepartmentColumn.textContent = "Department";
    tr.appendChild(DepartmentColumn);
    let numberEmployees = document.createElement('th');
    numberEmployees.textContent = "#of Employees";
    tr.appendChild(numberEmployees);
    let totalSalary = document.createElement('th');
    totalSalary.textContent = "Total Salary";
    tr.appendChild(totalSalary);
    let avergeSalary = document.createElement('th');
    avergeSalary.textContent = "Averge Salary";
    tr.appendChild(avergeSalary);
}

function renderBodyTable() {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let typeDepartment = document.createElement("td");
    typeDepartment.textContent = this.Department;
}

renderHeaderTable();