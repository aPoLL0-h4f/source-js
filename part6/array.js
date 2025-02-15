//2 cách tạo mảng
const student = []; // tạo mảng mảng này tên là array literal
const student2 = new Array(); // mảng này tên là array constructor
//VD 1 mảng CHÚ ÝYYYYYYYYYYYYYY
// Mảng phức tạp [0, false, undefined, null , "Phan Dat", ["hello", 1618, [....]] ] 1 mảng có thể chưa nhiều giá trị  boolean, string, bumber, mảng con,null,.....
//Mảng đơn giản[0, false, null,....]
//[] empty array -> mảng rỗng
const sutdents1 = ["Phan Dat", "Thuy Kha", "Thuy Do"];
console.log(sutdents1[sutdents1.length - 1]);
console.log(sutdents1[5]); // Nếu ko có vị trí index thì trả về undefined

// method hay dùng của mảng nên biết
console.log("----------------length----------------");
// --------length -> trả về độ dài của mảng
console.log(sutdents1.length);

console.log("----------------reverse----------------");
// --------reverse -> Đảo ngược giá trị trong mảng
console.log(sutdents1.reverse()); // khi mảng này đảo xong thì nếu có tính toán hay bất cứ gì thì sẽ áp dụng mảng này

console.log("----------------join----------------");
//--------join -> nối các phần tử trong mảng thành chuỗi
console.log(sutdents1.join()); // Thuy Do,Thuy Kha,Phan Dat
console.log(sutdents1.join("")); // Thuy DoThuy KhaPhan Dat
console.log(sutdents1.join("-")); // Thuy Do-Thuy Kha-Phan Dat

console.log("----------------includes----------------");
// --------includes -> dùng để kiểm tra phần tử có nằm trong mảng hay ko
console.log(sutdents1.includes("Phan Dat")); // true
console.log(sutdents1.includes("hello")); // false

console.log("----------------indexOf----------------");
// --------indexOf -> trả về vị trí của phần tử mà tìm thấy đầu tiên
const nb = [2, 16, 1, 6, 1];
console.log(nb.indexOf(1)); //index của số 1 đầu tiên là tại vị trí 2

console.log("----------------lastIndexOf----------------");
// --------lastIndexOf -> trả về vị trí của phần tử mà tìm thấy cuối cùng
console.log(nb.lastIndexOf(1)); // index của số 1 cuối cùng là tại vị trí 4

console.log("----------------push----------------");
// --------push -> thêm phần tử vào cuối mảng
console.log(nb.push(18));
console.log(nb);

console.log("----------------unshift----------------");
// --------unshift -> thêm phần tử vào đầu mảng
console.log(nb.unshift(14));
console.log(nb);

console.log("----------------pop----------------");
// --------pop -> xóa phần tử cuối cùng trong mảng
nb.pop();
console.log(nb);

console.log("----------------shift----------------");
// --------shift -> xóa phần tử đầu tiên trong mảng
nb.shift();
console.log(nb);

console.log("----------------slice----------------");
// --------slice -> tạo ra 1 mảng copy của mảng ban đầu
const animals = ["tiger", "lion", "horse", "elephant"];
const animals2 = animals.slice();
console.log(animals2);
const animals3 = animals.slice(2); //tức là coppy từ index 2 đến hết
const animals4 = animals.slice(1, 3); //tức là coppy từ index 1 đến index 3-1
console.log(animals4);
const animals5 = animals.slice(-2); //lấy 2 index cuối của array
console.log(animals5);

console.log("----------------splice----------------");
// --------splice-> sẽ xóa phần tử trong mảng và thay thế phần tử trong mảng **khi dùng thì sẽ bị cảnh hưởng đến mảng gốc
const pets = ["dog", "cat", "bird", "dragon"];
// const pets2 = pets.splice(0);
// console.log(pets2);
// splice(start, deleteCount): deleteCount là số lượng phần tử muốn xóa hoặc thay thế
const pets3 = pets.splice(0, 1);
console.log(pets3);
console.log(pets);
// splice(start, deleteCount, item1, item2, ....): deleteCount là số lượng phần tử muốn xóa , item là thay thế phần tử
const petsN = ["rabit", "pig", "bird", "monkey"];
const petsN1 = petsN.splice(0, 2, "dragonball", "flower");
console.log(petsN); // ["dragonball", "flower", "bird", "monkey"];

console.log("----------------sort----------------");
// --------sort sắp xếp các phần tử trong mảng theo chuẩn Unicode-16(chỉ so sánh số đầu tiên)
const random = [2, 9999, 1000000, 16, 18];
console.log(random.sort()); // [1000, 16, 18, 2, 999] sẽ convert từng giá trị sang chuỗi và sắp xếp theo chuẩn Unicode-16 vì vậy ra kết quả ko như mong muốn
//cách khác
//sort(funtion(a,b))
//function(callback) 
//C1
let check = random.sort(function(a,b){
  return a - b; // value < 0 thì a sẽ đứng trước b // sắp xếp tăng dần
  // return b - a // value > 0 thì a sẽ đứng sau b // sắp xếp giảm dần
  // return 0 // mảng sẽ giữ nguyên
  
});
console.log(check);
//C2:
let check2 = random.sort((a,b) => a-b); // tăng dần
//let check2 = random.sort((a,b) => b-a);  // giảm dần

// C3
let check3 = random.sort((a,b) => (a > b ? 1 : -1));
// value > 0 -> sort tăng dần
// value < 0 -> sort giảm dần
// value = 0 -> giữ nguyên

console.log(check2);

console.log("----------------find----------------");
// ----------------find nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const numbers = [1, 99999, 10000000, 5, 9];
//tìm phần tử đầu tiền trong mảng lớn hơn 10
const findYourNumber = numbers.find((element) => element > 10); // element là kiểm tra từng phần tử trong mảng
// nếu mà ko thỏa điều kiện nó sẽ trả ra undefind
console.log(findYourNumber);

console.log("----------------findIndex----------------");
// ----------------findIndex nó sẽ trả về vị trí tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const findYourIndex = numbers.findIndex((index) => index > 10);
console.log(findYourIndex);

console.log("----------------map----------------");
// ----------------map duyệt qua từng phần tử trong mảng và trả ra 1 mảng mới mà ko thay đổi mảng ban đầu
//.map(callback(...,....,...))
const listNumber = [1, 2, 3, 4, 5];
// trả ra 1 mảng mới từ các (giá trị) trong mảng cũ và các (giá trị) đó phải nhân 2
const listNumberDouble = listNumber.map(function (value, index, array) {
  return value * 2;
});
console.log(listNumberDouble);

console.log("----------------forEach----------------");
//.forEach(callback(...,....,...))
const listNumberTripper = listNumber.forEach((value,index,array) => {
  return value * 3;
});
console.log(listNumberTripper); // undefined vì forEach ko return đc
// hãy cho bk sự khác nhau giữa forEach và map là forEach ko có return đc còn map thì return đc, map sẽ trả ra 1 mảng mới dựa vào mảng ban đầu còn forEach thì ko, forEach ko có return thì nó sẽ chạy mãi
// forEach ko dừng đc

console.log("----------------filter----------------");
// dùng để lọc các phần tử trong mảng thỏa điều kiện nào đó
//.filter(callback(tên tự đặt,...))
// const listNumber = [1, 2, 3, 4, 5];
const greatherThanThree = listNumber.filter((value) => value > 3);
console.log(greatherThanThree);

console.log("----------------some----------------");
// trả về true khi thỏa chỉ cần 1 điều kiện và ngược lại trả về false khi ko thỏa điều kiện nào cả
const numberInt = [2, 6, 14, 16, 18];
const someNumber = numberInt.some((value) => value > 4);
console.log(someNumber);

console.log("----------------every----------------");
// chỉ trả về true khi tất cả điều kiện đều đúng, ngược lại chỉ cần 1 cái sai thì nó sẽ trả về false
const everyNumber = numberInt.every((value) => value > 4);
console.log(everyNumber);

console.log("----------------reduce----------------");
//gom các phần tử trong mảng lại thành 1
//.reduce(callback(a,b) => {}, initialize value),  initialize value là giá trị khởi tạo ban đầu
const totalNumber = numberInt.reduce(function (a, b) {
  //vd
  console.log(a, b);
  //end vd
  return a + b;
}, 0);
// 0 ở đây có nghĩa là VD tính tổng [1,2,3,4] thì khai báo sum = 0, vậy số 0 ở trên cx tương tự như khai báo sum =0
console.log(totalNumber);

console.log("----------------flat----------------"); // flatten array
// là phương thức dùng để bỏ những mảng con bên trong mảng cha vd [[1,2,3,[false,null]],[1,5,6,["javascript"]], [888,666,[90]]] 
//có nhiều mảng lồng mảng thì ta sẽ sử dụng flat(number) number ở đây là cấp bật Vd có 2 mảng lồng nhau thì truyền vào 2 flat(2) 
// flat(Infinity) -> mảng đố lồng bao nhiêu cấp bật thì nó sẽ loại bỏ và gộp lại được hết 
//thì mảng trên sẽ thành [1,2,3,false,null,1,5,6,"javascript"]

// cú pháp dùng flat(number)


console.log("----------------split----------------");
// dùng để tách chuỗi

console.log("----------------Array.isArray()----------------")
let aray=[1223,23,42,23];
if(Array.isArray(aray)){  // có nghĩa là nếu đây là mảng thì in ra this is array còn ngược lại thì ko in gì hết
  console.log("this is arrray");
}

console.log("----------------concat----------------");
// sử dụng để kết hợp hai hoặc nhiều mảng thành một mảng mới Phương thức này không thay đổi mảng gốc mà trả về một mảng mới chứa tất cả các phần tử của các mảng đã được kết hợp
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [];
arr3 = arr1.concat(arr2);
console.log(arr3);

