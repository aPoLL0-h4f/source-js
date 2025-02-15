// 1/ event : sự kiện là gì? 
// là những cái mà mình tương tác với lại DOM tức là ở trên web hoặc trên window bằng chuột hoặc bằng bàn phím,..
// Thêm sự kiện: selector.addEventListener("eventName", handler, [options])
// +eventName:click, keydown, keypress, keyup, mouseover, mousemove, mouseleave, load, DOMContentLoaded,....
// +handler: function 
// +option : capture, bubbling,...


console.log("---------------click---------------");
const button = document.querySelector(".button");
// cách 1
// button.addEventListener("click", function(){
//     console.log("click me");
// })
//cách 2 để function bên ngoài
function handlerClick(){
    console.log("click button");
}
// bỏ function vào eventListener kiểu này là sai
// button.addEventListener("click", handlerClick());
// theo kiểu này mới đúng
// button.addEventListener("click", handlerClick);

console.log("---------------phương thức nodeName---------------");
// nó sẽ trả về tên loại node khi click vào
/*VD:  <section class="grid"></section> */
// document.body.addEventListener("click",function(e){
//     console.log(e.target.nodeName);
//   })
// nếu mà click vào class grid thì nó sẽ trả về 1 chuôi nodeName là "SECTION"


console.log("---------------Bubbling---------------");
// Bubbling: nổi bọt trong click
// sự kiện click chạy từ trong ra ngoài có nghĩa là 
/* <button class="button">
        <span>Button</span>
   </button>  */
// thẻ button lồng thẻ span nếu addEvent cả button và span thì nếu bấm click span thì span chạy trước xong đến button cx sẽ chạy theo
// button.addEventListener("click", function(){
//     console.log("click me");
// });
// const span2 = document.querySelector(".button span");
// span2.addEventListener("click", function(){
//     console.log("click span")
// });
// lúc này nếu ta click vào span thì cả button cx chạy để khắc phục tình huống này ta sử dụng

// stopPropagation() -> ngăn chặn vấn đề bubbling, click vào chính nó thì chỉ hoạt động chính nó , những thằng bên ngoài k hoạt động
// const span = document.querySelector(".button span");
// span.addEventListener("click", function(e){
//     e.stopPropagation(); 
//     console.log("click span2")
// });

// nếu thêm 1 sự kiện vào thẻ span nữa thì lúc này stopPropagation() ko có tác dụng vs span nữa, Trường hợp 1 element dùng nhiều sự kiện vì vậy phải dùng cái này
// stopImmediatePropagation() ->ngăn chặn việc lan truyền sự kiện qua các trình xử lý sự kiện khác // lưu ý phải bỏ ở trên
// span.addEventListener("click", function(e){
//     e.stopImmediatePropagation();
//     console.log("click span");
// });
// span.addEventListener("click", function(e){
//     console.log("click span2")
// });

console.log("---------------Capturing ---------------");
// sự kiện click chạy ngoài vào trong có nghĩa là 
/* <button class="button">
        <span>Button</span>
   </button>  */
//thẻ button lồng thẻ span nếu addEvent cả button và span nếu muốn chạy từ ngoài vào trong tức là button chạy trc và xong đến span chạy thì dùng capturing

// capture mặc định là false
// button.addEventListener("click", handlerClick,{
//     capture: true
// });

// const span = document.querySelector(".button span");
// span.addEventListener("click", function(e){
//     e.stopPropagation(); 
//     console.log("click span")
// },{
//     capture: true
// });

// document.body.addEventListener("click", function(){
//     console.log("click body");
// },{
//     capture: true
// })


console.log("---------------once---------------");
// once mặc định là false

// có nghĩa là nếu mình nhấn nhiều cái sẽ in click button ra nhiều lần , còn khi thêm once thì nó chỉ chạy 1 lần duy nhất
button.addEventListener("click",handlerClick, {
    once: true
})


console.log("---------------target vs currentTarget---------------");
// target -> nó sẽ chọn chính xác element mà mình click tới ở web
// currentTarget -> nó sẽ chọn phần tử mà mình addEven click, trong ví dụ này thì phần tử mà mình chọn là button vì vậy khi nhấn vào span thì nó vẫn ra là button
// button.addEventListener("click", function(e){
//     console.log(e.target);
//     console.log(e.currentTarget);
// })

console.log("---------------preventDefault()---------------");
// ngăn chặn một hành vi mặc định nào đó
// VD: có 1 thẻ a có href khi chúng ta bấm vào , nó sẽ load tới 1 page web nào đó (đó là hành vi mặc định)
// khi chúng ta bấm vào nếu ko muốn nó load ra 1 web khác thì
// const link = document.querySelector(".link");
// link.addEventListener("click",function(e){
//     e.preventDefault();
//     console.log("click me");
// });


console.log("---------------contains và matches---------------");
// selector.contains("selector") // có nghĩa là khi click vào 
// VD: menu.contains(".hello") -> kiểm tra khi click vào thì menu có chứa cái element mà mik click vào ko

// selector.matches("selector") // có nghĩa là khi click vào là xem nó có có phải là đó selector trong dấu ngoặc ko
// VD: selector.matches(".hello") -> kiểm trả click vào thì nó có phải là class hello ko