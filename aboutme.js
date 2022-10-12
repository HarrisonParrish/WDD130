console.log("It worked!")
let food = ["Sushi", "Pizza", "Ice cream", "Chicken parm"];
let newP = document.createElement("p");
newP.textContent = `My favorite foods: ${food}`;
document.body.appendChild(newP);  
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const today = new Date();
console.log(today);
const day = today.getDay();
console.log(day);
const todayElement = document.querySelector("#displayToday");
todayElement.textContent = weekday[day];

