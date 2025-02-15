const button = document.querySelector(".button");
function handleClick(){
    console.log("click1");
}

function handleClick2(){
    console.log("click2");
}

// onclick: chỉ chấp nhận 1 event handler thôi
// button.onclick = handleClick;
// button.onclick = handleClick2;

// addEventListener: chấp nhận nhiều event handler, và có capture hay bubbling
button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick2);


// ngoài ra còn có onmousemove, onmousedown