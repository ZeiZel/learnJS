"use strict";

//* 1
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return this.a + this.b;
//     }
//     console.log(sum());
// }
//
// showThis(5, 6); // 2*undefined

//*2
// const obj = {
//     a: 2,
//     b: 14,
//     c: 17,
//     sum: function () {
//         function foo() {
//             console.log(this);
//         }
//         foo(); // undefined
//     }
// }
// obj.sum();

//*3
// function sayName(surname, age) {
//     console.log(this);
//     console.log(this.name + " " + surname + " "+ age);
// }
//
// const user = {
//     name: "Alex"
// }
//
// sayName.call(user, "Winder", 33);
// sayName.apply(user, ["Smith", 21]);

// function count(num) {
//     return this * num;
// }
//
// const double = count.bind(2);
// const triple = count.bind(3);
//
// console.log(double(4));
// console.log(triple(4));





























