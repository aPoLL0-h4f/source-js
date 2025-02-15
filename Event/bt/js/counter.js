const number = document.querySelector(".counter-number");
const decrease = document.querySelector(".counter-decrease");
const increase = document.querySelector(".counter-increase");
let count= parseInt(number.textContent);
decrease.addEventListener("click", function(){
    if(count <= 0) return 0;
        count--;
        number.textContent = count;
});

increase.addEventListener("click", function(){
    if(count >= 10) return 10;
    count++;
    number.textContent = count;
});