// cái style là 1 cái object chứa nhiều thuộc tính css
console.log("-----------event Target-----------");
// ta có selector.style.property = value
// event.target.style.property = value
// cái event.target nó sẽ tương ứng như là 1 cái selector
// const link = document.querySelector(".link");
// link.addEventListener("click", function(event){
//     event.preventDefault();
//     console.log(event.target); // lấy ra cái selector đó
//     console.log(event.target.style); // lấy ra object cái những style trong cái selector đó
//     event.target.style.color ="red";
// });

console.log("-----------custom attribute-----------");
// muốn thêm 1 kiểu dữ liệu gì đó mà thẻ a ko có , vì thẻ a có attribute class, id , href
// trong thẻ a ở HTML , custom attribute là data-...="value" ở chỗ dấu ... đặt tên sao cx đc và lưu ý là phải ghi in thường
// VD
/* <a href="https://www.facebook.com/binpro1234" class="link" data-name="phandat">Yeu Kha</a> */
// muốn lấy giá trị trong cái data-name của thẻ a (nghĩa là custom attribute là cái data-name)thì
// .dataset.name
// nêu là data-name-abc dài thì ta sử dụng
// .dataset.nameAbc
const link = document.querySelector(".link");
link.addEventListener("click", function(event){
    event.preventDefault();
    const name = event.target.dataset.name;
    console.log(name);
});

