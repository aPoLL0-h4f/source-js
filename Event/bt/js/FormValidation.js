const form = document.querySelector(".form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const username = this.elements["username"].value;
    const password = this.elements["password"].value;
    if(!username && !password){
        alert("please Enter your Email and Password");
    }else if(!username){
        alert("please Enter your Email");
    }else if(!password){
        alert("please Enter your password");
    }
    if(password.length <= 5){
        alert("password short");
        return;
    }
});