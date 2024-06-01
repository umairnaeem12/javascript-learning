// String Methods.

// Also we can create string through {"", '' , ``, new String};    
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("Umair");

// There are different types of string methods:

// 1- charAt(index):
// Description: Returns the character at the specified index.

let str = "Hello";
console.log(str.charAt(1)); // "e"

// 2- concat(str1, str2, ...):
// Description: Concatenates the specified strings to the calling string and returns a new string.

let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); // "Hello World"

// 3- includes(searchString, position):
// Description: Determines whether one string may be found within another string, returning true or false.

let str4 = "Hello, World!";
console.log(str.includes("World")); // true

// 4- replace(searchValue, newValue):
// Description: Returns a new string with some or all matches of a pattern replaced by a replacement.


let str5 = "Hello, World!";
console.log(str5.replace("World", "Universe")); // "Hello, Universe!"

// 5- slice(beginIndex, endIndex):
// Description: Extracts a section of a string and returns it as a new string.

let str6 = "Hello, World!";
console.log(str6.slice(0, 5)); // "Hello"

// 6- split(separator, limit):
// Description: Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.

let str7 = "Hello, World!";
console.log(str7.split(", ")); // ["Hello", "World!"]

// 7- startsWith(searchString, position):
// Description: Determines whether a string begins with the characters of a specified string, returning true or false.

let str8 = "Hello, World!";
console.log(str8.startsWith("Hello")); // true

// 8 -substring(indexStart, indexEnd):
// Description: Returns the part of the string between the start and end indexes, or to the end of the string.

let str9 = "Hello, World!";
console.log(str9.substring(0, 5)); // "Hello"

// 9- toLowerCase():
// Description: Returns the calling string value converted to lower case.

let str10 = "Hello, World!";
console.log(str10.toLowerCase()); // "hello, world!"

// 10- toUpperCase():
// Description: Returns the calling string value converted to upper case.

let str11 = "Hello, World!";
console.log(str11.toUpperCase()); // "HELLO, WORLD!"

// 11- trim():
// Description: Removes whitespace from both ends of a string.

let str12 = "   Hello, World!   ";
console.log(str12.trim()); // "Hello, World!"

// 12- trimStart() / trimEnd():
// Description: Removes whitespace from the start/end of a string.

let str13 = "   Hello, World!   ";
console.log(str13.trimStart()); // "Hello, World!   "
console.log(str13.trimEnd()); // "   Hello, World!"

// 13- valueOf():
// Description: Returns the primitive value of a String object.

const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }
console.log(stringObj.valueOf());
// Expected output: "foo"







