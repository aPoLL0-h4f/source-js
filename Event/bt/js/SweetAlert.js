window.addEventListener("load",function(){
   function renderSweetAlert(){
            const template = `<div class="sweet-alert">
            <i class="sweet-icon">v</i>
            <p class="sweet-text"> Congratulations on learning JS </p>
        </div>`;
        document.body.insertAdjacentHTML("beforeend", template);
   }

   const btn = document.querySelector(".btn");
   btn.addEventListener("click", function(e){
        renderSweetAlert();
        const sweetItem = document.querySelector(".sweet-alert");
        if(sweetItem){
            setTimeout(function(){
                sweetItem.parentElement.removeChild(sweetItem);
            }, 2000);
        }
   });
});