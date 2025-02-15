const toggleMenu= document.querySelector(".toggle-menu");
const menu= document.querySelector(".toggle-list");

toggleMenu.addEventListener("click", handleToggleMenu);
function handleToggleMenu(event){
    event.target.classList.toggle("bx-menu"); // event.target cái này chính là cái toggleMenu
    event.target.classList.toggle("bx-x");
    menu.classList.toggle("is-show")
    // CÁCH 2
    // if(toggleMenu.classList.contains("bx-menu")){
    //     toggleMenu.classList.remove("bx-menu")
    //     toggleMenu.classList.add("bx-x");
    // }else if(toggleMenu.classList.contains("bx-x")){
    //     toggleMenu.classList.remove("bx-x")
    //     toggleMenu.classList.add("bx-menu");
    // }
}

document.addEventListener("click", handleToggleOut);
function handleToggleOut(event){
    console.log(event.target);
    if(!menu.contains(event.target) && !event.target.matches(".toggle-menu")){
        menu.classList.remove("is-show");
        toggleMenu.classList.remove("bx-x");
        toggleMenu.classList.add("bx-menu");
    }
}