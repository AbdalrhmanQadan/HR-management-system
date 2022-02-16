
let employee = [];
let form = document.getElementById("FormData");
let navDiv = document.getElementById("divnav");

function employeeFunction(FullName, Department, Level, Img) {
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.Img = Img;
    this.id = 0;
    employee.push(this);
}


employeeFunction.prototype.getId = function () {
    this.id = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

}

employeeFunction.prototype.render = function () {
    let Namediv = document.createElement("h5");
    //let image = document.createElement("img");
    //image.setAttribute("src", this.Img);

    Namediv.textContent = `${document.createElement("img").setAttribute("src", this.Img)}  name is : ${this.FullName} ID : ${this.id} 
    Department ${this.Department} Level : ${this.Level}`;

    navDiv.appendChild(Namediv);
}

form.addEventListener("submit", handelSubmit);
function handelSubmit(event) {
    event.preventDefault()
    let FullName = event.target.fulName.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;
    let Img = event.target.url.value;

    let newEmployee = new employeeFunction(FullName, Department, Level, Img);
    newEmployee.getId();
    renderAll();
    form.reset();
    console.log(employee)
}
function renderAll() {
    navDiv.innerHTML = "";
    for (let i = 0; i < employee.length; i++) {
        employee[i].render();
    }
}
renderAll();
