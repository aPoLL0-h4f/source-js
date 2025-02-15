// axios thư viện bên ngoài dùng để gọi API , phần công cụ giúp lấy dữ liệu dễ dàng cho các framework như Vue. js, React. js, Angular...
// ta hay dùng fetch, mà fetch chỉ có sẵn trong js

const endpoint = "http://localhost:3456/posts";

console.log("-------Get---------");
// get trong axios
// có thể dùng asynawait thay cho then và catch
function getPosts() {
  axios
    .get(endpoint)
    .then((respone) => {
      console.log(respone.data); // để lấy dữ liệu
    })
    .catch((err) => {
      console.log(err);
    });
}
// getPosts();

console.log("-------Post---------");
// khi data thay đổi thì thằng live server sẽ tự động reload lại nên phải chạy file trực tiếp trong folder,  fetch cũng bị tương tự vậy
function addPost(post) {
  axios
    .post(endpoint, {
      title: post.tite,
      description: post.description,
      author: post.author,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// addPost({
//     title: " Frontend",
//     description: "lorrem hell",
//     author: "phan dat"
// });

console.log("------- put và patch ---------");
// khi sử put chúng ta update những cái gì thì nó sẽ còn , còn những cái ko update thì nó sẽ tự mất , như cái dưới thì ở id2 bị mất cái description
function updatePost(postID) {
  // nếu ở đây sử dụng patch thì sẽ giữ lại , nó khác put
  axios
    .put(`${endpoint}/${postID}`, {
      title: "Vo thuy Kha",
      author: "Nike",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// updatePost(2);

console.log("-------delete---------");
function deletePost(postID) {
  axios
    .delete(`${endpoint}/${postID}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// deletePost(2);

console.log("-------all---------");
// đôi khi ta muốn get post và course song song với nhau trong database thì sử dụng all
// all truyền vào 1 cái mảng

const endpoint2 = "http://localhost:3456";
async function getAllData() {
  const data = await axios.all([
    axios.get(`${endpoint2}/posts`),
    axios.get(`${endpoint2}/courses`),
  ]);
  const [posts, courses] = data;
  console.log(posts);
  console.log(courses);
}
getAllData();
