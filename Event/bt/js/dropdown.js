const dropSelect = document.querySelector(".dropdown__select");
const dropSelected = document.querySelector(".dropdown__selected");
const dropList = document.querySelector(".dropdown__list");
const dropItems = document.querySelectorAll(".dropdown__item");
const drop = document.querySelector(".dropdown");
const dropCaret = document.querySelector(".dropdown__caret");
dropSelect.addEventListener("click", function(e){
    dropList.classList.toggle("show");
    dropCaret.classList.toggle("fa-caret-up");
    dropCaret.classList.toggle("fa-caret-down");
});

dropItems.forEach(item => item.addEventListener("click", handleDropItem));
function handleDropItem(e){
    const text = e.target.querySelector(".dropdown__text").textContent;
    dropSelected.textContent = text;
    dropList.classList.remove("show");
    caret();
}

document.addEventListener("click",function(e){
    if(!drop.contains(e.target)){
        dropList.classList.remove("show");
        caret();
    }
});

function caret(){ // tối ưu code
    dropCaret.classList.remove("fa-caret-up");
    dropCaret.classList.add("fa-caret-down");
}