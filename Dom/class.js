console.log("-----------------addClass-----------------");
// selector.classList.add("className") // thêm 1 class vào 1 thẻ nào đó trong html
const container = document.querySelector(".container");
container.classList.add("is-active");

console.log("-----------------removeClass-----------------");
// selector.classList.remove("className") // xóa 1 class trong 1 thẻ nào đó trong html
// container.classList.remove("container");

console.log("-----------------contains-----------------");
// -> kiểm tra xem cái selector có chứa cái class tên là ... đó ko
console.log(container.classList.contains("container")); // false
console.log(container.classList.contains("is-active")); // true
// có thể dùng dấu phủ định
// console.log(!container.classList.contains("container")); // true

console.log("-----------------toggle-----------------");
// -> nghĩa là nếu selector có cái class đó rồi thì nó sẽ remove còn chưa có thì nó sẽ thêm vào 
// selector.classList.toggle("className");

// Ex
// if(container.classList.contains("is-active")){
//     container.classList.remove("is-active");
// }else{
//     container.classList.add("is-active");
// }
// cách trên ghi dài nên sử dụng cách này
container.classList.toggle("is-active");

console.log("-----------------className-----------------");
// nếu có nhiều class thì chúng ta muốn biết cái div đó hay cái selector đó có những class gì thì ta dùng
// selector.className -> trả ra chuỗi các class của selector
const title = document.querySelector(".title");
// Muốn lấy hết class trong title
console.log(title.className);
// mẹo muốn xóa nhanh nhiều tên class trong 1 thẻ chỉ để lại 1 tên để làm class thì
// title.className= "title";
// CHÚ Ý 
// có thể add nhiều class vào 1 thẻ như này
// title.className =" title abc xyz "";