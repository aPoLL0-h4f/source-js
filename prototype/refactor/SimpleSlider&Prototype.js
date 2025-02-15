window.addEventListener("load", function () {
  function Slider() {
    this.sliderMain = document.querySelector(".slider-main");
    this.sliderItems = document.querySelectorAll(".slider-item");
    this.prevBtn = document.querySelector(".slider-prev");
    this.nextBtn = document.querySelector(".slider-next");
    this.dotItems = document.querySelectorAll(".slider-dot-item");
    this.sliderItemWidth = this.sliderItems[0].offsetWidth;
    this.slidesLength = this.sliderItems.length;
    this.positionX = 0;
    this.index = 0;

    // this.prevBtn.addEventListener("click", function(e) { // khúc này dùng như này thì nó tự hiểu this là cái prevBtn nên sẽ lỗi
    //     this.handleChangeSlide(-1);
    // });

    this.prevBtn.addEventListener("click", () => {
      //khúc này dùng arrow function(vì nó ko cho phép sử dụng this nên nó sẽ ra tk cha) hoặc dùng bind
      this.handleChangeSlide(-1);
    });

    this.nextBtn.addEventListener("click", () => {
      //khúc này dùng arrow function(vì nó ko cho phép sử dụng this nên nó sẽ ra tk cha) hoặc dùng bind
      this.handleChangeSlide(1);
    });

    [...this.dotItems].forEach((item) =>
      item.addEventListener("click", (e) => {
        this.handleChangeDots(e);
      })
    );
  }

  new Slider();

  Slider.prototype.handleChangeDots = function (e) {
    [...this.dotItems].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    const sliderData = parseInt(e.target.dataset.index);
    this.index = sliderData;
    this.positionX = -1 * sliderData * this.sliderItemWidth;
    this.sliderMain.style = `transform: translateX(${this.positionX}px)`;
  };

  Slider.prototype.handleChangeSlide = function (direction) {
    if (direction === 1) {
      this.index++;
      if (this.index >= this.slidesLength) {
        this.index = this.slidesLength - 1;
        return;
      }
      this.positionX = this.positionX - this.sliderItemWidth;
      this.sliderMain.style = `transform: translateX(${this.positionX}px)`;
    } else if (direction === -1) {
      this.index--;
      if (this.index < 0) {
        this.index = 0;
        return;
      }
      this.positionX = this.positionX + this.sliderItemWidth;
      this.sliderMain.style = `transform: translateX(${this.positionX}px)`;
    }
    [...this.dotItems].forEach((item) => item.classList.remove("active"));
    [...this.dotItems][this.index].classList.add("active");
  };
});
