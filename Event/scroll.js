console.log("-------------event scroll----------------");
// window.addEventListener("scroll", function(e){
//     console.log("scroll");
// });

console.log("-------------Debounce----------------");
// nếu mỗi lần ta scroll thì event chạy ra quá nhiều làm tốn bộ tài nguyên vì vậy ta sử dụng Debounce
//Debounce là khi bạn scroll liên tục thì sau mấy giây nó mới bắt đầu active

window.addEventListener("scroll", debounceFn(function(e){
    console.log("scroll");
}, 25)); // 25 nghĩa là sao 25 milisecond sẽ chạy


// Debounce : là kỹ thuật buộc một hàm phải đợi 1 khoảng thời gian nhất định trước khi thực thi. Trong khoản thời gian đợi, mọi động tác sẽ đều bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước
function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

console.log("-------------window.pageXOffset & window.pageYOffset----------------");
//pageXOffset : khoảng cách scroll của windown theo chiều ngang(so với phía bên trái)  
//pageYOffset : khoảng cách scroll của windown theo chiều dọc(so với phía trên cùng)

console.log("-------------phương thức, thuộc tính về scroll-------------");
// scrollTop, scrollLeft, scrollTo, scroll, scrollHeight, scrollWidth
// Áp dụng cho Element chớ k phải window

// scrollTop, scrollLeft tương tự như pageXOffset và pageYOffset nhưng chỉ áp dụng cho element
// scrollTo và scroll(cả 2 cái giống nhau) áp dụng cho cả window và element , scroll(x,y) truyền vào x và y thì nó sẽ tự chạy tới đó mà ko cần scroll


//scrollHeight: trả về chiều cao của element bao gồm padding, nhưng ko có border, khi html.scrollHeight thì nó sẽ lấy hết chiều cao chứa các nội dung luôn chớ ko phải lấy chiều cao của viewport 
//scrollWidth: trả về chiều rộng của element bao gồm padding, nhưng ko có border

const boxed = document.querySelector(".boxed");
boxed.addEventListener("scroll", function(e){
    console.log(boxed.scrollTop);
    console.log(boxed.scrollLeft);
});

console.log("-------------different offsetWidth và scrollWidth-------------");
// cơ bản đều trả về độ rộng như nhau 
// nhưng ở offsetwidth là lấy cố định còn ở scrollwidth thì nếu có phần tử con lớn hơn cha và có scroll thì nó sẽ lấy độ rộng phần tử con đó
// console.log(boxed.offsetWidth);
// console.log(boxed.scrollWidth);

console.log("-------------scrollIntoView()-------------");
// scroll tới phạm vi mà có thể thấy boxed
boxed.scrollIntoView();
