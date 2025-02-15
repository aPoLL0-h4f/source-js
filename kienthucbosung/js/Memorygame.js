const cardsArray = [
  {
    name: "fire",
    img: "../img/fire.png" ,
  },
  
  {
    name: "youtube",
    img: "../img/youtube.png"  
  },

  {
    name: "flash",
    img: "../img/flash.png"  
  },

  {
    name: "gift",
    img: "../img/gift.png"  
  },

  {
    name: "tron",
    img: "../img/tron.png"  
  },

  {
    name: "ufo",
    img: "../img/ufo.png"  
  },

  {
    name: "plant",
    img: "../img/plant.png"  
  },

  {
    name: "burger",
    img: "../img/burger.png"  
  },
];

let previousCard;
let count= 0;
let firstGuess = "";
let secondGuess = "";
const grid = document.querySelector(".grid");

// sort((a,b) =>0.5 - Math.random()); -> sẽ random các phần tử
function generateCard(){
  grid.innerHTML = "";
  const cardArrayMerge = cardsArray.concat(cardsArray).sort((a,b) =>0.5 - Math.random());
  cardArrayMerge.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.dataset.name= item.name; // nếu dataset chưa có thì nó sẽ tự thêm vào
      //front card
      const front = document.createElement("div");
      front.classList.add("front");
      //back card
      const back = document.createElement("div");
      back.classList.add("back");
      back.style.backgroundImage= `url(${item.img})`;

      card.appendChild(front);
      card.appendChild(back);
      grid.appendChild(card);
  });
}

generateCard();

function matchingCard(){
  const selects =  document.querySelectorAll(".selected");
  [...selects].forEach(item => item.classList.add("matched"));
}

function resetGuess(){
  count = 0;
  firstGuess = "";
  secondGuess = "";
  previousCard = null;
  const selects =  document.querySelectorAll(".selected");
  [...selects].forEach(item => item.classList.remove("selected"));

  const matchedAll = document.querySelectorAll(".matched");
  const cardLength = document.querySelectorAll(".card").length;
  if(matchedAll.length === cardLength){
    // done game -> reset game
    [...matchedAll].forEach(item => item.classList.remove("matched"));
    setTimeout(generateCard, 1000);
  }
}

grid.addEventListener("click", function(e){
  const clicked = e.target;
  if(clicked.nodeName === "SECTION" || previousCard === clicked || clicked.parentNode.classList.contains("selected") || clicked.parentNode.classList.contains("matched")){
    return;
  }
  if(count<2){
    count++;
    if(count === 1){
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }else{
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }

    if(firstGuess !== "" && secondGuess !== "" ){
      if(firstGuess === secondGuess){
        setTimeout(matchingCard,500);
      }
        setTimeout(resetGuess,500);
    }
    previousCard = clicked;
  }
});
