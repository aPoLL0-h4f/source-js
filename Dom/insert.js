console.log("-----------------insertAdjacentText-----------------");
// chèn text vào element của chúng ta, chèn vào chỗ bất kì 
// insertAdjacentText("position", "text");
// position: beforebegin, afterbegin, beforeend, afterend
const h3 = document.querySelector("h3");
h3.insertAdjacentText("beforebegin", "hello");
h3.insertAdjacentText("afterbegin", "hello");
h3.insertAdjacentText("beforeend", "hello");
h3.insertAdjacentText("afterend", "hello");

console.log("-----------------insertAdjacentElement-----------------");
// element.insertAdjacentElement("position", node);
// chèn 1 tag vào chỗ bất kì 
const strong = document.createElement("strong");
strong.setAttribute("class", "bold");
h3.insertAdjacentElement("beforeend", strong);

console.log("-----------------insertAdjacentHTML-----------------");
/* 
<ul class="menu">
   <li>1</li>
   <li>2</li>
   <li>3</li>
</ul>  
*/
//giả sử ta có 1 đoạn code như này thì để tạo bằng creatElement thì rất dài nên sẽ tạo bằng cách này
const template = `
<ul class="menu">
   <li>1</li>
   <li>2</li>
   <li>3</li>
</ul>  
`;
// đưa template vào body
document.body.insertAdjacentHTML("beforeend", template);

console.log("-----------------insertBefore-----------------");
// parentNode.insertBefore(newNode, existingNode) // insert newNode ra phía sau existingNode
// newNode có thể dùng 1 cái node có sẵn hoặc  tạo ra 1 cái node mới
// existingNode là 1 cái node đã tồn tại r
const ul = document.querySelector("ul");
document.body.insertBefore(ul, document.querySelector("h3"));
// document.body.insertBefore(ul, document.querySelector("h3").nextSibling); có thể .nextSibling còn insertAdjacentHTML thì ko thể

console.log("-----------------replaceChild-----------------");
// Node.replaceChile(newNode, oldNode) -> dùng để replace cái oldNode thành cái newNode
const span = document.createElement("span");
span.textContent= "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));

console.log("-----------------cách sử dụng forEach cho HTMLCollection-----------------");
// HTMLCollection ko sử dụng đc forEach nhưng đôi khi chúng ta muốn sự dụng forEach thì sẽ dùng những cách này
const li = document.getElementsByTagName("li");
console.log(li);
// lúc này dùng li.forEach thì sẽ k dùng đc
// convert sang mảng 
// 1/ Array.from(HTMLCollection or NodeList) 
// 2/ [...HTMLCollection] or [...NodeList]
[...li].forEach(item => console.log("hello")); 

console.log("-----------------những selector đặc biệt-----------------");
// để lấy ra những thẻ này thì
// html, body, head , title
//html: document.documentElement
//body: document.body
//head: document.head
//title: document.title