// Declaration, new , this, method, caution

// ví dụ tạo object student
let student = {
  name: "phan dat",
  age: 28,
};
// giả sử tạo thêm nhiều hc sinh thì phải tạo thêm nhiều object nữa nên ta sẽ sử dụng constructor function
// constructor function Person -> chữ cái đầu của tên phải viết hoa
function Student(name, age) {
  // this = {} // khúc này nghĩa là tạo ra object student{}
  // add properties to this
  this.name = name;
  this.age = age;
  // return this

  this.getName = function () {
    //method
    return `your name is ${this.name}`;
  };
}
let student2 = new Student("Dat", 20); // => dùng từ khóa new thì nó sẽ tạo ra this = {}
console.log(student2);
// ở cái method khi mỗi lần chúng ta tạo 1 new object thì nó sẽ chạy 1 lần, cho nên cần phải viết ở ngoài bằng prototype

console.log("--------prototype-----------");
// String, Number, Boolean cũng là 1 object
//prototype của mỗi object chính là cha của nó
//vd cha của String là String.prototype
let str = "abc";
str.toLowerCase(); // -> ở đây vì string kế thừa từ cha của nó là String.prototype nên nó sẽ đc kế thừa những method từ cha của nó

// nếu prototype chưa có thì ta có thể tạo ra
String.prototype.duplicate = function () {
  return this + this;
};
console.log(str.duplicate());

//VD bằng function
function Girl() {
  this.love = function () {
    console.log("I love my girlfriend");
  };
}

Girl.prototype.sing = function () {
  console.log("my girlfriend sing well");
};

let dat = new Girl();
dat.love();
// vì biến dat có thể thừa hưởng prototype cha
dat.sing();

// muốn object nào dùng cũng được thì sử dụng Object (global)
Object.prototype.makeSandwich = function () {
  console.log("make sandWich");
};
