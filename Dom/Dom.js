// DOM => Document Object Model

// I/Selecting nodes : truy vấn cái node đó trong html
console.log("-----------------document.querySelector-----------------");
//document.querySelector("selector"); -> trả về 1 node nếu tồn tại selector , ngược lại nếu ko có nó sẽ trả về null
// selector là mẫu để chọn phần tử HTML mà muốn định nghĩa style Ex: .header, p, #heading,........
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spiner");
const singleNode4 = document.querySelector("div button");
console.log(singleNode);
console.log(singleNode2);
console.log(singleNode3);
console.log(singleNode4);

console.log("-----------------document.querySelectorAll-----------------");
// document.querySelectorAll("selector") -> trả về một NodeList chứa danh sách các node, nếu ko có sẽ trả về empty NodeList[]
// nó giống như mảng nhưng ko phải mảng, nó có thể sử dụng loop: for, for of , forEach nhưng ko thể sử dụng push, pop, shift, map, filter...

// const test = document.querySelector(".item"); mà trong html ở thẻ ul có item thì dùng cách này nó sẽ chỉ chả về item đầu tiên thôi

// muốn lấy hết thẻ li thì sử dụng querySelectorAll();
const multiNode = document.querySelectorAll(".item");
console.log(multiNode);
for(let i=0 ;i<multiNode.length ;i++){
    console.log(multiNode[i]);
}

console.log("-----------------element.querySelector-----------------");
// element có thể querySelector những thằng con của nó còn những thằng bên ngoài ko query đc
 /* <div class="dat">
        <p class="kha"></p>
        <span class="con"></span>
        <span class="con"></span>
        <span class="con"></span>
    </div>
    <h1 class="hi">hi</h1> */

// const dat = document.querySelector(".dat");
// console.log(dat.querySelector(".con")); -> in ra node con đầu tiên
// console.log(dat.querySelector(".hi")); -> in ra null vì .hi ko phải con của .dat 

console.log("-----------------element.querySelectorAll-----------------");
// cách làm tương tự như element.querySelector 



console.log("-----------------document.getElementsByClassName-----------------");
// document.getElementsByClassName("ClassName") chỉ truyền vào tên class -> trả về 1 HTMLCollection chứa danh sách các node , nếu ko có sẽ trả về empty HTMLCollection []

 const className = document.getElementsByClassName("item"); // LƯU Ý TRUYỀN TÊN CLASS VÀO Ở CÁI NÀY KO CẦN DẤU .
 console.log(className);


 console.log("-----------------document.getElementById-----------------");
// document.getElementById("idName") chỉ truyền vào tên id
const idName = document.getElementById("spiner") // LƯU Ý TRUYỀN TÊN CLASS VÀO Ở CÁI NÀY KO CẦN DẤU #
console.log(idName); // -> chỉ trả về 1 node , nếu ko có thì sẽ trả về null


console.log("-----------------document.getElementsByTagName-----------------");
// document.getElementsByTagName("TagName") TagName là những cái thẻ như ul, a, li,....   ->trả về 1 HTMLCollection chứa node đó , còn ngược lại thì trả về empty HTMLCollection []
const tagNodes = document.getElementsByTagName("h1");
// const tagNodes = document.getElementsByTagName("li");
console.log(tagNodes);

console.log("-----------------getAttribute-----------------");
// Selector.getAttribute("attribute") => trả về giá trị của attribute đó
// attribute -> là thuộc tính: href, id , class ,src, style ,...
// Ex <p id="spiner" style="color: red"></p> thì style hay id là attribute
const link = document.querySelector("a");
console.log(link.getAttribute("href")); 
console.log(link.getAttribute("class")); 

// muốn lấy nhiều giá trị giống nhau kiểu như trong ul li 
const li = document.querySelectorAll(".item");
// console.log(li);
li.forEach((vl) =>{
    console.log(vl.getAttribute("class"));
});

console.log("-----------------setAttribute-----------------");
// Selector.setAttribute("attribute", "value") => set giá trị của attribute nào đó của selector
const link2 = document.querySelector("a");
link2.setAttribute("target", "_blank");
// muốn gán nhiều thì 
const listLink = document.querySelectorAll("a.link"); //nghĩa là lấy ra thẻ a có class là link
listLink.forEach((vl) => {
    vl.setAttribute("target", "_blank");
});
console.log("-----------------attribute Style-----------------");
// VD muốn cho thẻ body có style background-color là màu đỏ
// nếu muốn gắn cho 1 thẻ có style thì
document.body.backgroundColor = "red";
// hoặc có thể sử dụng setAttribute() thì
// document.body.setAttribute("style", "background-color: red");


console.log("-----------------removeAttribute-----------------");
// Selector.removeAttribute("attribute") -> xóa attribute của selector
const p = document.getElementById("spiner");
p.removeAttribute("style");

console.log("-----------------hasAttribute-----------------");
// Selector.hasAttribute("attribute") -> ktr selector có chứa attribute nào đó hay ko , nếu có thì trả về true ngược lại trả về false
console.log(p.hasAttribute("class")); // false
console.log(p.hasAttribute("id")); // true


console.log("-----------------Sự khác nhau giữa NodeList và HTMLCollection-----------------");
// Điểm giống nhau là có thể truy cập bằng index , có độ dài(.lenght), giống mảng nhưng ko phải là mảng , ko sử dụng đc những phương thức đã học như là , pop, shift, push, map, filter,....
// HTML collection: ko sử dụng đc forEach
// NodeList: có thể sử dụng đc forEach
const test = document.querySelectorAll("li"); // => trả về NodeList
const test2 = document.getElementsByTagName("li"); // => trả về HTMLCollection
console.log(test);
console.log(test2);

console.log("-----------------document.title và document.head-----------------");

console.log(document.title); // in ra title của html
document.title = "Welcome to Dom"; // thay đổi title của html

console.log(document.head); // in ra head trong html
/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */
// muốn in đoạn này vào thẻ head của html thì
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(meta);