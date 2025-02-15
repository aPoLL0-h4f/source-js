const name = "Phan Dat";
const job = "Fullstack";
const strw = `My name is ${name} I'm ${job}`;
console.log(strw);
console.log(typeof strw);
console.log(strw.toLowerCase());
console.log(strw.toUpperCase());

const myStr = "Frontend Developer";
console.log(myStr.split(" "));
console.log(myStr.length);
console.log(myStr.includes("end")); // kiếm tra chữ end có chứa trong biến myStr ko
console.log(myStr.indexOf("d"));
console.log(myStr.lastIndexOf("d"));
console.log(myStr.replace("Developer", "hello"));
console.log(myStr.startsWith("Developer")); //có phân biệt hoa thường endsWith cx vậy
console.log(myStr.endsWith("Developer"));

const myStr2 = "   Phan Thanh Dat   ";
// Vd nếu "Phan Dat" nếu điền vào slice(số âm) thì sẽ lấy ngược lại là từ cuối về đầu
console.log(myStr2.slice(0, 5)); // sẽ lấy từ vị trí 0 đến vị trí 5-1
console.log(myStr2.slice(0));
console.log(myStr2.slice(5));
console.log(myStr2.trim()); // loại bỏ khoảng trống bên trái và phải
console.log(myStr2.trimStart()); // loại bỏ khoảng trống đầu
console.log(myStr2.trimEnd()); // loại bỏ khoảng trống cuối
console.log(`Mystr2: ${myStr2.trim().replace("Dat", "Kha").toUpperCase()}`); // viết với nhiều biến String gộp lại
console.log(myStr.repeat(6)); // In ra lặp lại 6 lần
console.log(myStr.charAt(0));

const myStr3 = "Frontend";
//substr --> Lấy ra 1 phần của chuỗi(Sting)
//substr(index,lenght) --> index: vị tí, lenght: số lượng ký tự muốn lấy
console.log(myStr3.substr(1, 5));

//substring --> lấy ra các kí tự của chuỗi(String)
//substring( index, index-1)
console.log(myStr3.substring(1, 5));
