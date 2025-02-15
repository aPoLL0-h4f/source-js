console.log("-----------defer-----------");

document.addEventListener("DOMContentLoaded",function(){
    console.log("loaded");
});

// nghĩa là khi để thẻ script ở trên cùng thì nó sẽ load script trc rồi mới đến body nên sẽ xảy ra lỗi nên sẽ dùng defer trong thẻ <script> : defer nghĩa là khi load tới thẻ script đó thì nó đc hiểu rằng ko cần phải đợi load script trc, có thể load xong body rồi sẽ quay lại load script

const p = document.querySelector("p");
console.log(p);
// LƯU Ý
/* <script defer src="./defer1.js"></script> */
/* <script defer src="./defer2.js"></script> */
//khi DOM load xong thì có 2 script nếu có 2 thẻ script này thì nếu script 2 có dung lượng nhẹ hơn có thể nó đc load xong trc nên sẽ sử dụng defer ở 2 thẻ để mà script 1 load xong mới đến 2

console.log("-----------async-----------");
// async nó sẽ bất đồng bộ, nó sẽ ko quan tâm những tk khác load xong chưa , nó chỉ load độc lập, nó ko quan tâm DOM hay những tk khác load xong chưa

// nó dùng trong trường hợp sử dụng bên thứ 3, VD: là lấy quảng cáo từ gg hay fb nó sẽ có những cái script thì lúc này muốn chèn vào website của mik thì sử dụng async
