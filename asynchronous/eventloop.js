// js hoạt động đơn luồng (single thread) -> tại 1 thời điểm nó chỉ thực hiện 1 chức năng
function task(message){
    let number = 10000000;
    while(number > 0){
        number--;
    }
    console.log(message);
}
// khúc này đang chạy đồng bộ và bị blocking script
// console.log("start");
// task("loading"); // khúc này nó chạy hết 1000000 xong mới chạy End khúc này bị blocking
// console.log("End");

//để ngăn chặn vấn để blocking này ta sử dụng callback

console.log("start");
setTimeout(()=> {
    task("loading"); 
}, 2000);
console.log("End");

// web APIs: setTimeout, fetch resquest, DOM Event