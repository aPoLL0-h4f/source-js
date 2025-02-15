//1. Viết function so sánh 2 số a,b tìm ra số lớn hơn
function cp(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please enter a valid number");
    return; // dừng chương trình và return; sẽ ra undefind
  }
  return Math.max(a, b);
}
console.log(cp(20, 10));

// 2. In hoa chữ cái đầu trong chữ vd: dat -> Dat, NAM -> Nam
function upperCase(word = "") {
  if (typeof word !== "string" || word.length === 0) {
    return null;
  }
  let newWord = word.trim().toLowerCase().slice(1);
  let s = word.trim().charAt(0).toUpperCase();
  return s + newWord; // return `${s}${newWord}`;
}
console.log(upperCase("hoang"));

// // 2.(nâng cao) In hoa chữ cái đầu trong chữ vd: phan THANH Dat -> Phan Thanh Dat

// 3. Viết hàm có sử dụng callback (function) là parameter của function khác in ra kết quả của hàm compare đã viết ở trên
function callBackFunction(a, b, callback) {
  if(typeof a !== "number" || typeof b !== "number"){
    console.log("Please Enter valid number");
    return;
  }
  let x = cp(a, b);
  callback(x);
}
function printFunction(max) {
  console.log(`Max: ${max}`);
}
callBackFunction(18, 16, printFunction);
console.log(callBackFunction(18, 16, printFunction));
// hoặc có thể viết let result = callBackFunction(18, 16, printFunction);  console.log(result);
//hoặc callBackFunction(18, 16, printFunction);
