// const button=document.querySelector(".button");
console.log("---------mousemove----------");
// -> khi mà rê chuột vào phần tử đó ,thì sẽ làm 1 cái gì đó
// button.addEventListener("mousemove", function(){
//     console.log("mousemove");
// });

console.log("---------mouseover----------");
// -> nó sẽ active khi mà rê chuột vào phần tử và con của phần tử đó , thì sẽ làm 1 cái gì đó // và nó ko chạy liên tục như mousemove
// button.addEventListener("mouseover", function(){
//     console.log("mouseover");
// });

console.log("---------mouseenter----------");
// -> nó sẽ active 1 khi mà rê chuột vào phần tử  và phần tử con của nó khi rê tới ko tính ,nó khác với mouseover , thì sẽ làm 1 cái gì đó // và nó ko chạy liên tục như mousemove
// button.addEventListener("mouseenter", function(){
//     console.log("mouseenter");
// });

console.log("---------mouseleave----------");
// -> nó sẽ active khi mà rê chuột vào phần tử và rê ra ngoài thì nó sẽ tính 
// button.addEventListener("mouseleave", function(){
//     console.log("mouseleave");
// });

console.log("---------wheel----------");
//sự kiện con lăn chuột(tức là cục lăn trên con chuột của chúng ta)
// e.deltaY -> nếu lăn con chuột lên thì sẽ cho ra số dương , còn lăn xuống thì sẽ cho ra số âm

console.log("------------------Tọa độ--------------------");
console.log("---------pageX & clientX----------");
// document.addEventListener("mousemove",function(e){
//     console.log(`PageX: ${e.pageX}`);
//     console.log(`clientX: ${e.clientX}`);
// });

// -> tương tự như pageY và clientY
console.log("---------pageY & clientY----------");
document.addEventListener("mousemove",function(e){
    console.log(`PageY: ${e.pageY}`);
    console.log(`clientY: ${e.clientY}`);
});

// clientY: sẽ lấy tọa độ theo viewport
// PageY: sẽ lấy tọa độ của document(nếu có scroll thì sẽ thấy khác giữa PageY và clientY )
