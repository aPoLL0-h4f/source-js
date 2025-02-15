//Bài 1: nhập vào số tuối và kiểm tra nếu số tuổi lớn hơn hoặc bằng 18 thì được coi phim rạp ngược lại thì không được vô coi
const yourAge = prompt("Nhap so tuoi cua ban");
if (Number(yourAge) >= 18) {
  confirm("ban du tuoi xem phim");
} else {
  confirm("ban chua du tuoi xem phim");
}
//cách 2
let mess2 = yourAge >= 18 ? "You are adult" : yourAge <= 10 ? "You are still a child" : "You are a young boy";

//Bài 2: cho 2 số a và b tìm ra số lớn hơn
const a = prompt("Nhap so thu 1: ");
const b = prompt("Nhap so thu 2: ");
let c = Number(a) > Number(b) ? `so lon nhat la ${a}` : `so lon nhat la ${b}`;
console.log(c);
