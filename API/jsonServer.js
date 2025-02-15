// https://github.com/typicode/json-server dùng để làm api giả
// thao tác ở terminal
// đầu tiền chạy lệnh này npm install json-server
// sau đó tạo file db.json như hướng dẫn của đường dẫn trên
// sau khi tạo xong chạy api giả bằng lệnh này json-server --watch db.json LƯU Ý nếu muốn đổi port của json-sever thì tạo 1 file json-sever.json

function addPost(title, author) {
  fetch("http://localhost:3456/posts", {
    method: "POST",
    body: JSON.stringify({
      // title: title,
      // author: author,
      //viết rút gọn
      title,
      author,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => console.log(response.json()))
    .then((json) => console.log(json));
}

const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = this.elements["title"].value;
  const author = this.elements["author"].value;
  addPost(title, author);
});
