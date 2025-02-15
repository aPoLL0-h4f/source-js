function createNotification(title = "Welcome to notification"){
    const template = `<div class="noti">
    <img src="https://cdn.luatvietnam.vn/uploaded/Images/Original/2022/08/15/mau-thong-bao-theo-nghi-dinh-30_1508130248.jpg" alt="" class="noti-image">
    <div class="noti-content">
        <h3 class="noti-title">${title}</h3>
        <p class="noti-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eaque incidunt similique neque 
        </p>
    </div>
</div>`;
document.body.insertAdjacentHTML("afterbegin", template);
}
const notiData = [
    "Welcome to Phan Dat",
    "I Love Kha",
    "Welcome to Thuy Kha",
    "I Love Do",
    "Welcome to Thuy Do"
];

let lastTitle;
const timer = setInterval(function(){
    const noti = document.querySelector(".noti");
    if(noti){
        noti.parentNode.removeChild(noti);
    }else{
        title = notiData[Math.floor(Math.random()*notiData.length)]
        if(lastTitle !== title){
            createNotification(title);
        }
        lastTitle = title;
    }
}, 4000)