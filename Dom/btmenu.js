const menu = document.querySelector(".menu");
menu.classList.toggle("is-show");

// menu.addEventListener("click", function(e){
//     if(!e.target.contains(document.body)){
//         return;
//     }
// });


document.addEventListener("click", function(e){
    if(menu.contains(e.target)){
        console.log(e.target);
        return;
    }else{
        menu.classList.toggle("is-show");
    }
})