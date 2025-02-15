// sẽ remove sự kiện đi
// khi add sự kiện bên trong có những gì thì remove bên trong cũng như v như v
// và viết dưới dạng function ở bên ngoài nó mới remove đc

const btn = document.querySelector(".button");
function handleMousemove(e){
    console.log(e.clientX);
}

document.addEventListener("mousemove",handleMousemove)


btn.addEventListener("click",function(e){
    document.removeEventListener("mousemove",handleMousemove)
});