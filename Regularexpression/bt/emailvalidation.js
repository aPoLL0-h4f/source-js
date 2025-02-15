window.addEventListener("load", function(){
    const emailInput = document.querySelector(".input");
    emailInput.addEventListener("input", function(e){
        const value = e.target.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(value === ""){
            e.target.classList.remove("invalid");
            e.target.classList.remove("valid");

        }else{
            if(regexEmail.test(value.trim())){
                e.target.classList.add("valid");
                e.target.classList.remove("invalid");
            }else{
                e.target.classList.remove("valid");
                e.target.classList.add("invalid");
            }
        }
        
    });
});