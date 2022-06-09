"use strict";

a = 5;
console.log(a);

/*alert()[0.3].push();
var leftBorderwidth = 1;
let second = 2;
const pi = 3.14;

console.log(second);
*/
var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4 / 0); // infinity
console.log("string" * 8); //NaN
let something; //undefined
console.log(something); //null

let person = {
  name: "Mark",
  age: 25,
  isMarried: false,
};
console.log(person["name"]);

let arr = ["apple.png", "orange.bmp", "banana.jpg"];
console.log(arr[0]);

//alert("hello world!");
// let answer = confirm("are you here");
// console.log(answer);
// let answer = +prompt("are you 18?", "yes");

// console.log(typeof answer);

// console.log("arr" + "- object");

// console.log(4 + "- object");
let incr = 10,
  decr = 10;

incr++;
decr--;

console.log(incr++);
console.log(decr--);
console.log(5 % 3);

console.log("2" == 2);

let isChecked = true,
  isClose = false;

console.log(isChecked && isClose); //true когда оба аргумента true
console.log(isChecked || !isClose); //true когда один из аргуметов true
