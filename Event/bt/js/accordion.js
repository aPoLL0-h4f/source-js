const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach(item => item.addEventListener("click",handleClickAccordion));
const activeStr = "is-active";
function handleClickAccordion(e){
    const content = e.target.nextElementSibling;
    content.style.height= `${content.scrollHeight+1}px`;
    content.classList.toggle(activeStr); // nếu để đoạn này ở trên scrollHeight thì active chạy trc và hiện trc nên ko thể transition đc
    if(!content.classList.contains(activeStr)){
        content.style.height= "0px";
    }

    const icon = e.target.querySelector(".icon");
    icon.classList.toggle("bx-chevron-down");
    icon.classList.toggle("bx-chevron-up");
}