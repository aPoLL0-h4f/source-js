/**
   <div class="lightbox">
        <div class="lightbox-content">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80" alt="" class="lightbox-image">
        </div>
    </div>
 */

const images = document.querySelectorAll(".content img");
images.forEach(item => item.addEventListener("click", handleZoomImage));
function handleZoomImage(e){
    const src = e.target.getAttribute("src");
    const template = `<div class="lightbox">
    <div class="lightbox-content">
        <i class='bx bxs-chevron-left lightbox-previous'></i>
        <img src="${src}" alt="" class="lightbox-image">
        <i class='bx bxs-chevron-right lightbox-next'></i>
    </div>
</div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}

let index=0;
document.body.addEventListener("click", function(e){
    const lightImage = document.querySelector(".lightbox-image");
    if(!lightImage) return; //nghĩa là nếu mà ko có lightImage thì nó sẽ return ko chạy đoạn dưới ( tối ưu dữ liệu)
    lightSrc = lightImage.getAttribute("src");
    index = [...images].findIndex(item => item.getAttribute("src") === lightSrc);
    if(e.target.matches(".lightbox")){
        e.target.parentNode.removeChild(e.target);
    }else if(e.target.matches(".lightbox-next")){
        index++;
        if(index > [...images].length - 1){
            index = 0
        }
        displayLightImage(lightImage,index);
    }else if(e.target.matches(".lightbox-previous")){
        index--;
        if(index < 0){
            index= images.length -1;
        }
        displayLightImage(lightImage,index);
    }
});

function displayLightImage(lightImage, index){
    const newSrc = [...images][index].getAttribute("src");
    lightImage.setAttribute("src", newSrc);
}
