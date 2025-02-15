// lưu giá trị trong local Storage khi load web nó vẫn k bị mất
// 1. localStorage.setItem("key", "value")
localStorage.setItem("name", "phandat");
// 2. localStorage.getItem("key") -> lấy ra value của cái key đó
console.log(localStorage.getItem("name"));
// 3. localStorage.removeItem("key") -> xóa 1 cái 
localStorage.removeItem("name");
//4. localStorage.clear() -> xóa All

//--------------------------
// muốn lưu ở dạng Object, array thì phải chuyển về string bằng JSON
let arr = [1,2,3,4];
localStorage.setItem("list", JSON.stringify(arr));
const newArr = JSON.parse(localStorage.getItem("list"));
console.log(newArr);