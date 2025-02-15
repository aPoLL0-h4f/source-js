const button = document.querySelector(".change");
const changeData= ["#ffa400", "#00aefd", "#000","grey", "pink", "#2979ff", "#e74c3c"];
button.addEventListener("click", hanlderFuntion);
let lastColor;
function hanlderFuntion(){
    let color = changeData[Math.floor(Math.random() * changeData.length)];
    if(color !== lastColor){
        // document.body.setAttribute("style", "background-color: `${color}`")
        document.body.style.backgroundColor = color;
    }
    lastColor = color;
}
