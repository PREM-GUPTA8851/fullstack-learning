// ================(Unit - 1)====================

// Arrow function:-- 
// const add = (a, b) => {
//   return a + b;
// };
// pros and cons of arrow function:--
// 1.They are more concise and can make code easier to read and understand.

// Block-scoped variables using let and const
// {
//   let age = 20;
//   age = 21; // let can be reassigned

//   const country = "India";
//   // country = "USA"; // const cannot be reassigned

//   console.log(age);     // 21
//   console.log(country); // India
// }

// console.log(age); // ReferenceError: age exists only inside the block
// console.log(country); // ReferenceError: country exists only inside the block

// Array iteration and transformation methods
const students = [
  { name: "Asha", marks: 85 },
  { name: "Ravi", marks: 62 },
  { name: "Neha", marks: 91 },
  { name: "Omar", marks: 48 },
];

// Iteration: use forEach when you want to perform an action for every item.
// Same iteration using a traditional for loop

for (let index = 0; index < students.length; index++) {
    console.log(`${index + 1}. ${students[index].name}: ${students[index].marks}`);
}

const students = [
  { name: "Asha", marks: 85 },
  { name: "Ravi", marks: 62 },
  { name: "Neha", marks: 91 },
  { name: "Omar", marks: 48 },
];


// MAP → har student se ek value lekar NEW array banana

const names = students.map((student) => student.name);

// Internally roughly ye ho raha hai:
// Asha object  → "Asha"
// Ravi object  → "Ravi"
// Neha object  → "Neha"
// Omar object  → "Omar"

console.log(names);
// ["Asha", "Ravi", "Neha", "Omar"]



// FILTER → condition check karo aur jo match kare sirf unko NEW array mein rakho

const toppers = students.filter((student) => student.marks >= 80);

// Asha → 85 >= 80 → true  → include
// Ravi → 62 >= 80 → false → skip
// Neha → 91 >= 80 → true  → include
// Omar → 48 >= 80 → false → skip

console.log(toppers);
// [
//   { name: "Asha", marks: 85 },
//   { name: "Neha", marks: 91 }
// ]

// // Transformation: reduce combines all items into one final value.
// const totalMarks = students.reduce(
//   (total, student) => total + student.marks,
//   0,
// );
// 

// console.log(names);
// console.log(toppers);
// console.log(totalMarks);

// // map, filter, and reduce do not change the original students array.


// ================= OBJECT DESTRUCTURING =================

const student = {
    name: "Asha",
    marks: 85,
    age: 20
};

// Normal way
const name1 = student.name;
const marks1 = student.marks;

// Destructuring way
const { name, marks, age } = student;

console.log(name);  // Asha
console.log(marks); // 85
console.log(age);   // 20


// Same students array wala example

const students = [
    { name: "Asha", marks: 85 },
    { name: "Ravi", marks: 62 }
];

// Normally:
students.forEach((student) => {
    console.log(student.name, student.marks);
});

// Destructuring directly parameter mein:
students.forEach(({ name, marks }) => {
    console.log(name, marks);
});

// Internally roughly:
// student = { name: "Asha", marks: 85 }
// { name, marks } = student
// name = "Asha"
// marks = 85



// ================= ARRAY DESTRUCTURING =================

const numbers = [10, 20, 30];
                  
// Normal way
const first = numbers[0];
const second = numbers[1];

// Destructuring way
const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


// Spread and rest operators
// SPREAD = ARRAY ko TODNA / KHOLNA
let arr = [10, 20, 30];

console.log(...arr);
// 10 20 30
// logic is: array ke andar ki values bahar nikal rahi hain


// REST = VALUES ko JODNA / COLLECT KARNA
function test(...nums) {
    // logic is: multiple values ko ek array me collect kar rahe hain
    console.log(nums);
}

test(10, 20, 30);
// [10, 20, 30]


// YAAD RAKHO:
//
// Spread →  [10,20,30] → 10 20 30
// Rest   →  10 20 30   → [10,20,30]
//
// Same (...) but:
// Spread = kholna
// Rest   = collect karna

// 1. ES MODULES
// Code ko alag files me divide karke import/export karte hain.

// math.js
export const add = (a, b) => a + b;
// named export

export default function multiply(a, b) {
    return a * b;
}
// default export


// App.js
import multiply, { add } from "./math.js";
// default + named export import


// 2. IMMUTABILITY
// React state ko directly modify nahi karte.
// Old state ko change karne ke bajay NEW state banate hain.

const [user, setUser] = useState({ name: "Prem", age: 21 });

// ❌ Wrong
user.age = 22;
// original object directly modify kar diya

// ✅ Correct
setUser({ ...user, age: 22 });
// spread se new object banaya


// Array me bhi same:

const [items, setItems] = useState([1, 2, 3]);

// ❌ Wrong
items.push(4);
// original array modify

// ✅ Correct
setItems([...items, 4]);
// new array create


// 3. FUNCTIONAL PROGRAMMING
// Function ko data ki tarah use karna + existing data ko unnecessarily modify na karna.

// Pure Function:
// same input → same output, koi side effect nahi

const square = (n) => n * n;

console.log(square(5)); // 25


// map() → new array return karta hai
const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);
// [2, 4, 6]
// original nums unchanged


// filter() → condition ke according NEW array
const even = nums.filter(n => n % 2 === 0);
// [2]


// reduce() → values ko single result me convert
const sum = nums.reduce((total, n) => total + n, 0);
// 6


// REACT CONNECTION:
//
// ES Modules → components ko files me organize
// Immutability → state ko safely update
// Pure Functions → predictable components/functions
// map/filter/reduce → data ko transform/render
//
// MAIN IDEA:
// React me → "Don't modify existing data, create new data."