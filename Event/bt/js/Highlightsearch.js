window.addEventListener("load",function(){
    const inputSearch = document.querySelector(".input-search");
    const items= document.querySelectorAll(".dropdown-item");
    inputSearch.addEventListener("input", handleHighlight);
    function handleHighlight(e){
        let filter = e.target.value;
        filter = filter.toLowerCase();
        console.log(filter);
        items.forEach((item) =>{
            const text = item.textContent;
            const index = text.toLowerCase().indexOf(filter);
            console.log(index);
            if(index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))){
                item.innerHTML = `<span class="primary">${text.substring(index, filter.length)}</span>${text.substring(filter.length)}`

            }
        })

    }
});




// cái keydown, keyup, keypress nó sẽ ko lấy đủ kí tự mà mình gõ vào, khi mà mình gõ từ ký tự thứ 2 thì nó mới bắt đầu lấy
// vì vậy sẽ phải sử dụng event input, input nó sẽ lấy value mỗi khi chúng ta gõ