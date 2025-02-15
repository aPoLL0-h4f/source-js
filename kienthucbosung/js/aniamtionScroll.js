document.addEventListener("DOMContentLoaded", function(){
    const images = document.querySelectorAll(".container img");
    window.addEventListener("scroll", function(e){
        const windowSCroll = window.pageYOffset;
        console.log(windowSCroll);
        [...images].forEach((item) => {
            const imgTop = item.offsetTop - (item.offsetHeight / 2);
            if(windowSCroll > imgTop){
                item.classList.add("active");
            }
        });
    });
})