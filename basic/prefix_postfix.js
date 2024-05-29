// The increment (++) operator increments (adds one to) its operand and 
// returns the value before or after the increment, depending on where the operator is placed.

// Example:

// PostFix
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

// Note:
// let x = 3; initializes x with the value 3.
// const y = x++; assigns y the value of x before incrementing. So, y gets the value 3.
// After y is assigned, x is incremented by 1. So, x becomes 4.
// x becomes 4 after the increment.
// y remains 3 because it was assigned the value of x before the increment.

// PreFix
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// Note:
// let a = 3; initializes a with the value 3.
// const b = ++a; increments a by 1 first, so a becomes 4.
// Then, the new value of a (which is 4) is assigned to b.
// a becomes 4 after the increment.
// b is assigned the new value of a, which is 4.


// Summary:
// x++ (post-increment) increments x after assigning its value, so y gets the original value of x.
// ++a (pre-increment) increments a before assigning its value, so b gets the incremented value of a.