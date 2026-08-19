# About Basics
````markdown
```javascript
// CONST

const accountId = 144553;
// const se variable declare kiya.
// Is variable ko baad me reassign nahi kar sakte.

// accountId = 200;
// Error aayega.
// Kyunki const variable ko reassign nahi kar sakte.

// const accountId = 200;
// Error aayega.
// Same scope me const variable ko dobara declare nahi kar sakte.


// const object/array ke andar ki value change ho sakti hai

const user = {
    name: "Prem"
};
// user object ka reference constant hai.
// Matlab user ko kisi completely naye object se replace nahi kar sakte.

user.name = "Rahul";
// Object ke andar ki property change kar sakte hain.

user.age = 21;
// Nayi property bhi add kar sakte hain.

// user = { name: "Aman" };
// Error aayega.
// Pura object kisi naye object se replace nahi kar sakte.


// LET

let accountEmail = "hitesh@google.com";
// let se variable declare kiya.
// Iski value future me change kar sakte hain.

accountEmail = "prem@gmail.com";
// Purani value replace hokar new value aa gayi.

// let accountEmail = "another@gmail.com";
// Error aayega.
// Same scope me let ko dobara declare nahi kar sakte.


let age = 21;
// age ki initial value 21 hai.

age = 22;
// Existing age variable ki value 21 se 22 ho gayi.

age = 23;
// Value ko kitni bhi baar reassign kar sakte hain.


// VAR

var accountPassword = "12345";
// var se variable declare kiya.

accountPassword = "99999";
// var ki value reassign kar sakte hain.

var accountPassword = "newPassword";
// var ko same scope me dobara declare bhi kar sakte hain.
// Isi wajah se kabhi-kabhi bugs create ho sakte hain.


// Reassignment vs Redeclaration

let x = 10;
// Pehli baar x declare kiya.

x = 20;
// Ye reassignment hai.
// Existing x ki value 10 se 20 ho gayi.

// let x = 30;
// Ye redeclaration hota.
// Same scope me let variable ko dobara declare nahi kar sakte.


const y = 10;
// Pehli baar y declare kiya.

// y = 20;
// Error aayega.
// const variable ko reassign nahi kar sakte.

// const y = 30;
// Error aayega.
// Same scope me const ko dobara declare nahi kar sakte.


var z = 10;
// Pehli baar z declare kiya.

z = 20;
// Existing z ki value change ki.
// Ye reassignment hai.

var z = 30;
// Same scope me var ko dobara declare kar sakte hain.
// Ye redeclaration hai.


// Block scope ka difference

let a = 10;
// Ye outer block ka a hai.

if (true) {
    let a = 20;
    // Ye alag block ke andar naya a hai.

    console.log(a); // 20
    // Andar wale block ka a print hoga.
}

console.log(a); // 10
// Bahar wala original a print hoga.


const b = 10;
// Ye outer block ka b hai.

if (true) {
    const b = 20;
    // Ye alag block ke andar naya b hai.

    console.log(b); // 20
    // Andar wale block ka b print hoga.
}

console.log(b); // 10
// Bahar wala original b print hoga.


var c = 10;
// c ki initial value 10 hai.

if (true) {
    var c = 20;
    // var block-scoped nahi hota.
    // Isliye yaha naya c create nahi hua.
    // Bahar wale c ki value change ho gayi.
}

console.log(c); // 20
// Same c ki value 20 ho chuki hai.


// Ek aur example

let score = 100;
// let variable declare kiya.

score = 200;
// score ki value change kar sakte hain.

const maxScore = 500;
// const variable declare kiya.

// maxScore = 600;
// Error aayega.
// const variable ko reassign nahi kar sakte.


// Array ke saath const

const numbers = [1, 2, 3];
// numbers array ka reference constant hai.

numbers.push(4);
// Array ke andar new value add kar sakte hain.

numbers[0] = 100;
// Existing array element ki value bhi change kar sakte hain.

// numbers = [10, 20, 30];
// Error aayega.
// Pura array kisi naye array se replace nahi kar sakte.


// Short summary

// const:
// Reassign nahi kar sakte.
// Same scope me redeclare nahi kar sakte.
// Block-scoped hota hai.

// let:
// Reassign kar sakte hain.
// Same scope me redeclare nahi kar sakte.
// Block-scoped hota hai.

// var:
// Reassign kar sakte hain.
// Same scope me redeclare bhi kar sakte hain.
// Block-scoped nahi hota.
// Function-scoped hota hai.
```
````

# About Data_Types 

```javascript
"use strict";
// Strict mode JavaScript ko stricter rules ke saath run karne me help karta hai.
// Kuch common mistakes ko errors me convert kar deta hai.
// Modern JavaScript me modules aur classes automatically strict mode me hote hain.


// alert(3 + 3);
// Browser me alert ek popup dikhata hai.
// Lekin Node.js environment me alert available nahi hota.


// Code readability important hai.

console.log(3 + 3);
// Output: 6
// Code ko aise likhna better hai ki easily readable ho.

console.log("Hitesh");
// String value console me print hogi.


// Variables

let name = "hitesh";
// name ek string hai.
// String text data ko represent karta hai.

let age = 18;
// age ek number hai.
// JavaScript me integer aur decimal dono ke liye number type use hota hai.

let isLoggedIn = false;
// boolean type sirf do values rakhta hai:
// true ya false.

let state;
// Variable declare kiya hai lekin koi value assign nahi ki.
// Isliye state ki value undefined hai.


// Primitive Data Types


// number

let score = 100;
// Number normal numeric values ke liye use hota hai.

let price = 99.99;
// Decimal values bhi number type hi hoti hain.

// JavaScript Number safe integer range roughly
// -(2^53 - 1) se +(2^53 - 1) tak hoti hai.


// bigint

let bigNumber = 1234567890123456789012345678901234567890n;
// Bahut bade integers ke liye BigInt use hota hai.
// BigInt value ke end me n lagate hain.


// string

let firstName = "Hitesh";
// String text ya characters ko represent karta hai.

let city = 'Delhi';
// Single quotes ya double quotes dono se string bana sakte hain.


// boolean

let isOnline = true;
// Boolean value true ho sakti hai.

let isAdmin = false;
// Ya false ho sakti hai.
// Mostly conditions aur yes/no type situations me use hota hai.


// null

let temperature = null;
// null ka matlab hai intentionally koi value nahi hai.
// Matlab variable exist karta hai aur usme currently empty value rakhi gayi hai.


// undefined

let userState;
// Variable declare hua hai.
// Lekin abhi tak koi value assign nahi ki gayi.
// Isliye iska value undefined hai.


// symbol

let id1 = Symbol("id");
let id2 = Symbol("id");
// Dono ka description same hai "id".
// Lekin dono unique values hain.

console.log(id1 === id2); // false
// Symbol mostly unique identifiers banane ke liye use hota hai.


// Object

let user = {
    name: "Hitesh",
    age: 18
};
// Object multiple related values ko key-value pairs me store karta hai.

console.log(user.name);
// Output: Hitesh

console.log(user.age);
// Output: 18


// typeof operator

console.log(typeof undefined);
// Output: "undefined"
// undefined ka type undefined hota hai.

console.log(typeof null);
// Output: "object"
// Ye JavaScript ka historical behavior hai.
// null actually primitive value hai, lekin typeof null "object" return karta hai.

console.log(typeof "Hitesh");
// Output: "string"

console.log(typeof 18);
// Output: "number"

console.log(typeof true);
// Output: "boolean"

console.log(typeof 123n);
// Output: "bigint"

console.log(typeof Symbol("id"));
// Output: "symbol"

console.log(typeof {});
// Output: "object"


// Short summary

// number    -> Normal numbers aur decimal values
// bigint    -> Bahut bade integers
// string    -> Text values
// boolean   -> true ya false
// null      -> Intentionally empty value
// undefined -> Value abhi assign nahi hui
// symbol    -> Unique value
// object    -> Multiple values ko ek structure me store karta hai
```

# About Conversion_Operations
```javascript
let score = "hitesh";
// score me "hitesh" ek string hai.

console.log(typeof score);
// typeof variable ka data type batata hai.
// Output: string

console.log(typeof(score));
// typeof score aur typeof(score) dono same hain.
// Output: string


let valueInNumber = Number(score);
// Number() string ya kisi aur value ko number me convert karne ki koshish karta hai.
// Lekin "hitesh" valid number nahi hai.
// Isliye valueInNumber ki value NaN banegi.

console.log(typeof valueInNumber);
// NaN ka typeof "number" hota hai.
// Output: number

console.log(valueInNumber);
// Output: NaN
// NaN ka matlab Not a Number.


// String ko Number me convert karne ke examples

// "33" => 33
// Valid numeric string number ban sakti hai.

// "33abc" => NaN
// Isme number ke saath characters hain,
// isliye Number() ise valid number me convert nahi kar sakta.

// true => 1
// false => 0


let isLoggedIn = "hitesh";
// isLoggedIn me ek non-empty string store hai.

let booleanIsLoggedIn = Boolean(isLoggedIn);
// Boolean() kisi bhi value ko true ya false me convert karta hai.
// "hitesh" empty string nahi hai, isliye true banega.

console.log(booleanIsLoggedIn);
// Output: true


// Number ko Boolean me convert karne ke examples

// 1 => true
// 0 => false

// "" => false
// Empty string false ban jaati hai.

// "hitesh" => true
// Koi bhi non-empty string true ban jaati hai.


// Kuch aur important conversions:

// Boolean(1) => true
// Boolean(0) => false
// Boolean(-1) => true

// Boolean(null) => false
// Boolean(undefined) => false
// Boolean(NaN) => false


let someNumber = 33;
// someNumber ki value number type me hai.

let stringNumber = String(someNumber);
// String() number ko string me convert karta hai.
// Ab value "33" hai.

console.log(stringNumber);
// Output: 33

console.log(typeof stringNumber);
// Output: string


// Operations

let value = 3;
// value ki value 3 hai.

let negValue = -value;
// - lagane se positive value negative ban jaati hai.
// negValue = -3

console.log(negValue);
// Output: -3


console.log(2 + 2);
// Addition
// Output: 4

console.log(2 - 2);
// Subtraction
// Output: 0

console.log(2 * 2);
// Multiplication
// Output: 4

console.log(2 ** 3);
// ** power operator hai.
// 2 ki power 3
// Output: 8

console.log(2 / 3);
// Division
// Output: approximately 0.666...

console.log(2 % 3);
// % remainder deta hai.
// 2 ko 3 se divide karne par remainder 2 bachta hai.
// Output: 2


let str1 = "hello";
// Pehli string.

let str2 = " hitesh";
// Dusri string.
// Starting me space bhi hai.

let str3 = str1 + str2;
// + operator strings ko jod deta hai.
// Is process ko concatenation kehte hain.
// str3 = "hello hitesh"

console.log(str3);
// Output: hello hitesh


console.log("1" + 2);
// Pehle operand string hai.
// Isliye number 2 bhi string ban jayega.
// Output: "12"

console.log(1 + "2");
// Ek operand string hai.
// Isliye result string concatenation hoga.
// Output: "12"

console.log("1" + 2 + 2);
// Evaluation left se right hogi.
//
// "1" + 2 => "12"
// "12" + 2 => "122"
//
// Output: "122"

console.log(1 + 2 + "2");
// Evaluation left se right hogi.
//
// 1 + 2 => 3
// 3 + "2" => "32"
//
// Output: "32"


console.log((3 + 4) * 5 % 3);
// Pehle brackets solve honge.
//
// 3 + 4 = 7
// 7 * 5 = 35
// 35 % 3 = 2
//
// Output: 2


console.log(+true);
// Unary + Boolean ko number me convert karta hai.
// true => 1
// Output: 1

console.log(+"");
// Unary + empty string ko number me convert karta hai.
// "" => 0
// Output: 0


let num1, num2, num3;
// Teen variables declare kiye.
// Abhi inki value undefined hai.

num1 = num2 = num3 = 2 + 2;
// Pehle 2 + 2 solve hoga.
//
// 2 + 2 = 4
//
// num3 = 4
// num2 = 4
// num1 = 4
//
// Ab tino variables ki value 4 hai.


let gameCounter = 100;
// gameCounter ki initial value 100 hai.

++gameCounter;
// Ye pre-increment operator hai.
// Pehle value 1 se increase hogi.
//
// gameCounter = 101

console.log(gameCounter);
// Output: 101


// Pre-increment aur Post-increment ka difference

let a = 10;
// a ki initial value 10 hai.

console.log(++a);
// Pehle a increase hoga.
// a = 11
// Fir 11 print hoga.


let b = 10;
// b ki initial value 10 hai.

console.log(b++);
// Pehle current value print hogi.
// Output: 10
//
// Uske baad b increase hoga.
// Ab b = 11

console.log(b);
// Output: 11


// Short summary

// Number(value)
// Value ko number me convert karta hai.

// Boolean(value)
// Value ko true ya false me convert karta hai.

// String(value)
// Value ko string me convert karta hai.

// + with strings
// String concatenation kar sakta hai.

// +true
// true ko 1 me convert karta hai.

// ++value
// Pehle value increase hoti hai, fir use hoti hai.

// value++
// Pehle current value use hoti hai, fir increase hoti hai.

// Comparison Operators

console.log(2 > 1);
// greater than: 2 bada hai 1 se, output true.

console.log(2 >= 1);
// greater than or equal to, output true.

console.log(2 < 1);
// less than: 2 chhota nahi hai 1 se, output false.

console.log(2 == 1);
// loose equality: values compare karta hai, output false.

console.log(2 != 1);
// values equal nahi hain, output true.


// JavaScript comparison se pehle string ko number me convert kar sakta hai.

console.log("2" > 1);
// "2" number 2 me convert hota hai, isliye true.

console.log("02" > 1);
// "02" bhi number 2 me convert hota hai, isliye true.


// null comparisons thode confusing hain.

console.log(null > 0);
// null comparison me 0 ban sakta hai, 0 > 0 false hai.

console.log(null == 0);
// false, kyunki == me null sirf undefined ke equal hota hai.

console.log(null >= 0);
// null 0 me convert hota hai, 0 >= 0 isliye true.


// undefined number me convert hone par NaN behave karta hai.

console.log(undefined == 0);
// false.

console.log(undefined > 0);
// false.

console.log(undefined < 0);
// false.


// Strict equality

console.log("2" === 2);
// false, kyunki value similar hai but types different hain.
// "2" string hai aur 2 number hai.


// Interview rule:
// ==  value compare karta hai with type conversion.
// === value aur type dono compare karta hai.
// Generally JavaScript me === prefer karo.
```

# Strings_Basics 
```javascript
const name = "hitesh";
// name me string value store hai.

const repoCount = 50;
// repoCount me number value store hai.

// console.log(name + repoCount + " Value");
// + se strings ko concatenate kar sakte hain.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Template literal me ${} ke andar variable directly use kar sakte hain.
// Output: Hello my name is hitesh and my repo count is 50


const gameName = new String('hitesh-hc-com');
// String object create kiya, jisme string ke methods available hote hain.

// console.log(gameName[0]);
// Index 0 ka character access karega.
// Output: h

// console.log(gameName.__proto__);
// String object ka prototype dikhata hai.


// console.log(gameName.length);
// Total characters count karega.
// Output: 13

// console.log(gameName.toUpperCase());
// String ko uppercase me convert karta hai.
// Output: HITESH-HC-COM
// Original gameName change nahi hota.

console.log(gameName.charAt(2));
// Index 2 ka character return karta hai.
// Output: t

console.log(gameName.indexOf('t'));
// Character 't' ka first index return karta hai.
// Output: 2


const newString = gameName.substring(0, 4);
// Index 0 se start karke index 4 se pehle tak characters lega.
// Output value: hite

console.log(newString);
// Output: hite


const anotherString = gameName.slice(-8, 4);
// Start index -8 ko string ke end se count karta hai.
// Yaha calculated start index end index 4 ke baad aata hai, isliye empty string milegi.
// Output: ""

console.log(anotherString);


const newStringOne = "   hitesh    ";
// String ke start aur end me extra spaces hain.

console.log(newStringOne);
// Output me spaces ke saath hitesh print hoga.

console.log(newStringOne.trim());
// trim() starting aur ending spaces remove karta hai.
// Output: hitesh


const url = "https://hitesh.com/hitesh%20choudhary";
// URL me %20 space ko represent karta hai.

console.log(url.replace('%20', '-'));
// replace() '%20' ko '-' se replace karta hai.
// Output: https://hitesh.com/hitesh-choudhary


console.log(url.includes('sundar'));
// includes() check karta hai given text string me present hai ya nahi.
// Output: false


console.log(gameName.split('-'));
// split('-') string ko '-' ke basis par array me tod deta hai.
// Output: [ 'hitesh', 'hc', 'com' ]

const gameName = new String('hitesh-hc-com');
// String hai: hitesh-hc-com

console.log(gameName);
// Index:
//  0 1 2 3 4 5 6 7 8 9 10 11 12
//  h i t e s h - h c -  c  o  m


const anotherString = gameName.slice(-8, 4);
// -8 ka matlab end se 8th position.
//
// String length = 13
// -8 ko normal index me convert karo:
//
// 13 - 8 = 5
//
// To actual operation ban gaya:
//
// gameName.slice(5, 4)
//
// slice(start, end) me start index end se chhota hona chahiye.
// Yaha 5 > 4 hai.
//
// Isliye koi character nahi milega.

console.log(anotherString);
// Output: ""
```

# Nums_&_Math
```javascript
const score = 400;
// Normal number value store ki hai.

// console.log(score);
// Output: 400


const balance = new Number(100);
// Number object create kiya hai.
// Usually direct number const balance = 100 bhi use karte hain.


// console.log(balance);
// Output: Number {100}


console.log(balance.toString().length);
// toString() number 100 ko "100" string me convert karta hai.
// length = 3
// Output: 3


console.log(balance.toFixed(1));
// Decimal ke baad kitne digits chahiye wo specify karte hain.
// 100 ko 1 decimal place ke saath "100.0" banayega.
// Output: 100.0


const otherNumber = 123.8966;
// Decimal number hai.

// console.log(otherNumber.toPrecision(4));
// Total 4 significant digits rakhta hai.
// Output: 123.9


const hundreds = 1000000;
// Normal number.

// console.log(hundreds.toLocaleString('en-IN'));
// Indian number format me commas lagata hai.
// Output: 10,00,000


// Maths

// console.log(Math);
// Math object ke saare mathematical methods dikhata hai.

// console.log(Math.abs(-4));
// Negative ko positive absolute value me convert karta hai.
// Output: 4

// console.log(Math.round(4.6));
// Nearest integer return karta hai.
// Output: 5

// console.log(Math.ceil(4.2));
// Hamesha next greater integer deta hai.
// Output: 5

// console.log(Math.floor(4.9));
// Hamesha lower integer deta hai.
// Output: 4

// console.log(Math.min(4, 3, 6, 8));
// Smallest value return karta hai.
// Output: 3

// console.log(Math.max(4, 3, 6, 8));
// Largest value return karta hai.
// Output: 8


console.log(Math.random());
// 0 inclusive se 1 exclusive ke beech random decimal deta hai.
// Example output: 0.6734


console.log((Math.random() * 10) + 1);
// Random value ko roughly 1 se 11 ke range me le jata hai.
// Example output: 7.432


console.log(Math.floor(Math.random() * 10) + 1);
// 1 se 10 ke beech random integer deta hai.
// Example output: 7


const min = 10;
// Minimum value.

const max = 20;
// Maximum value.

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// 10 se 20 ke beech random integer deta hai.
// Formula me +1 isliye hai taaki max value 20 bhi include ho.
//  output: 14
```

# Date_Basics
```javascript
// Dates

let myDate = new Date();
// Current date aur time ka Date object create karta hai.

// console.log(myDate.toString());
// Date ko readable string format me print karta hai.
// Example: Thu Aug 20 2026 21:30:00 GMT+0530

// console.log(myDate.toDateString());
// Sirf day, month, date aur year deta hai.
// Example: Thu Aug 20 2026

// console.log(myDate.toLocaleString());
// Local format me date aur time deta hai.
// Example: 20/08/2026, 9:30:00 pm

// console.log(typeof myDate);
// Date ka typeof object hota hai.
// Output: object


// Different ways to create a specific date

// let myCreatedDate = new Date(2023, 0, 23);
// Numeric constructor me month 0 se start hota hai.
// 0 = January, isliye date 23 January 2023.

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// Date ke saath time bhi set kar sakte hain.
// 23 January 2023, 5:03 AM.

// let myCreatedDate = new Date("2023-01-14");
// String format YYYY-MM-DD me date create karta hai.

let myCreatedDate = new Date("01-14-2023");
// MM-DD-YYYY format me 14 January 2023 create hoti hai.

// console.log(myCreatedDate.toLocaleString());
// Local format me created date print karega.


let myTimeStamp = Date.now();
// Current time ka timestamp milliseconds me return karta hai.

// console.log(myTimeStamp);
// Current time milliseconds me print karega.

// console.log(myCreatedDate.getTime());
// myCreatedDate ka timestamp milliseconds me return karega.

// console.log(Math.floor(Date.now() / 1000));
// Milliseconds ko 1000 se divide karke seconds me convert karta hai.


let newDate = new Date();
// Current date aur time store kiya.

console.log(newDate);
// Current Date object print hoga.

console.log(newDate.getMonth() + 1);
// getMonth() 0 se start hota hai, isliye +1 karke actual month lete hain.
// January = 0, February = 1, ... December = 11.

console.log(newDate.getDay());
// Week ka day number return karta hai.
// Sunday = 0, Monday = 1, ... Saturday = 6.


// `${newDate.getDay()} and the time `
// Template literal me date/time related values directly use kar sakte hain.


newDate.toLocaleString('default', {
    weekday: "long",
});
// Day ka full name return karega, jaise "Thursday".
// Note: result ko console.log() ya variable me store karna padega,
// warna yaha kuch print nahi hoga.

console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
    })
);
// Output current weekday ka full name hoga.
// Example: Thursday
```
