// By value vs By references
// By value -> giá trị thực sự được lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // true
// By references -> ám chỉ tới vùng bộ nhớ (chớ mik ko bk vùng bộ nhớ nào cả)
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // false

/// JSON -> JavaScript Object Notation
/*
JSON.stringify(value) -> convert giá trị sang dưới dạng JSON string
giống toString() nhưng nó hoạt động khác
VD:
[1,2,3].toString() -> "1,2,3"
JSON.stringify([1,2,3]) -> "[1,2,3]"
muốn chuyển về lại mảng [1,2,3]
JSON.parse("[1,2,3]") -> [1,2,3]
 */

// muốn 2 cái mảng arr1 và arr2 ở trên so sánh là true thì
console.log(JSON.stringify([1, 2, 3])); // chuyển về string [1,2,3]
console.log(JSON.parse("[1,2,3]")); // về lại mảng [1,2,3]
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str);

// SAO CHÉP MẢNG sao chép mảng gốc thêm 1 mảng mới để xử lý
const students = ["a", "b", "c", "d", "e"];
// 1. sử dụng phương thức slice() để sao chép
const sliceStudents = students.slice();
console.log(sliceStudents);
//2. spread operator [...arr]
const spreadStudents = [...students]; // cách sao chép thứ 2 
console.log(spreadStudents);

//GỘP MẢNG
//[1,2] [3,4] [5,6] gộp thành -> [1,2,3,4,5,6]
// 1. concat
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);
//2. spread operator [...array]
const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2);

//DESTRUCTURING array
const toys = ["ball", "word", "arrow", " magic", "water", "fire"];
const a = toys[0];
const b = toys[1];
const c = toys[2];
// cách gán trên ko khả dụng
// Cach2:
// const [indexName, indexName,...]
const [x, y, z] = toys; // [x,y,z] lấy 3 index đầu của mảng toys
console.log(x, y, z);
// muốn lấy những phần còn lại thì
const [x1, y1, z1, ...rest] = toys; // ở chỗ ...rest thì ở cái rest đó có thể thay tên khác cx đc
console.log(rest); // rest đây có nghĩa là những phần tử còn lại và những phần này in ra vẫn ở trong mảng
// VD sử dụng trong function
function demo(a, ...rest) {
  console.log(a, rest); // khi in ra thì ko cần dấu ...
}
demo(1, 2, 3, 4, 5);