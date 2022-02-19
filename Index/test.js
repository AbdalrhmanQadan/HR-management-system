let anArray = [];
let obj = {
    name: "ahmad",
    age: 10,
}
const returnsAnArray = () => {

    anArray.push([`Customer Name : ${obj.name} , Age : ${obj.age}`]);

    console.log(anArray);
}
returnsAnArray();

let anArray2 = [];
let recipeInfo = {
    name: "pizza",
    ingredients: ["bread", "tomato", "chicken", "mayo"],
    cookTime: "twoHours",
    price: "25$",
};

const returnsAnArray2 = () => {
    for (var i = 0 in obj) {
        anArray2 = [recipeInfo.name, [recipeInfo.ingredients], recipeInfo.cookTime, recipeInfo.price];
    }
    console.log(anArray2);
}
returnsAnArray2();


const courses = [
    {
        course: 'Java',
        Instructor: 'David',
        Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
        GroupName: 'Stars',
    },
    {
        course: 'JavaScript',
        Instructor: 'Van',
        Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
        GroupName: 'Nerd-ware',
    },
    {
        course: 'Python',
        Instructor: 'Delaney',
        Students: ['Barney', 'Kalé', 'Alisha'],
        GroupName: 'Whats-Up',
    },
    {
        course: 'DotNet',
        Instructor: 'Keanna',
        Students: ['Oli', 'Gisselle', 'Pru'],
        GroupName: 'Lol',
    },
];

const getInfo = (arr) => {
    let coursesName = [];
    let studentsName = [];
    // write your code here

    return { coursesName, studentsName };
};