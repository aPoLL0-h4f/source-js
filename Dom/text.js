console.log("-----------------textContent-----------------");
// trả về nội dung nằm giữa cái tag hay selector của chúng ta // LƯU Ý CHỈ LẤY text và lấy được khoảng trắng và xuống dòng
const spiner = document.querySelector("#spiner"); // nếu trong thẻ #spiner có những thẻ con là inline-block thì nó sẽ xóa như thẻ con đó và cx sẽ lấy nội dung bên trong thẻ con, ngược lại những thẻ khác thì sẽ ko lấy
console.log(spiner.textContent);
// muốn thay đổi text trong tag đó thì dùng cái này
// spiner.textContent = "Hello new content";
// console.log(spiner.textContent);

console.log("-----------------innerText-----------------");
// giống textContent nhưng ko lấy được khoảng trắng và dấu xuống dòng // và đặc biệt lấy cái thẻ nào đó có style là display = none; thì nó sẽ ko lấy đc
console.log(spiner.innerText);

console.log("-----------------innerHTML-----------------");
// -> lấy ra nội dung của selector và bao gồm cả những tag bên trong selector đó
// spiner.textContent = `<div class ="demo">hello html</div>`; // muốn gán 1 thẻ vào trong selector , ko được vì lúc này nó sẽ bị chuyển về string
console.log(spiner.innerHTML);
//muốn thay đổi thẻ bên trong selector thì 
// spiner.innerHTML = `helo <div class ="demo">hello html</div>`;
// console.log(spiner);





