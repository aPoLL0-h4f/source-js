const number = "5";
const number2 = "4.8";
console.log(number);
console.log(number2);
console.log(parseInt(number) + parseFloat(4.8));
//abs()
const number3 = -10;
console.log(Math.abs(number3));

console.log(typeof 10); // ktr kiểu

//Math.floor(value) --> làm tròn xuống vd: 6.6 -> 6
console.log(Math.floor(6.6));

//Math.ceil(value) --> làm tròn lên vd: 6.6 -> 7
console.log(Math.ceil(6.2));

/////////////////////Math.sign()///////////////
// Math.sign() nó trả về một trong ba giá trị sau
// 1 nếu số đó là dương.
// -1 nếu số đó là âm.
// 0 nếu số đó là 0 hoặc NaN (không phải một số)


//Math.round(value) --> từ 6.5 trở lên thì làm tròn thành 7, còn từ 6.4 trở về thì làm tròn về 6
console.log(Math.round(6.5));

console.log(1 / 3);
console.log(parseFloat((1 / 3).toFixed(2))); // muốn lấy bao nhiêu số sau dấu phẩy và sau khi lấy vậy số đó sẽ biến thành string

console.log(Math.random() * 20); // * number là random từ 0 cho tới number đó, nếu ko truyền * 10 thì mặc định chạy từ 0 -> 1

//Math.max(1,2,3) -> trả ra con số lớn nhất
console.log(`Max: ${Math.max(1, 3, 2)}`);

//Math.min(1,2,3) -> trả ra con số nhỏ nhất
console.log(Math.min(3, 1, 2));

//Math.pow(number1,number2)
console.log(Math.pow(2, 3)); // 2^3
//isNaN() là hàm đầu tiên nó sẽ convert vd "1234" -> 1234 ==> false
//Number.isNaN() là hàm sẽ chỉ nhận giá trị vào là NaN ==> true
//NaN -> Not a Number

console.log("--------isNaN--------");
console.log(isNaN("hello")); // true
console.log(isNaN("1234")); // convert -> 1234 ==> false hàm này sẽ tự chuyển "1234" qua thành số , thực chức trong hàm này có 1 hàm Number() để chuyển qua thành số
console.log("--------Number.isNaN--------");
console.log(Number.isNaN("Hello")); //false
console.log(Number.isNaN("123")); //false
console.log(Number.isNaN(NaN)); //true bắt buộc truyền vào phải là NaN
