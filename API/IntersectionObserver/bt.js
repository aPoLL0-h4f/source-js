if("IntersectionObserver" in window){
   const options= {
    threshold: 0.5,
   };
   let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        })
   }, options)
   const images = document.querySelectorAll("img");
   images.forEach((img) => observer.observe(img));
}
