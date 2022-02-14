
function employee(EmployeeID, FullName, Department, Level, Url,) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.Url = Url;
}

employee.prototype.salary = function () {
    if (this.Level == "Senior") {
        return Math.random() * (2000 - 1500 + 1) + 1500;
    }
    else if (this.Level == "Mid-Senior") {
        return Math.random() * (1500 - 1000 + 1) + 1000;
    }
    else if (this.Level == "Junior") {
        return Math.random() * (1000 - 500 + 1) + 500;
    }

}

const employee3 = new employee(1000, "Ghazi Samer", "Administration", "Senior");
employee.prototype.emp1 = function () {
    document.write(`<h3>name is  ${this.FullName}</h3><h4> and the salary is ${employee3.salary()}</h4>`);
}

const employee4 = new employee(1001, "Lana Ali", "Finance", "Senior");
employee.prototype.emp1 = function () {
    document.write(`<h3>name is  ${this.FullName}</h3><h4> and the salary is ${employee3.salary()}</h4>`);
}

const employee5 = new employee(1002, "Tamara Ayoub", "Marketing", "Senior");
employee.prototype.emp1 = function () {
    document.write(`<h3>name is  ${this.FullName}</h3><h4> and the salary is ${employee3.salary()}</h4>`);
}

const employee6 = new employee(1003, "Safi Walid", "Administration", "Mid-Senior");
employee.prototype.emp1 = function () {
    document.write(`<h3>name is  ${this.FullName}</h3><h4> and the salary is ${employee3.salary()}</h4>`);
}

const employee7 = new employee(1004, "Omar Zaid", "Development", "Senior");
employee.prototype.emp1 = function () {
    document.write(`<h3>name is  ${this.FullName}</h3><h4> and the salary is ${employee3.salary()}</h4>`);
}

const employee8 = new employee(1005, "Rana Saleh", "Development", "Junior");
employee.prototype.emp1 = function () {
    document.write(`<h3>name is  ${this.FullName}</h3><h4> and the salary is ${employee3.salary()}</h4>`);
}

const employee9 = new employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
employee.prototype.emp1 = function () {
    document.write(`<h3>name is  ${this.FullName}</h3><h4> and the salary is ${employee3.salary()}</h4>`);
}






const employee1 = new employee(3, "abdalrhman zaher",
    ["Administration", "Marketing", "Development", "Finance"],
    ["Junior", "Mid-Senior", "Senior"], "dfsfds");

const employee2 = new employee(1, "mohammad zaher", "Marketing", "Senior", "sdffdssdfsfd");

employee3.emp1();
employee4.emp1();
employee5.emp1();
employee6.emp1();
employee7.emp1();
employee8.emp1();
employee9.emp1();

console.log(employee2);
console.log(`the salary after calculate the net salary = ${employee2.salary() * 7.5}`);