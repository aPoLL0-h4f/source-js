console.log("--------Bind -----------");
// là 1 hàm nằm trong function prototype
// xác định tham số this của 1 function
const std = {
  firstName: "Phan",
  lastName: "Thanh Dat",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const button = document.querySelector(".button");
// button.addEventListener("click", std.fullName); -> nó sẽ ra undefined undefined vì lúc này cái this.firstName or this.lastName cái this nó sẽ hiểu đó là cái button chớ ko phải object std nên ta sẽ dùng bind để bind giá trị this và các tham số truyền vào cho function
button.addEventListener("click", std.fullName.bind(std));

// LƯU Ý vd khi chúng ta dùng document.querySelector() hay document.querySelectorAll() thì nó sẽ dài
// chúng ta muốn viết rút gọn lại
const selector = document.querySelector.bind(document);
const selectors = document.querySelectorAll.bind(document);
console.log(selector(".button"));
// console.log(selectors(".button")); dùng khi nhiều phần tử

console.log("--------Bind partial-----------");
// partial function : là tạo ra 1 function mới từ function cũ bằng cách gán mặc định 1 số tham số cho function cũ đó

function log(level, time, message) {
  console.log(`${level} ${time} ${message}`);
}

// đây là cách viết simple
// function logErrorToday(message){
//     log("Error", "today", message);
// }
// logErrorToday("Sever ok!");

// ta có thể dùng bind
const logErrToday = log.bind(null, "Error", "today"); //vì  ko dùng this nên ta sẽ truyền vào null
logErrToday("Sever ok!"); // cái này nó sẽ tự hiểu là message

console.log("--------call & apply-----------");
// nó khá là giống nhau và nó cũng sử dụng trong function, nó khác với bind là nó gọi hàm trực tiếp(tức là khi chúng ta gọi nó sẽ chạy luôn) còn bind là nó sẽ trả về 1 hàm mới

// 1. call -> function.call(this, arg1, arg2, ...)
const person = {
  firstName: "Phan Dat",
  lastName: "Frontend developer",
};

function sayHello(str1, str2) {
  console.log(`${str1} ${str2} ${this.firstName} ${this.lastName}`);
}
sayHello.call(person, "hello", "good morning");

// 2. apply-> function.call(this,[arg1, arg2, ...]) chỗ arg truyền dưới dạng array
sayHello.apply(person, ["hi", "good evening"]);

//VD
const arr = [1, 2, 3];
const arr2 = [2, 3, 4];
arr.push.apply(arr, arr2);
console.log(arr);
