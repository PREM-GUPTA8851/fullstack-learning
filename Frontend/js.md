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
Haan bhai, ab **JavaScript Data Types** ko bhi tere same style me samajhte hain. Main tera code clean karke, har line ke niche comment me explanation de raha hu. GitHub `.md` file me bhi direct use kar sakta hai.

````markdown id="dy1kzv"
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
````

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
