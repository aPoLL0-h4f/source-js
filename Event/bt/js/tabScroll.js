window.addEventListener("load",function(){
    const tabItems =document.querySelectorAll(".tab-item");
    const tablist =document.querySelector(".tab-list");
    const tab = document.querySelector(".tab");
    const tabOffsetLeft = tab.offsetLeft;
    console.log(tabOffsetLeft);
    [...tabItems].forEach(item => item.addEventListener("click", handleTabClick));
    function handleTabClick(e){
        [...tabItems].forEach(item => item.classList.remove("active"));
        e.target.classList.add("active");
        const leftSpacing = e.target.offsetLeft - tabOffsetLeft;
        tablist.scroll(leftSpacing / 2, 0);
    }
});