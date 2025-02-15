//có 2 cách khai báo object
// object literal
const objectLiteral = {}; // empty object
//object constructor
const objectConstructor = new Object();
const student = {
  //Key    Value
  name: "Phan Dat",
  age: 20,
  male: true,
  wife: "kha",
  // last-name: "Dat", // key đặc biệt nên ko thể để như vậy đc
  "last-name": "Dat", // nên để như này , vì vậy để dùng key này ta gọi bằng Cách 2 bên dưới
  hi: function () {
    // này gọi là method
    console.log("Hello Phan Dat");
  },
};
// key còn có thể gọi là properties

// có 2 cách truy xuất giá trị object
// C1 Dot notation -> object.key
console.log(student.name);
// C2 Bracket notation -> ["key"]
console.log(student["age"]);
console.log(student["last-name"]); // trường hợp key đặc biệt chỉ sử dụng đc cách này

console.log("------------Replace------------");
// Thay đổi giá trị của object
student.age = 18;
student.male = "male";
console.log(student);

console.log("------------Add------------");
//Thêm key vào object
student.isDeveloper = true;
// muốn thêm key có dấu - thì dùng cách này
student["is-Developer"] = false;
console.log(student);
// muốn thêm function vào object
student.hello = function () {
  console.log("hello");
};

console.log("------------Delete------------");
// xóa key trong object
delete student["last-name"];
delete student.wife;

console.log("------------For in------------");
// for in sử dụng trong object
for (let key in student) {
  // console.log(key); // in ra key
  // console.log(student[key]); // in ra giá trị của key
  // viết gộp
  console.log(`${key} : ${student[key]}`);
}

console.log("------------Object.keys------------");
// trả về 1 mảng chứa tất cả các key của object
//Object.keys(object)
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);

console.log("------------Object.values------------");
// trả về 1 mảng chứa tất cả các giá trị của object
//Object.values(object)
const values = Object.values(student);
console.log(values);

console.log("------------Object.entries------------");
// trả về 1 mảng nested (nested tức là mảng có thêm mảng lồng nhau [1, [2,3],[6,7]]) là 1 cặp key và value
// Object.entries(object)
const entries = Object.entries(student);
console.log(entries);

console.log("------------Object.assign------------");
// gộp 2 object lại
const a = {
  fistName: "Dat",
};
const b = {
  lastName: "Phan",
};
const c = Object.assign(a, b);
console.log(c);
// Cách 2
const d = { ...a, ...b };
console.log(d);

console.log("------------sao chép một objects------------");
const dog = {
  userDog: "Do",
};
// const newDog = dog; // ko đc sao chép kiểu này
// newDog.userDog="CaoThuyDo";
// console.log(dog);
// console.log(newDog); // làm theo cách này sẽ bị ảnh hưởng đến object ban đầu

// nên làm theo cách {...object}
const newDog = { ...dog }; // chỉ coppy đc 1 cấp
newDog.userDog = "CaoThuyDo";
console.log(dog);
console.log(newDog); // cách này sẽ ko bị ảnh hưởng đến object ban đầu

console.log("------------Object.assign có thể sao chép------------");
// Object.assign({}, object)
const newOb = Object.assign({}, b); // copy đc 1 cấp
newOb.hello = "haha";
console.log(newOb);
// vì cách này chỉ coppy đc 1 cấp nên khi đổi từ cấp 2 trở đi sẽ bị ảnh hưởng đến mảng gốc

console.log("------------sao chép Object phức tạp------------");
const user = {
  userName: "PhanDat",
  school: {
    name: "DTU",
    room: {
      name: "IT",
    },
  },
};

// như này sẽ bị lỗi vì những cái này chỉ coppy đc 1 cấp vô cấp thứ 2 trở đi sẽ bị lỗi
// const newUser = {...user};
// newUser.userName = "Dat09";
// console.log(newUser); // biến này cũng đổi thành VN vì vô cấp thứ 2 sẽ bị lỗi

// const newUser2 = Object.assign({}, user);
// newUser.school.name = "VN"; // khúc này đổi thành VN
// console.log(newUser2);

// để mà sao chép 1 Object có nhiều Object lồng nhau bên trong thì dùng
//=> dùng JSON
console.log("JSON*********");
const newUsser3 = JSON.parse(JSON.stringify(user));
newUsser3.school.name = "Design";
console.log(newUsser3);
console.log(newUsser);
console.log(user);

console.log("------------Object.freeze------------");
// Object.freeze(object)
// ngăn chặn chỉnh sửa key và value của object
const car = {
  brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi"; // => ko thể đổi đc vì đã freeze rồi
console.log(newCar);

console.log("------------Object.seal------------");
// Object.seal(object)
// cho phép chỉnh sửa key value nhưng ko đc thêm key value mới
const user2 = {
  userName: "PhanDat",
};
const news = Object.seal(user2);
news.userName = "Phan Thanh Dat";
news.lasName = "Kha";
console.log(news);

console.log("------------this------------");
// this sẽ đề cập tới object gần nhất
const student2 = {
  name: "Phan Dat",
  age: 20,
  male: true,
  "last-name": "Dat",
  hi: function () {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
    // console.log(this); // this sẽ đề cập tới object gần nhất
  },
  // fullName: {
  //     name:"Vo Thuy Kha",
  // }
  // fullName: {
  //     name:"Vo Thuy Kha",
  // }
};
student2.hi();

console.log("------------Optional chaining------------");
// giả sử cái fullName ko có trong student nhưng mà ta vẫn chọn thì
// console.log(student2.fullName) // sẽ in ra undefined
// console.log(student2.fullName.name) // sẽ bị báo lỗi nên trong 1 số trường hợp báo lỗi thì chương trình sẽ dừng và k thể chạy tiếp những đoạn code bên dưới

// => nên sẽ phải check điều kiện
if (student2.fullName) {
  // khúc này nghĩa là nếu trong student2 có cái key tên là fullName thì thực hiện trong if
  if (student2.fullName.name) {
    console.log(student2.fullName.name);
  }
}

//tối ưu if trên bằng Optional chaining
// student2.fullname?.name?.abc.... // dấu ? nghĩa là kiểm tra có hay ko
console.log(student2.fullName?.name); // nghĩa là nếu mà có fullname thì console.log(student2.fullname.name) in ra name của object fullname ngược lại nếu ko có thì undefined => dễ kiểm tra lỗi hơn

console.log("------------Destructuring object------------");
//Destructuring object
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
// gán như cách trên thì lâu và dài dòng
// => thực hiện cách này
// biến let hay const đều đc
// const {name,age,male} = student2;// cách này tương ứng với cách viết trên
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
// console.log(name, age,male);

// muốn lấy hết những cái còn lại thì
const { name, age, male, ...rest } = student2;
console.log(rest); //=> sẽ in ra những cái còn lại trong object

console.log("------------function object------------");
//NORMAL FUNCTION
// function yourInfo(name,age,school){
//     console.log(name, age, school);
// }

// OBJECT FUNCTION
function yourInfo(obj) {
  console.log(obj.name, obj.age, obj.wife);
}
const newObj = {
  name: "Phan Dat",
  age: "20",
  wife: "Thuy Kha",
};
yourInfo(newObj);

// OBJECT FUNCTION Destructuring
function yourInfo2({ name, age, wife }) {
  // khúc này có nghĩa là tương tự như này const {name,age,male} = student2;
  console.log(name, age, wife);
}

yourInfo2({
  name: "Phan Dat",
  age: 20,
  wife: "Thuy kha",
});

console.log("------------hasOwnProperty------------");
// obj.hasOwnProperty(key)  => để kiểm tra cái object đó có chứa cái key này hay ko
const newO = {
  name: "Dat",
  age: 20,
  wife: "Kha",
};
function objectToArray3(obj) {
  // isObject(object) // kiểm tra có tồn tại object ko
  if (!isObject(obj)) {
    console.log("Enter valid object");
    return;
  }
  let result = [];
  for (let item in obj) {
    // tức là nếu obj có chứa item(tức là key) trong cái Object obj thì thực hiện trong if
    if (obj.hasOwnProperty(item)) {
      result.push([item, obj[item]]);
    }
  }
  return result;
}
console.log(objectToArray3(newO));
