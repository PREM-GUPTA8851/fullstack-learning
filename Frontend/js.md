# About JS
// ============================================================
// 1. CONST
// ============================================================

const accountId = 144553;
// const se variable declare kiya.
// Is variable ko baad me reassign nahi kar sakte.

// accountId = 200;
// Error aayega.
// Kyunki const variable ko reassign nahi kar sakte.

// const accountId = 200;
// Error aayega.
// Same scope me const variable ko dobara declare nahi kar sakte.


// ============================================================
// IMPORTANT: const object/array ke andar ki value change ho sakti hai
// ============================================================

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


// ============================================================
// 2. LET
// ============================================================

let accountEmail = "hitesh@google.com";
// let se variable declare kiya.
// Iski value future me change kar sakte hain.

accountEmail = "prem@gmail.com";
// Purani value replace hokar new value aa gayi.

// let accountEmail = "another@gmail.com";
// Error aayega.
// Same scope me let ko dobara declare nahi kar sakte.


// ============================================================
// LET KE SAATH REASSIGNMENT
// ============================================================

let age = 21;
// age ki initial value 21 hai.

age = 22;
// Existing age variable ki value 21 se 22 ho gayi.

age = 23;
// Value ko kitni bhi baar reassign kar sakte hain.


// ============================================================
// 3. VAR
// ============================================================

var accountPassword = "12345";
// var se variable declare kiya.

accountPassword = "99999";
// var ki value reassign kar sakte hain.

var accountPassword = "newPassword";
// var ko same scope me dobara declare bhi kar sakte hain.
// Isi wajah se kabhi-kabhi bugs create ho sakte hain.


// ============================================================
// REASSIGNMENT vs REDECLARATION
// ============================================================

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


// ============================================================
// BLOCK SCOPE KA DIFFERENCE
// ============================================================

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


// ============================================================
// EK AUR IMPORTANT EXAMPLE
// ============================================================

let score = 100;
// let variable declare kiya.

score = 200;
// score ki value change kar sakte hain.

const maxScore = 500;
// const variable declare kiya.

// maxScore = 600;
// Error aayega.
// const variable ko reassign nahi kar sakte.


// ============================================================
// ARRAY KE SAATH CONST
// ============================================================

const numbers = [1, 2, 3];
// numbers array ka reference constant hai.

numbers.push(4);
// Array ke andar new value add kar sakte hain.

numbers[0] = 100;
// Existing array element ki value bhi change kar sakte hain.

// numbers = [10, 20, 30];
// Error aayega.
// Pura array kisi naye array se replace nahi kar sakte.


// ============================================================
// FINAL SUMMARY
// ============================================================

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
