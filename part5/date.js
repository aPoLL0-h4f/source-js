const now = new Date();
console.log(now);
// Sat Nov 04 2023 09:45:09 GMT+0700 (Indochina Time)  
//Timezone:  GMT+0700 (Indochina Time) múi giờ
//Second: 09
//Minute: 45
//Hour: 09
//Year: 2023
//Month: Nov
//Day: 04 // ngày trong tháng
//Day of the week: Sat // thứ ở trong tuần

//Timestamp & Epoch time
console.log(now.getTime()); // timestamp tính ra kết quả là miliseconds (1699109684824) dãy số này gọi là timestamp
console.log(new Date(0));

// new Date() -> in ra ngày giờ hiện tại
// new Date(timestamp)-> dựa vào timestamp để in ra ngày giờ
// new Date(date String )-> để trong dấu nháy đôi
// new Date(year, month, day, hours, minutes, seconds, miliseconds)
console.log(new Date(1699113105312));
console.log(new Date("Sat Nov 04 2023 22:51:45 GMT+0700 (Indochina Time)"));  //-> này gọi lày truyền Date string
console.log(new Date(2022, 4, 15, 20, 20, 20, 20)); //Sun May 15 2022 20:20:20 GMT+0700 (Indochina Time)  LƯU Ý: ở số 4 là tháng mà tháng là chạy từ 0 nên số 4 là tháng 5

console.log("-------------Các hàm get trong Date------------");
// Các hàm get trong Date
const birthday = new Date(2004, 5, 16);
// in ra năm
console.log(birthday.getFullYear()); //2004
// in ra tháng
// getMonth(): chạy từ số 0->11
//0 tháng 1 , 11 là tháng 12
console.log(birthday.getMonth()); //số  5 tức là tháng 6
console.log(birthday.getDate()); // ngày của tháng; từ 1->31
// in ra thứ của tuần
//0->6:  0 là chủ nhật , 6:thứ bảy
console.log(birthday.getDay());
// in ra timestamp
console.log(birthday.getTime());
//In ra giờ
console.log(birthday.getHours());
//In ra phút
console.log(birthday.getMinutes());
//In ra giây
console.log(birthday.getSeconds());
//In ra mili giây
console.log(birthday.getMilliseconds());

console.log("-------------Các hàm set trong Date------------");
// các hàm set trong Date
console.log(`My birthday ${birthday}`);
// thiết lập lại ngày tháng năm của biến birthday
birthday.setFullYear(2000);
birthday.setMonth(1); // vì month bắt đầu chạy từ 0 nên số 1 là tháng 2
birthday.setDate(18);
// thiết lập lại giờ phút giây
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
console.log(`My birthday after Update: ${birthday}`);

console.log("-------------UTC giờ quốc tế------------");
//UTC giờ quốc tế
const test = new Date(2004, 1, 18);
console.log(test.getUTCFullYear());
console.log(test.getUTCMonth());
console.log(test.getUTCDate());
console.log(test.getUTCDay());
console.log(test.getUTCHours());
console.log(test.getUTCMinutes());
console.log(test.getUTCSeconds());
console.log(test.getUTCMilliseconds());

// new Date(date String )-> những cái chuỗi hợp lệ về ngày tháng năm
console.log(now.toDateString()); // Sun Nov 05 2023
console.log(now.toTimeString()); //09:11:09 GMT+0700 (Indochina Time)
console.log(now.toLocaleDateString()); // m/dd/yyyy -> 11/5/2023
console.log(now.toLocaleDateString("vi-VI")); // muốn chuyển lại thành 5/11/2023
console.log(now.toISOString());

//setTimeout vs setlnternal => đều là bất đồng bộ
//SETTIMEOUT set 1 khoản thời gian nhất định có nghĩa sau bao lâu nó sẽ làm 1 việc gì đó
setTimeout(function () {
  console.log("call after 3 seconds");
}, 3000); // 1s = 1000 mili s
// có thể dùng
// const timer1 = setTimeout(function () {
//   console.log("call after 3 seconds");
// }, 3000);
// clearTimeout(timer1);

//SETINTERVAL sẽ chạy liên tục và có thể sử dụng trong trường hợp VD: 1 cái event nào đó sau bao nhiêu giờ hoặc bao nhiêu ngày hoặc tháng thì nó sẽ kết thúc
//setInterval nếu gọi lệnh này ko thì nó sẽ chạy hòi nên ta sẽ đặt 1 biến gán rồi dùng clearInterval
// setInterval(function () {
//     console.log("call me");
//   }, 1000); sau 1s chạy 1 lần rất hao tốn tài nguyên nên sử dụng cách dưới
const timer = setInterval(function () {
  console.log("call me");
}, 1000);
clearInterval(timer); // khúc này nghĩa là vừa khai báo xong cái clear luôn nên nó sẽ ko chạy nữa, clearInterval dừng thời gian lại


