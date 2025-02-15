console.log("-----------offset-----------");
// 1./ offsetWidth, offsetHeight, offsetLeft, offsetParent, offsetTop
function log(value){
    console.log(value);
}
const box = document.querySelector(".boxed");
log(box.offsetWidth); // trả về độ rộng của phần tử có tính border, có padding
log(box.offsetHeight)// trả về chiều cao của phần tử có tính border
log(box.offsetLeft)// vị trí của nó so với bên trái , nếu sát bên trái thì là 0 còn nếu có margin bao nhiêu ở bên trái thì nó sẽ in ra số margin đó
log(box.offsetTop)// vị trí của nó so với phía trên
log(box.offsetParent); // lấy ra phần tử cha để lấy giá trị của phần tử cha



console.log("-----------client-----------");
// 2./ clientWidth, clientHeight, clientLeft, clientTop
log(box.clientWidth); // trả về độ rộng của phần tử nhưng trừ đi border, có padding
log(box.clientHeight); // trả về chiều cao của phần tử nhưng trừ đi border
log(box.clientLeft); // vị trí của nó so với bên trái boder
log(box.clientTop); //vị trí của nó so với bên trên boder

// nếu để document.documentElement.clientHeight nó sẽ chỉ lấy chiều cao của viewport


console.log("--------------window--------------");
// window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight
log(window.innerHeight);
log(window.outerHeight);
log(window.innerWidth);
log(window.outerWidth);

console.log("--------------getBoundingClientRect()--------------");
// selector.getBoundingClientRect() -> lấy tọa độ, kích thước của phần tử
log(box.getBoundingClientRect()); // -> sẽ trả về 1 object
//left, x: vị trí của khối so với bên trái
//top, y: vị trí của khối so với phía trên
//bottom: chiều cao của khối + top
// right: độ rộng của khối + left
// width: độ rộng
// height: chiều cao


