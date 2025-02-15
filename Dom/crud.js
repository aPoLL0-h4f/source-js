console.log("------------------document.createElement và document.appendChild----------------");
//THÊM XÓA SỬA NODE TRONG JS
console.log("-----------Tạo Element-----------");
// tạo ra 1 Element trong Js
// document.createElement("tag")
const p = document.createElement("p"); // tạo ra 1 thẻ p nhưng lúc này vẫn chưa hiện được ra bên ngoài web


console.log("-----------append & prepend-----------");
//muốn hiện ta phải dùng selector.appendChild
// muốn append ra đâu thì chọn document.
const body = document.body;
body.appendChild(p); // nghĩa là thêm thẻ p đã tạo ở trên vào body

// append có thể thêm nhiều tham số còn appendChild chỉ thêm 1 mà thôi
// body.append(p);

///prepend -> thêm vào đầu 
// body.prepend(p);


console.log("-----------test-----------");
p.classList.add("container")
// p.className = "container abc xyz";  đây là cách tạo nhiều class cho 1 tag
// thêm nội dung cho thẻ p
p.textContent = "hello My name is Dat , And I'm a developer web , I have lot of experience and expert";

// thêm tag vào bên trong p
p.innerHTML = "<div><h3>Hello</h3></div>";

console.log("-----------createTextNode-----------");
// document.createTextNode
// -> thêm nội dung vào tag
const text = document.createTextNode("Hello My name is Dat");
const h1 = document.createElement("h1");
h1.appendChild(text);
body.appendChild(h1);

console.log("-----------cloneNode-----------");
// element.cloneNode("...")  // chú ý ở ... nếu muốn copy hết y chang bản gốc thì ghi true . ngược lại truyền false thì chỉ lấy được cái tag , ko lấy đc nội dung bên trong
// -> tạo ra 1 bản sao của 1 cái trước đó
const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);

console.log("-----------hasChildNodes-----------");
// kiểm tra xem cái element của chúng ta có phần tử con hay ko nếu có thì trả về true , ngược lại là false
console.log(h1.hasChildNodes());
const span = document.querySelector("span");
console.log(span.hasChildNodes());
