// API: application programming interface
// cổng giao tiếp giữa các phần mềm, nó sẽ trả về dưới dạng json
// Backend(ok) -> API 
// endpoint là cái đường dẫn tới cái api đó chúng ta cần lấy ra


console.log("-----------fetch-----------");
// fetch : lấy data từ api, nó trả về 1 cái promise
// .json(); // nó sẽ trả vể promise

//làm như này chưa tối ưu
// const endpoint2 ="https://api.github.com/users/evondev";
// const s = fetch(endpoint2);
// // console.log(s);
// s
// .then((respone) => {
//     console.log(respone);
//     return respone.json();
// })
// // .then((data)=>{
// //     console.log(data);
// // })

// nên làm như này
const endpoint = "https://api.github.com/users";
const userEL = document.querySelector(".username");
async function dispplayUser(username){
    // fetching ra api từ sever thì có lúc nhanh lúc chậm, nên thường người ta sẽ làm loading....
    userEL.textContent = "Loading...."; // để ng ta bk đang loading
    const promise = await fetch(`${endpoint}/${username}`);
    const data = await promise.json();
    userEL.textContent = `${data.login}`;
}
function handleError(err){
    console.log("SOME THING WRONG WITH YOUR API");
    userEL.textContent = "No data found";
}// bắt lỗi
dispplayUser("evondev").catch(handleError);


console.log("-----------cors-----------");
// Cors : Cross origin resour sharing -> chia sẽ các tài nguyên giữa các origin với nhau, origin là domain VD: evondev.com,...

//same origin
//same origin:  evondev.com evondev.com/posts
//not same origin:  evondev.com facebook.com

console.log("-----------state API-----------");

// state api
// 200 - success(mỗi lần get thì trả về, hoặc trả về khi thành công 1 cái gì đó)
// 201 - create (tạo dữ liệu thành công)

// Hàng 3 redirect
// 301 - Moved Permanently (nghĩa là domain đã di chuyển hoàn toàn r)
// 307 - Temporary Redirect

//Hàng 4 là lỗi
// 400 Bad Request(VD: mạng chậm)
// 401 Unauthorized(khi truy cập vào api đó, và api đó yêu cầu we login , nhưng mà chúng ta chưa đăng nhập mà truy cập thì bị lõi)
// 403 Forbidden (ko thể truy cập)
// 404 Not Found
// 408 Request Timeout (Request lâu quá ko lấy dữ liệu đc )

// Hàng 5 server
// 502 Bad Gateway (server die)
// 504 Gateway Timeout

console.log("-----------Methods-----------");
// // POST , GET, PUT, PATCH, DELETE
// GET: khi chúng ta call api và muốn lấy dữ liệu về
// POST: lưu dữ liệu (VD: thêm dữ liệu vào database)
// PUT: UPdate dữ liệu(sửa toàn bộ)
// PATCH: UPdate dữ liệu(sửa 1 phần)
// DELETE: xóa thông tin 1 user nào đó trong database