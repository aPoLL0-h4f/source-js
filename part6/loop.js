// FOR
const number = [1, 2, 3, 4, 5];
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 == 0) {
    console.log(number[i]);
  }
}
// bt
//1. sao chép mảng dùng vòng lặp
console.log("BAI TAP");
let copyArr = [];
for (let i = 0; i < number.length; i++) {
  copyArr.push(number[i]);
}
console.log(copyArr);
//2. đảo ngược từ dùng vòng lặp "i love"-> "evol i"
let str = "i love";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result = result + str[i];
}
console.log(result);

// WHILE , DO WHILE
let number2 = 1;
do {
  number2++;
  console.log(number2);
} while (number2 < 10);

console.log("------FOR OF------");
//FOR OF
// for( value of array)
let a = [];
const number3 = [14, 16, 18, 2, 6, 11];
for (let n of number3) {
  n++;
  a.push(n);
}
console.log(a);

for (let c of "Dat"){
  console.log(c);
}