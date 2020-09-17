"use strict";

var num = 5;
var some = "some 123";
console.log("Variable: " + (num + 5) + ", second var: " + some);

var arr_1 = [5, 6, 2];
var arr_2 = [5, 9].concat(arr_1);

function some() {
  console.log("Hello World!");
}

// const mult = (a, b) => {
//   let res = a ** b
//   return res
//
// }
var mult = function mult(a, b) {
  return Math.pow(a, b);
};
console.log(mult());