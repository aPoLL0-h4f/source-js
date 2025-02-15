window.addEventListener("load",function(){
    const tabItems = document.querySelectorAll(".tab-item");
    [...tabItems].forEach(item => item.addEventListener("click", handleTabClick));
    const tabList = document.querySelector(".tab-list");
    const tab = document.querySelector(".tab");
    const tabOffsetLeft = tab.offsetLeft;
    const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;
    const tabNext = document.querySelector(".tab-next");
    const tabPrev = document.querySelector(".tab-prev");
    let deltaScroll = 40;

    function handleTabClick(e){
        [...tabItems].forEach( item => item.classList.remove("active"))
        e.target.classList.add("active");
        let leftSpacing = e.target.offsetLeft;
        tabList.scroll(leftSpacing / 2 , 0);
    }

    tabList.addEventListener("wheel",function(e){
        const delta = e.deltaY;
        this.scrollLeft += delta;
        console.log(this.scrollLeft);
        if(Math.ceil(this.scrollLeft) < tabScrollWidth && this.scrollLeft > 0){
            tabPrev.classList.remove("disabled");
            tabNext.classList.remove("disabled");
        }
        if(Math.ceil(this.scrollLeft) >= tabScrollWidth){
            tabPrev.classList.remove("disabled");
            tabNext.classList.add("disabled");
        }else if(this.scrollLeft <= 0){
            tabPrev.classList.add("disabled");
            tabNext.classList.remove("disabled");
        }
    });

    tabNext.addEventListener("click",function(e){
        tabPrev.classList.remove("disabled");
        tabList.scrollLeft +=deltaScroll;
        if(Math.ceil(tabList.scrollLeft) >= tabScrollWidth){
            tabNext.classList.add("disabled");
        }
    })

    tabPrev.addEventListener("click", function(e){
        tabNext.classList.remove("disabled");
        tabList.scrollLeft -=deltaScroll;
        if(tabList.scrollLeft <= 0){
            tabPrev.classList.add("disabled");
        }
    });

});

