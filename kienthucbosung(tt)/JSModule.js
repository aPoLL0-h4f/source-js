// Module là tập hợp nhiều function trong đó , khi chúng ta muốn sử dụng chỉ cần gọi ra thôi
//ưu điểm: dễ bảo trì, tái sử dụng, nó chỉ sử dụng được những cái trong scope của nó

// export default : cú pháp
// export default thì qua bên phía import có thể đổi tên đc mà k hề bị lỗi
export default function debounceFn(func, wait, immediate) {
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

// export theo tên , ở trên đã dùng default rồi thì ở đây k thể dùng đc vì default chỉ có 1 thôi
const name = "evondev";
const job = "frontend developer";
export { name as myName, job }; // export theo tên mà nhiều phần tử
//name as myName : khúc này nghĩa là đổi tên name thành myName thì qua bên phía import cũng phải để myName
