// BT1/ cho 1 mảng gồm nhiều giá trị [1,1000,false,null,"evondev", "", undefined, "javascript",[1,2,3]]. 
// Viết chương trình loại bỏ giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị truthy. Gợi ý giá trị falsy là 0 null undefinded false "" NaN
const array = [1, 1000, false, null, "evondev", "", undefined, "javascript", [1, 2, 3], NaN];
const filterFalsy = array.filter((item) => Boolean(item));
console.log(filterFalsy);

//BT2/ cho 1 mảng phức tạp [[1,2,3,[false,null]],[1,5,6,["javascript"]], [888,666,[90]]] 
// và kết quả mong muốn là[1,2,3,false,null,1,5,6,"javascript"]
const complexArr = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];
const reusult = complexArr.flat(2);
console.log(reusult);

// BT3/ Đảo ngược số nguyên, ví dụ: 1234-> 4321, -567 -> -765
////////////////////-----MATH.SIGN---////////////
// Math.sign(123) -> 1
// Math.sign(-123) -> -1
function reverseNumber(number) {
  const value = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
  console.log(value);
}
reverseNumber(-1234);

// BT4/ viết chương trình có tên là fizzBuzz với đầu vào là 1 số nguyên, 
// và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra nếu số đó chia hết cho 2 thì in ra chữ "Fizz", 
//nếu chia hết cho 3 thì in ra chữ "Buzz", nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"
function fizzBuzz(numberInt) {
  for (let i = 1; i <= numberInt; i++) {
    if (i % 3 === 0 && i % 2 === 0) {
      console.log("FizzBuzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    }
  }
}
fizzBuzz(15);

//BT5 
function countNumber(str){
  let count =0;
  let value="ueuoai";
  for(c of str.toLowerCase()){
    if(value.includes(c)){ // có nghĩa là cái value có chứa cái ký tự c hay ko
      count++;
    }
  }
  console.log(count);
}
countNumber("phan data");



