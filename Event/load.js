console.log("----------------DOMContentLoaded----------------");
// document.addEventListener("DOMContentLoaded");
// -> khi mà HTML đã load xong , sẽ làm gì đó thì sử dụng cái này 
document.addEventListener("DOMContentLoaded",function(){
    console.log("DOM loaded");
});


// window.addEventListener("load"); -> web fully loaded -> nghĩa là cái logo ở web ko còn xoay vòng tròn nữa
// -> Khi muốn web load xong hết luôn rồi chúng ta mới làm 1 việc gì đó thì sử dụng cái này
window.addEventListener("load",function(){
    console.log("Your web loaded");
});
