// function add = (a,b)=>{
//     return a+b;
// }

// let age = 16;
// let country = "USA";
// let text = "You can Not drive!";
// if (country == "USA") {
//   if (age >= 16) {
//     text = "You can drive!";
//     console.log("Hello World");
//     console.log(text);
//   }
// }
// const students = [
//   {name: "Mayank",age: 20,marks: 85},
//   {name: "Rahul",age: 21,marks: 72},
//   {name: "Aman",age: 20,marks: 90}
// ];
// console.log(students[0]);
// console.log(students[0].name);

// const user = {
//     id:7,
//     profile:{
//         fullName: "John Doe",
//         city: "New York",
//     }
// };

// const {id}=user;
// console.log(id);
// const {profile}=user;
// console.log(profile);
// console.log(user.profile.fullName);
// console.log(user.profile.city);

// // swap elements using destrcuturing
// let a = 10;
// let b = 20;
// [a,b] = [b,a];
// console.log(a, b);




// function printAll(...args){
//   console.log(args);
// } 
// printAll(1,2,3,4,5);

// sum of all numbers using rest operator
// rest operator 
function sumAll(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  } 
  return sum;
}
console.log(sumAll(1, 2, 3, 4, 5));


const order = {
  orderId: "ORD-12345",
  customer: {name: "John Doe", phone: "123-456-7890"},
  items: ["laptop", "mouse", "keyboard"],
  totalAmount: 1500,
};

// destruct orderId, customer's name, and first item in one statement
const { orderId, customer: { name }, items: [firstItem] } = order;
console.log(orderId);
console.log(name);
console.log(firstItem);

const newUser = {...userDetails} // example of shallow copy using spread operator
console.log(userDetails === newUser); // false bcz they are different objects in memory
console.log(userDetails.address === newUser.address); // true bcz they are same object in memory