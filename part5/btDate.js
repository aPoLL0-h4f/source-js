//Bài tập1
// input Sun Nov 05 2023 09:19:00 GMT+0700 (Indochina Time)
// output 05/11/2023
//có thể viết kiểu này
// console.log(new Date("Sun Nov 05 2023 09:19:00 GMT+0700 (Indochina Time)").toLocaleDateString("vi-VI"));
//  hoặc có thể viết
//  const now = new Date();
//   console.log(now.toLocaleDateString("vi-VI"));
//hoặc
const myTime = new Date("Sun Nov 05 2023 09:19:00 GMT+0700 (Indochina Time)");
const myYear = myTime.getFullYear(); // 2023
const myMonth = myTime.getMonth() + 1; //11
const myDate = myTime.getDate(); //5
console.log(`${myDate}/${myMonth}/${myYear}`);
// kết quả ra là 5/11/2023 -> đề yêu cầu là 05/11/2023
const prefixDate = myDate < 10 ? "0" : "";
const prefixMonth = myMonth < 10 ? "0" : "";
console.log(`${prefixDate}${myDate}/${prefixMonth}${myMonth}/${myYear}`);

//Bài tập2
// 1.Viết chương trình nhập vào năm sinh và in ra số tuổi
// 2.Viết chương trình đếm ngược thời gian theo từng giây(countdown) dựa vào thời gian đầu vào. VD: thời gian làm bài là 30p nếu chạy về 0 thì thông báo đã hết thời gian
// 3.Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại,VD: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiện thị bạn A vừa online `3 phút trước` `2 tháng trước `30 giây trước` `1 năm trước`
//1.
function getAge(year = 2000) {
  if (typeof year !== "number") {
    return "hay nhap so";
  }
  const yearNow = new Date().getFullYear();
  return yearNow - year;
}
const yourAge = getAge(2004);
console.log(yourAge);
//2.
function countdown(minutes = 1) {
  let seconds = minutes * 60;
  let count = 0;
  const timer = setInterval(function () {
    count++;
    console.log(count);
    if (count === seconds) {
      clearInterval(timer);
      console.log("Your time is end!");
    }
  }, 1000);
}
// countdown(1);
//3.
function timeSince(date) {
  const now = new Date();
  const yourDate = new Date(date);
  const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
  let timer = seconds / 31536000;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} năm trước`);
    return;
  }
  timer = seconds / 2678400;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} tháng trước`);
    return;
  }
  timer = seconds / 604800;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} tuần trước`);
    return;
  }
  timer = seconds / 86400;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} ngày trước`);
    return;
  }
  timer = seconds / 3600;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} giờ trước`);
    return;
  }
  timer = seconds / 60;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} phút trước`);
    return;
  }
  timer = second;
  if(timer > 1){
      console.log(`${Math.floor(timer)} giây trước`);
      return;
  }
}
timeSince("Sun Nov 05 2023 22:53:00 GMT+0700 (Indochina Time)");
/**
 * công thức
 * 1 năm = 365ngay * 1ngayco->24gio * 1gio->60phut * 1phut->60s = 31536000
 * 1 tháng = 31ngay * 1ngayco->24gio * 1gio->60phut *  1phut->60s = 2678400
 * 1 tuần = 7ngay  * 1ngayco->24gio * 1gio->60phut * 1phut->60s = 604800
 * 1 ngày = 24gio * 1gio->60phut * 1phut->60s = 86400
 * 1 giờ =  60phut * 1phut->60s = 3600
 * 1 phút = 60s = 60
 */
