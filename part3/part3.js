"4.5"; // 4.5 parseFloat
"4"; // 4 parseInt

//Number(value) -> chuyển thành number tổng hợp của parseInt và parseFloat
console.log(Number("4.5"));
console.log(Number("4"));

console.log(Number("abv")); // NaN
console.log(Number(undefined)); //NaN
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(Number("")); // 0
console.log(Number(NaN)); // NaN

// convert String
//String(value) -> String
console.log(String(4.5)); // "4.5"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(NaN)); // "NaN"

// convert Boolean
//Boolean(value) -> true or false
//      falsy value
console.log(`Boolean: ${Boolean(0)}`);
console.log(`Boolean: ${Boolean(false)}`);
console.log(`Boolean: ${Boolean(null)}`);
console.log(`Boolean: ${Boolean("")}`);
console.log(`Boolean: ${Boolean(undefined)}`);
console.log(`Boolean: ${Boolean(NaN)}`);

//type coercion
console.log(1 + 2); //3
console.log(10 + "10"); // "1010" --> javascipt sẽ tự chuyển số 10 thành "10"
// dấu + sẽ convert số sang String() còn -*/ convert sang Number()
// ngoại trừ dấu + còn những dấu - * / thì bình thường
console.log("10" - 10); // 0 --> javascipt sẽ tự chuyển số "10" thành 10 tức là và Number("10") - 10=0
console.log(null + ""); // "null"
console.log(null + undefined); // NaN
console.log("" - 1); //Number("") = 0 ==> 0 - 1 = -1
console.log(false - true); //Number(false) = 0 , Number(true) = 1 ==> 0 - 1 = -1
console.log(null + 10); //Number(null) = 0 ==> 0 + 10 = 10

// toán tử phủ định
console.log("!");
let phuDinh = false;
console.log(!phuDinh); // true

// ở toán tử == Khi so sánh String với Number thì Javascript sẽ tự động chuyển String về Number để so sánh
// == là so sánh giá trị
console.log("=== vs ==");
console.log(10 == "10"); // convert Number("10") -> 10
console.log(true == 1); // convert Number(true) -> 1 == 1
console.log(1 == "01"); // convert Number("01") -> 1 == 1
console.log(null == ""); // convert Number(null) ->NaN != ""
console.log("--------------");
console.log(true == "true");
console.log(undefined == null); // cả 2 sẽ thành falsy

// === check theo kiểu typeof nữa
console.log(typeof 10); // number
console.log(typeof "10"); //string
console.log(10 === "10");
console.log(10 !== "10");
