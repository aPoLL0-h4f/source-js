// Traversing là những vấn đề liên quan đến Dom truy xuất những phần tử trong Dom Ex: phía trước , phía sau, phần tử cha ,....

console.log("------------------parentNode vs parentElement------------------");
// sẽ lấy phần tử cha của cái Dom đó
const span = document.querySelector(".span");
console.log(span.parentNode);
console.log(span.parentElement);
// muuốn lấy phần tử cha gần nhất mà ở ngoài 1 cấp nữa thì 
console.log(span.parentNode.parentNode); // tương tự parentElement cx vậy

console.log("------------------Sự khác nhau giữa parentNode vs parentElement------------------");
// parentElement có thể null còn parentNode thì ko
// document.documentElement -> lấy ra thẻ html
console.log(document.documentElement.parentElement); // null
console.log(document.documentElement.parentNode); // sẽ lấy chính nó

("-----------------removeChild-----------------");
// xóa một nút con khỏi một nút cha

// đầu tiền phải đưa về phần tử cha
// selector.parentNode hoặc selector.parentElement
// sau khi lấy đc phần tử cha thì .removeChild(selector)
// span.parentNode.removeChild(span); // xóa thẻ span 

console.log("------------------nextElementSibling------------------");
// sẽ tìm phần tử kế tiếp nó
const nextSpan = span.nextElementSibling;
console.log(nextSpan);

console.log("------------------previousElementSibling-----------------");
// sẽ tìm phần tử đứng sau nó
const previousLink = span.previousElementSibling;
console.log(previousLink);

console.log("------------------nextSibling------------------");
console.log(span.nextSibling); // nếu là text đứng ở kế tiếp thì nó sẽ lấy text // LƯU Ý khoản trắng cx là text

// có thể.nextSibling , span.nextSibling.nextSibling để lấy thằng kế tiếp nữa

console.log("------------------previousSibling-----------------");
console.log(span.previousSibling);// nếu là text đứng ở sau thì nó sẽ lấy text // LƯU Ý khoản trắng cx là text

console.log("------------------childNodes-----------------");
// trả về 1 mảng node bên trong bao gồm textNodes // lưu ý khoản trắng cx tính là text
console.log(span.childNodes);
console.log("------------------children-----------------");
// trả về hết các node ko có textNodes 
console.log(span.children);
console.log("------------------firstChild vs firstElementChild-----------------");
console.log(span.firstChild); // lấy text đầu
console.log(span.firstElementChild); //lấy element đầu

console.log("------------------lastChild vs lastElementChild-----------------");
console.log(span.lastChild);
console.log(span.lastElementChild);
