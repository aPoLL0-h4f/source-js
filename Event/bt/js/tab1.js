const tabItem = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
[...tabItem].forEach(item => item.addEventListener("click", handleTabItem));
function handleTabItem(e){
    [...tabItem].forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");
    // [...tabContent].forEach(item => item.classList.remove("active"));
    let x = e.target.dataset.tab;
    console.log(x);
    [...tabContent].forEach(item => {
        item.classList.remove("active");
        if(item.getAttribute("data-tab") === x){
           item.classList.add("active"); 
        }
    });

    // [...tabContent][x-1].classList.add("active");
} 

