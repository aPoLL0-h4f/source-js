// BT1/ Đảo ngược một chuỗi VD:"My name is Phan Dat" -> "Dat Phan is name My"
function reverseString(str) {
  if (!str) return null; // ở đây có nghĩa là nếu ko nhập gì hết hoặc nhập là rỗng thì sẽ trả null 
  //chaining methods nghĩa là nhiều phương thức có thể nối liền vs nhau
  return str.split(" ").reverse().join(" ");
}
console.log(reverseString("My name is Hoang Luong"));

// BT2/ Đảo ngược một chuỗi bao gồm các ký tựVD:"Do Sui" -> "iuS oD"
function reverseWord(str) {
  if (!str) return null;
  const arrStr = str.split(" ").map((value) => value.split("").reverse().join("")); //["Do" , "Sui"]
  console.log(arrStr.reverse().join(" "));
}
reverseWord("Do Sui");

// BT3/ In hoa chữ cái đầu trong chữ VD: "lường nhật hoàng" -> "Lường Nhật Hoàng"
function upperCase(word = "") {
  if (typeof word !== "string" || word.length === 0) {
    return null;
  }
  let newWord = word.trim().toLowerCase().slice(1);
  let s = word.trim().charAt(0).toUpperCase();
  return s + newWord;
}
function capitalizeStr(str) {
  if (!str) return null;
  const save = str.split(" ").map((value) => upperCase(value));
  const string = save.join(" ");
  return string;
}
console.log(capitalizeStr("lường nhật hoàng"));

//BT4 cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6].viết 1 function trả về 1 mảng với các
//giá trị unique. kết quả ở trên sẽ là [1,2,3,5,7,6];
function BT4(value){
  let arr1=[];
  if(!Array.isArray(arr1)) return arr1;
  
  for(let i=0; i<value.length; i++){
      if(!arr1.includes(value[i])){
        arr1.push(value[i]);
      }
  }
  console.log(arr1);
}
BT4([1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]);

//BT5 viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào 1 số nguyên đầu vào. ví dụ
//Ex: ([1,2,3,4,5], 2) -> [[1,2], [3,4], [5]]
//Ex: ([1,2,3,4,5], 3) -> [[1,2,3], [4,5]]
function BT5(arr, number){
  let result=[];
  let index=0;
  while(index < arr.length){
    result.push(arr.slice(index, number+index));
    index+=number;
  }
  console.log(result);
}
BT5([1,2,3,4,5], 3);