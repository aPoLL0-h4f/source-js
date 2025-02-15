console.log("----------i++ và ++i----------");
//1. sự khác nhau giữa i++ và ++i
let i = 1;
let j = i++;
console.log(i, j);
let a = 1 ;
let b = ++a;
console.log(a, b);

console.log("----------return fn----------");
//2. Lưu ý khi return function
function total(x ,y){
    return; // trả về undifined
}

console.log("----------chuyển đổi datatypes----------");
//3. 2 cách chuyển đổi dữ liệu mới
const str = "123";
// cách chuyển đổi sang number đã hc
console.log(parseInt(str));
console.log(Number(str));

//cách mới
/*1 */console.log(+str);

/*2 chuyển boolean*/
console.log(!!str); 
// if(!!str){} 2 dấu !! sẽ convert str sang boolean
if(str){
    console.log("hello");
}

console.log("----------arguments trong function----------");
// nó là 1 object giống mảng nhưng ko phải là mảng, có thể truy xuất bằng index và có thể sử dụng .length, có thể covert sang mảng bằng [...] or Array.from()

// thường dùng để kiểm tra đối số được truyền trong function
function number (a , b, c){
    console.log(arguments); // arguments ở đây chính là a b c
    if(!arguments.length){
        console.log("please insert your argument");
    }
    return a+b+c;
}  
// number(); nếu khúc này ko truyền đối số vào function thì bên trong điều kiện if được chạy
number(1, 2, 3);

console.log("----------Phỏng vấn về closure----------");

// closure in loop
// for (var z = 1; z < 5; z++) {
//     setTimeout(function(){
//         console.log(z)
//     },1000);
// }

// var bị hoisting 
// scope của var sau mỗi vòng lặp thì nó ko thay đổi

// để sử lý lý việc này thì sử dụng let
// let -> not hoisting
// let -> scope nó sẽ thay đổi

console.log("----------different localStorage và sessionStorage----------");
// localStorage là lưu trữ ở trên web , khi chúng ta reload lại thì nó vẫn còn
//sessionStorage về cơ bản thì như localStorage, nó chỉ khác là khi đóng tab hay tắt trình duyệt đi thì sẽ mất

console.log("----------use arrow function----------");

// những trường hợp không nên dùng arrow function
// 1. Envent handlers
// 2. Object

// 1/
const input = document.querySelector(".input");
input.addEventListener("keyup", function(){
    console.log(this.value);
})

// const input = document.querySelector(".input");
// input.addEventListener("keyup", () => {
//     console.log(this.value); nó sẽ ko hiểu this là gì
// })

// 2/
const student = {
    counter: 0,
    increment() {
        return ++this.counter;
    }
}

// const student = {
//     counter: 0,
//     increment: () => {
//         return ++this.counter; sẽ ra là NaN vì nó ko hiểu this
//     }
// }
console.log(student.increment());

console.log("----------Đệ quy(recursive)----------");

// function countDown(n){
//     if(n === 0){
//         return;
//     }
//     console.log(n);
//     countDown(n-1);
// }
// countDown(10);


//BT1
const complexArr= [[1,2,3], [3,4,5],16,18, [[2,3],[2,3,5, [999]], [1,2]]];
// [1,2,3,3,4,5,2,3,2,3,5,1,2] -> dùng đệ quy
function flatArray(arr, deep){
    const result = deep > 0 ? arr.reduce((a, val) => a.concat(Array.isArray(val) ? flatArray(val, deep - 1) : val), []) : arr.slice();
    return result;
} 
console.log(flatArray(complexArr, Infinity));

console.log("----------object Set----------");
// set lưu trữ những cái giá trị duy nhất
const mySet = new Set();
// thêm pt vào set
mySet.add(1);
// mySet.add(1); nếu add thêm 1 cái số 1 nữa thì sẽ ko được vì set chỉ chứa 1 cái giá trị duy nhất thôi, vì nó loại bỏ những giá trị trùng nhau
mySet.add("evondev");
console.log(mySet);

// kiểm tra cái pt đó có ở trong cái set ko
console.log(mySet.has(1));

// xóa 1 pt
mySet.delete("evondev");
console.log(mySet);

// ktr số lượng pt
console.log(mySet.size);


//VD
const arr = [1,2,3,4,1,1,1,4,4,4,5,5,5,7,9];
// -> 1,2,3,4,5,7,9

// array to set
const mySet2 = new Set(arr);
console.log(mySet2)// những ở đây là object set chúng ta cần trả về array 


// dùng for trong set
for (const item of mySet2) {
    console.log(item);
}


// set to array
const newArr = Array.from(mySet2) //Cách 1
// const newArr = [...mSet2] Cách 2

// nếu phỏng vấn ko cho dùng set thì làm cách này
let result=[];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(!result.includes(element)){ // nghĩa là nó có chứa những pt này trong nó hay chưa
        result.push(element);
    }
}

console.log(result);


console.log("----------Location trong BOM----------");
// BOM là Browser Object Model: alert, prompt, confirm, window

// 1. Location -> trả về đường dẫn của trang web
console.log(location);
console.log(window.location);

// 2. lấy params
// muốn lấy params trong cái search của location
// VD thay đường dẫn bằng cái này http://127.0.0.1:5501/kienthuccanbiet/other.html?type=demo&page=2#title
// type=demo  có type là key còn demo là value

let params = new URLSearchParams(location.search);
console.log(params);
console.log(params.get("type"));
console.log(params.get("page"));

// 3. kiểm tra có cái key đó hay ko
console.log(params.has("page"));

// 4. set lại cái value khác
console.log(params.set("page",10));

//5. muốn lấy ra những cái keys
console.log(params.keys());
for (const it of params.keys()) {
    console.log(it);
}

//6.muốn lấy ra những cái values
//tương tự như keys


//7.xóa params
params.delete("page");



// 8. href -> thay thế đường dẫn mới cho trang web ví dụ điều hướng tới 1 web khác
// setTimeout(() => {
//     location.href = "https://evon.dev";
// },2000)


// 9. History trong BOM
console.log(window.history);
// history.back();     // quay lại trang trước đó | nếu có
// history.forward(); // tới trang kế tiếp | nếu có
// history.go() // quay lại trang trc đó nếu ở trong cái go(-1) thì nó sẽ quay lại 1 trang , -2, -3,-4..... thì nó sẽ quay lại chừng đó trang


// 10. navigator
// nghĩa là nó check chúng ta truy cập vào web đó bằng thiết bị gì hay trình duyệt gì
console.log(window.navigator.userAgent);

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
    } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
    )
    ) {
    return "mobile";
    }
    return "desktop";
};
console.log(deviceType()); // kiểm tra thiết bị là gì

  