// We Learn variables in Javascript:

// First Method is "var".
// Note: -1: Var is an functional or Global scoped variable(access any where).
//       -2: Again asign the value also declare with the same name.
//       -3: If we declare inside of the function then we can not acces outside of the function.

var name = "Umair Naeem"; // Initial declaration and assignment
var name = 'xyz';         // Redeclaration and reassignment
console.log(name);        // Logs: 'xyz'


// Inside of the function: "Var"
function myFunction() {
    var name = "umair";
    console.log(name); // This will work: "umair"
}
myFunction();
console.log(name); // This will cause an error: ReferenceError: name is not defined


// Outside of the Function: "Var"
var name;
function myFunction() {
    name = "umair";
}
myFunction();
console.log(name); // This will work: "umair"


// Second Method "Let".
// Note: -1: Let is a block scoped.
//       -2: In, Let we cannot declare values with the same name but resign the value

let city = "Lahore, Punjab"; // Initial declaration and assignment
city = "ryk";                // Reassignment
console.log(city);           // Logs: 'ryk'

// Inside of the Function: "Let"
function myFunction() {
    let name = "umair";
    console.log(name); // This will work: "umair"
}
myFunction();
console.log(name); // This will cause an error: ReferenceError: name is not defined

// Outside of the  Function: "Let"
let name; // Declare name in the outer scope
function myFunction() {
    name = "umair"; // Assign a value to name inside the function
}
myFunction();
console.log(name); // This will work: "umair"


// Second Method "const".
// Note: -1: const is a block scoped.
//       -2: In, Let we cannot declare values with the same name or not resign the value.

const homeTown = "Lahore, Punjab";
// homeTown = "ryk"; // This will cause an error: TypeError: Assignment to constant variable.
console.log(homeTown); // Logs: 'Lahore, Punjab'


// Although you cannot reassign a const variable, "const"
// you can modify the contents of an object or array declared with const:

const person = { name: "Umair" };
person.name = "Naeem"; // This is allowed

console.log(person.name); // Logs: 'Naeem'

const cities = ["Lahore", "Karachi"];
cities.push("Islamabad"); // This is allowed

console.log(cities); // Logs: ['Lahore', 'Karachi', 'Islamabad']

