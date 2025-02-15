//  BT1/ tạo 
// <div class="card">
//     <img src="" alt="" class="card-img">
// </div>
//  bằng js 
const card = document.createElement("div");
card.classList.add("card");
const cardImg = document.createElement("img");
cardImg.classList.add("card-img");
// cx có thể ghi cách này cardImg.setAttribute("class", "card-img");
const body = document.body;
card.appendChild(cardImg);
body.appendChild(card);

 