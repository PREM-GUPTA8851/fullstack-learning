
"use strict";

// ==========================================
// 1. VARIABLES: let, const, var
// ==========================================

const student = {
    name: "Prem Gupta",
    marks: "85",
    city: "Satna"
};
// const: student ko naye object se replace nahi kar sakte.
// Lekin student.name ki property change kar sakte hain.

let attendance = 90;
attendance = 95;
// let: value change kar sakte hain.
// 90 -> 95

var college = "LPU";
var college = "LPU Punjab";
// var: same scope mein redeclare bhi kar sakte hain.

// ==========================================
// 2. DATA TYPES + TYPE CONVERSION
// ==========================================

let marks = Number(student.marks);
// student.marks = "85" (string)
// Number("85") = 85 (number)

let bonus = 5;
let totalMarks = marks + bonus;
// 85 + 5 = 90

let passed = totalMarks >= 40;
// 90 >= 40 => true (boolean)

let result;
// Abhi value assign nahi hui => undefined

let missingValue = null;
// Intentionally empty value

console.log(typeof student.name); // string
console.log(typeof marks);        // number
console.log(typeof passed);       // boolean
console.log(typeof result);       // undefined
console.log(typeof missingValue); // object (JS quirk)

// Invalid conversion
let invalidMarks = Number("85abc");
console.log(invalidMarks); // NaN
// String valid number nahi hai.

// ==========================================
// 3. OPERATORS
// ==========================================

console.log(10 + 5);  // 15: addition
console.log(10 - 5);  // 5: subtraction
console.log(10 * 5);  // 50: multiplication
console.log(10 / 5);  // 2: division
console.log(10 % 3);  // 1: remainder
console.log(2 ** 3);  // 8: power

console.log("Marks: " + marks);
// "Marks: 85" => string concatenation

console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"
// Evaluation left to right.

// ==========================================
// 4. PRE-INCREMENT vs POST-INCREMENT
// ==========================================

let a = 10;
console.log(++a); // 11: pehle increase, fir print

let b = 10;
console.log(b++); // 10: pehle print, fir increase
console.log(b);   // 11

// ==========================================
// 5. BLOCK SCOPE
// ==========================================

let score = 50;

if (true) {
    let score = 90;
    console.log(score); // 90: inner block
}

console.log(score); // 50: outer block

// ==========================================
// 6. STACK vs HEAP: VALUE vs REFERENCE
// ==========================================

let x = 10;
let y = x;
y = 20;

console.log(x, y); // 10 20
// Primitive: y ko x ki value ki copy mili.

let user1 = { name: "Prem" };
let user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul
console.log(user2.name); // Rahul
// Dono variables same object ko refer karte hain.

// ==========================================
// 7. STRING METHODS
// ==========================================

const fullName = "  Prem Gupta  ";

console.log(fullName.trim());           // "Prem Gupta"
console.log(fullName.toUpperCase());    // "  PREM GUPTA  "
console.log(fullName.toLowerCase());    // "  prem gupta  "
console.log(fullName.includes("Prem")); // true
console.log(fullName.indexOf("Gupta")); // 7
console.log(fullName.slice(2, 6));       // "Prem"
console.log(fullName.replace("Prem", "Aman"));
// "  Aman Gupta  "

console.log("JavaScript".split(""));
// ["J", "a", "v", ...]

// String immutable hoti hai:
console.log(fullName); // Original string unchanged

// ==========================================
// 8. FINAL RESULT
// ==========================================

console.log("Student:", student.name);
console.log("College:", college);
console.log("Attendance:", attendance);
console.log("Total Marks:", totalMarks);
console.log("Passed:", passed);

// Expected final values:
// Student: Prem Gupta
// College: LPU Punjab
// Attendance: 95
// Total Marks: 90
// Passed: true
