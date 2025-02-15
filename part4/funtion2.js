// Khai báo function
// cú pháp(Syntax): function funtionName(...){
//      Your code here
// }
function printF(a, b) {
  console.log(a, b);
}
printF(5, 6);
// chú ý ko có return trong function thì hàm sẽ trả về undefinded

//VD: viết hàm tính tổng 2 số a và b
function sum(a, b) {
  return a + b;
}
console.log(sum(18, 16));

// I/ Lưu function vào 1 biến rồi sau này cần có thể gọi nó ra
// function delaration : function có tên khai báo Vd add,sum,..
//  ở trên hàm add có (a = 0 và b = 0) là default value nếu chỉ chuyền như này add(5) thì b mặc định là 0 ...
function add(a = 0, b = 0) {
  return a + b;
}
const sum2 = add; //gán function add cho biến sum2;
console.log(sum2(300, 400)); // gọi biến sum2() vì cái add đã đc gán cho sum2

// II/ Tham số là function
// fn : function
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
const result = average(200, 300, sum2);
console.log(result);

// III/ Anonymous function(function expression) : function ko có tên (vô danh)
// không bị hosting cho nên cần phải khai báo trước khi gọi
const logName = function () {
  console.log("your Name");
};
logName();

// IIFE -> immediately invoked function execution (function sẽ chạy ngay lập tức , viết xong là chạy ra console luôn)
(function () {
  console.log("this is IIFE function");
})();

//SCOPE
// Global scope , function scope
let myName = "phan dat"; // global scope
function logYourName() {
  let myName2 = myName; // function scope
}

// Block scope
// block scope là từ dấu { đến dấu } được gọi là block scope
if (2 > 1) {
  //block scope
  let message = "Hello Bin";

  //CHÚ Ý đối với var
  var message2 = " Hi Bin";
}
console.log(message2); // vẫn chạy vì var là global scope và var bị hoisted

//Lexical scope
// là định nghĩa cái scope của cái biến đó bởi cái vị trí của nó trong cái sour code của chúng ta
let aNewName = "Phan Dat";
function sayHello() {
  let message5 = "Hi";
  console.log(`${message5} ${aNewName}`);
}

// CLOSURE
// là 1 nhìu function được lồng vào nhau , cho phép chúng ta truy xuất từ function bên trong ra function bên ngoài
// closure được tạo mỗi khi function được tạo 
// function bên trong có thể truy xuất tới scope của function bên ngoài
function sayHello2(){     // parent function
  let message6 = "---hello---";
  function sayHi(){       // inner function có quyền truy xuất tới scope tới function bên ngoài
    console .log(message6);
  }
  return sayHi;
}
let hello = sayHello2();
hello();
 

function  testHi(message){
  return function hiYourName(name){
    console.log(`${message} ${name}`);
  }
}
let dat= testHi("wellcome to javascript");
dat("Closure");

console.log("--------------------------------------------")
// ARROW FUNCTION : anonnymous function và ko bị hoisted
// được cải tiến bởi ECMAscript
// Nomal function :anonnymous function
const square = function (x) {
  return x * x;
};
console.log(square(5)); // 25

//Arrow Function
const square2 = () => {
  return x * x;
};

// nếu muốn viết arrow function mà ở trong function có nhiều điều kiện hoặc dòng thì làm theo cách này
/* 
1/ truyền tham số
const square2 = (x) => {
  return x * x;
};
2/ ko truyền tham số
const square2 = () => {
  return 200;
};
*/
// Nếu muốn viết arrow function mà ở trong function có 1 dòng mà return đơn giản
/*
 1/ truyền có tham số
 const square = (x) => x*x;  
 (ở chỗ => x*x) có nghĩa là return về x * x
 2/ ko truyền tham số
 const square = () => 200; 
 */


