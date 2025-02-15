// thứ tự ưu tiên keydown -> keypress -> keyup

console.log("-----------------keydown-----------------");
// keydown: hoạt động khi nhấn bàn phím xuống, tất cả mọi phím đều đc, và tất cả mọi phím này khi nhấn xuống và sử dụng e.key thì nó đc hiểu là chuỗi

const input = document.querySelector(".input");
// input.addEventListener("keydown",function(e){
//     console.log(e.key); // -> in ra ký tự mình nhấn xuống
//     // console.log(e.keyCode);// -> in ra mã code trong bản ascii của cái đó
//     if(e.key === "Enter"){
//         alert("You hit Enter");
//     }
// });

console.log("-----------------keyup-----------------");
//keyup: sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
// input.addEventListener("keyup", function(e){
//     console.log(e.key);
// });

// keydown,keypress có thể sử dụng .preventDefault() để ngăn chặn việc gõ vào
//keyup thì ko đc vì nó là sự kiện xảy ra sau(vì nó active khi nhả ra thôi nên preventDefault() sẽ k hiểu )

console.log("-----------------keypress-----------------");
// keypress: sự kiện này xảy ra khi bạn nhấn phím giống như keydown
// nhưng nó sẽ ignore các phím như delete, pageUp, pageDown, Home, End, Ctrl, Alt, Shift, Esc,........
// input.addEventListener("keypress", function(e){
//     console.log(e.key);
// });

console.log("-----------input------------");
// khi lấy giá trị bằng value thì cái keydown, keyup, keypress nó sẽ ko lấy đủ kí tự mà mình gõ vào, khi mà mình gõ từ ký tự thứ 2 thì nó mới bắt đầu lấy
// vì vậy sẽ phải sử dụng event input, input nó sẽ lấy value mỗi khi chúng ta gõ

// e.target.value

// XEM Ở BÀI TẬP HIGHLIGHTSEARCH

console.log("-----------------change-----------------");
// hay dùng trong checkbox hoặc radio
// khi chúng ta gõ xong nhấn Enter hoặc nhấn chuột ra ngoài thì nó sẽ chạy
// input.addEventListener("change",function(){
//     console.log("working");
// });

console.log("-----------------focus-----------------");
// sẽ thực hiện khi nhấn vào thì sẽ làm cái gì đó
// input.addEventListener("focus",function(){
//     console.log("focus");
// });

console.log("-----------------blur-----------------");
// sẽ thực hiện khi nhấn focus rồi sau đó nhấn ra ngoài thì lúc đó blur mới thực hiện
// input.addEventListener("blur",function(){
//     console.log("blur");
// });

console.log("-----------submit trong form-----------");
// khi bấm input có type là submit thì web nó sẽ load để ko muốn reload lại web thì .preventDefault()

// sử dụng input.value để lấy giá trị khi nhập vào trong input
// const form = document.querySelector(".form");
// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     if(input.value === ""){
//         alert("You can not make empty input");
//     }else{
//         console.log(input.value);
//     }
// });

console.log("-----------Truy xuất các giá trị trong cơ bản-----------");

// this.elements trả ra 1 list elements trong form đó

// để lấy ra 1 element mà mình muốn, khi nhấn submit thì có thể dùng .tên name của cái input đó
// /* <input type="text" class="input" name="username" placeholder="Text">  -> this.elements["username"] */
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(this.elements);
  // console.log(this.elements["username"]);
  // console.log(this.elements["username"].value); -> lấy ra giá trị của input đó

  // truy xuất giá trị của radio
  // const username= this.elements["username"].value;
  // const gender = this.elements["gender"].value;
  // console.log({username,gender});

  // truy xuất giá trị của checkbox vì checkbox ko làm theo cách trên được
  // const hobby = this.querySelectorAll(`input[name="hobby"]`);
  // let hobbyValues = [];
  // [...hobby].forEach((item) => hobbyValues.push(item.value));
  // console.log(hobbyValues);
});

console.log("-----------Form Validation-----------");
// Validation: dữ liệu nhập vào nó phải đúng theo 1 chức năng nào đó chúng ta yêu cầu
