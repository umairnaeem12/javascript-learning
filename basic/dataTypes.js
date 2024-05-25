// There are tow types of dataTypes in JavsScript.
//  -1: Primitive DataTypes.
//  -2: Non-Primitive DataTypes

// Primivites DataTypes:

// 1: Stirng: Represents textual data.
let name = "Umair"
console.log(typeof name); // typeof use to check the variable type (string)

// 2: Number: Represents both integer and floating-point numbers.
// Float Numbers: 25.8
let age = 25;
console.log(typeof age); // "number"

// 3: Boolean: Represents a logical entity and can have two values: true and false.
let isStudent = true;
console.log(typeof isStudent); // "boolean"

// 4: Undefined: Represents a variable that has been declared but not assigned a value.
let address;
console.log(typeof address); // "undefined"

// 5: Null: Represents the intentional absence of any object value. It is treated as an object type in JavaScript.
let car = null;
console.log(typeof car); // "object" (but it is actually a primitive type)

// 6: BigInt: Represents whole numbers larger than 2^53 - 1.
//  which is the largest number JavaScript can reliably represent with the Number primitive.
let bigNumber = BigInt(123456789012345678901234567890);
console.log(typeof bigNumber); // "bigint"


// 2: Non-primitives DataTypes:

// 1: Object: An unordered collection of key-value pairs. Objects can store more complex data structures.
let person = {
    name: "Umair",
    age: 23
}
console.log(typeof person) // "object"

// 2: Array: A special type of object used for storing ordered collections.
let data = [1, 2, 3, 4, 5];
console.log(typeof data); // "object"

// 3: Functions: A special type of object that can be called.
function greet() {
    console.log("Hello World")
}
console.log(typeof greet); // "function"


//Also the dataTypes contains two types:


// 1- Immutable: The state of an immutable object cannot be changed after it is created. 
// Examples in JavaScript include String, Number, Boolean, Symbol, and BigInt.

let str = "Hello";
str[0] = "h"; // This will not change the string
console.log(str); // "Hello"

let num = 42;
num = num + 1; // This creates a new number, it does not modify the original number
console.log(num); // 43


// 2- Mutable: The state of a mutable object can be changed after it is created. 
// Examples in JavaScript include Object, Array, and Function.

let user = { name: "Umair", age: 25 };
user.age = 26; // This modifies the age property of the user object
console.log(user); // { name: "Umair", age: 26 }

let hobbies = ["reading", "sports", "coding"];
hobbies.push("music"); // This modifies the hobbies array by adding a new element
console.log(hobbies); // ["reading", "sports", "coding", "music"]


