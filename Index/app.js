
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
    if (this.getId === this.id) {
        getId()
    }
}

employeeFunction.prototype.render = function () {
    let showDiv = document.createElement("div");
    showDiv.setAttribute('class', "grid-item");


    let showImg = document.createElement("img");
    showImg.setAttribute("src", this.Img);
    showDiv.appendChild(showImg);

    let Namediv = document.createElement("h6");
    Namediv.textContent = ` name is : ${this.FullName} `;

    let idDiv = document.createElement("h6");
    idDiv.textContent = `id : ${this.id}`;

    let departmentdiv = document.createElement("h6");
    departmentdiv.textContent = `department : ${this.Department}`;

    let leveldiv = document.createElement("h6");
    leveldiv.textContent = `Level : ${this.Level}`

    showDiv.appendChild(Namediv);
    showDiv.appendChild(idDiv);
    showDiv.appendChild(departmentdiv);
    showDiv.appendChild(leveldiv);
    navDiv.appendChild(showDiv);
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
