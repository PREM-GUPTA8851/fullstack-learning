// Primitive (call by value) --> copy hota h 

// 7 types : String, Number, Boolean, Null,undefined, symbol (value ko unique bnane k liye use hota h), BigInt(scientifc and bigger values)

const score = 100; // constant define
const decimal = 86;

const isLogg = false;
const outsideTemp = null;// empty h

let userEmail; // undefined 

// declare symbol (everything where symbol is defined is unique)
const uniqueId = Symbol('123');
const anotherId = Symbol('123');
console.log(uniqueId === anotherId); // false bcz they are unique

// js --> Statically or dynamically typed language --> js is dynamically typed language (data type ko explicitly define karne ki jarurat nahi h)

// 

// Reference type --> non_primitive

// Array, Objects, Functions,
// inka data type always object hota h (call by reference) --> memory me reference store hota h, value nahi
// arrays in [] 
const students = ["John", "Jane", "Jack"];

// objects in {} curly braces
const userDetails = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com"
};

// in js function keyword likhna pdega function define karne k liye
const ans = function(){
    console.log("Hello World");
}

const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

console.log(typeof ans); // "object function"