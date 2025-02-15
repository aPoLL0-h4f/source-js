// Regular expression: biểu thức chính quy (viết tắt regex)
// là các mẫu dùng để tìm kiếm các bộ kí tự được kết hợp với nhau trong các chuỗi kí tự

console.log("----------2 cách khai báo với Regex-------------");
const re1 = /hello/; // hello chính là regex nằm giữa 2 dấu / /
const re2 = new RegExp("hello");

console.log("----------.test-------------");
// .test nó sẽ trả về true or false ,  được sử dụng để kiểm tra xem một chuỗi có khớp với một mẫu (pattern) cụ thể hay không.
console.log(re1.test("hello word"));

console.log("----------Anchor-------------");
// Anchor ^ $
// ^ string là bắt đầu từ nào đó
//$ string là kết thúc với từ nào đó
// /hi/.test("hi");                    // true
// /hi$/.test("hello welcome to hi");  // true
// /hi$/.test(" hi hello welcome to"); // flase
// /^hi/.test("hi la xin chao");       // true
// /^hi/.test("la xin chao hi");       // false

console.log("----------Ranges-------------");
// là 1 cái khoảng []
// [a-z]
// [A-Z]
// [0-9]
// [a-zA-Z0-9]: các số từ 0-9 hoặc từ a-z hoặc từ A-Z
console.log(/[a-z]/.test("a")); // true vì chữ a nằm trong khoảng[a-z]
console.log(/[a-z]/.test("A")); // false vì chữ A ko nằm trong khoảng[a-z]

// [A-Z] tương tự như trên
console.log(/[0-9]/.test("abv")); // false
console.log(/[0-9]/.test("100000")); // true vì 1 và 0 nằm trong khoảng [0-9];

// muốn đúng hết tất cả thì
console.log(/[a-zA-Z0-9]/.test("12abAB")); // true

// LƯU Ý
console.log(/[0-9]/.test("abc100000")); // true , vẫn là true vì thỏa điều có số 1000 nằm trong [0-9]; tương tự [A-Z] [a-z] cx nhưu v

//muốn sử dụng phủ định thì dùng dấu ^ nằm trong []
console.log(/[^0-9]/.test("100")); // nghĩa là phủ định lại k nằm trong khoảng [0-9]

console.log("----------Meta characters-------------");

// \d: khớp với số , nó sẽ tương đương với [0-9];
// thay vì ghi /[0-9]/.test("123") thì dùng
console.log(/\d/.test("123")); // true

// \D: ngược lại với \d, tương đương [^0-9];
console.log(/\D/.test("123")); // false

// \w: khớp với các ký tự và dấu gạch dưới và số , tương đương [a-zA-Z0-9_]
console.log(/\w/.test("_")); // true

// \W: ngược lại với \w tương đương [^a-zA-Z0-9_]
console.log(/\W/.test("_")); // false

// \s: khớp với các kí tự khoảng trắng như: spaces, tab, newlines
console.log(/\s/.test(" ")); // true

// \S: ngược lại vs \s
console.log(/\S/.test(" ")); // false

// \n: khớp với newlines(xuống dòng);

// \t: khớp với lại tab

// .: khớp với All mọi thứ ngoại trừ newlines(\n)

// [^]: khớp với All mọi thứ bao gồm newlines(\n)

console.log("----------Quantifiers-------------");
// trong Quantifiers có {n} , {n,m}, + , ?, *
// {n}: số lượng nhất định
// {n,m}: số lượng trong khoảng từ n tới m
// +: lấy ít nhất là 1 hoặc nhiều kí tự
// ?: có thể có hoặc ko có
// *: ko có cái nào hoặc lấy nhiều

// string.match(regex) vd: "abc".match(/\w/) -> trả về array[] //sử dụng để kiểm tra xem một chuỗi có khớp với một biểu thức chính quy (regex) hay không , bạn cung cấp biểu thức chính quy mà bạn muốn so sánh với chuỗi và nó sẽ trả về một mảng chứa tất cả các kết quả khớp
const str1 = "welcome to 2021";
console.log(str1.match(/\d/)[0]); // -> nó chỉ lấy ra 1 số, muốn lấy 4 số 2021 thì dùng
console.log(str1.match(/\d\d\d\d/)[0]); // nhưng viết v dài, nên sử dụng Quantifiers
console.log(str1.match(/\d{4}/)[0]); // khúc này {4} là chính là {n} muốn lấy 4 số nên là dùng {4}

const str2 = "welcome to 2021181614";
console.log(str2.match(/\d{4,6}/)[0]); // tương tự {n,m}
// muốn lấy hết số luôn thì dùng +
console.log(str2.match(/\d+/)[0]);

const str3 = "color or colour?";
console.log(str3.match(/colou?r/)); // nghĩa là chữ u có thể có hoặc là ko
// vì dùng ? nên nó sẽ in ra color và colour nhưng nó chỉ in ra đc 1 cái khi được tìm thấy đầu tiên nên ta sẽ dùng flag

// flag
// g: glocal có nghĩa là sẽ lấy tất cả những chuỗi con phù hợp trong chuỗi ban đầu, còn k dùng thì sẽ chỉ lấy đc 1 cái đầu tiên, có nhiều giá trị giống nhau thì nó sẽ lấy
// i: case insensitive có nghĩa là sẽ ko phân biệt hoa thường còn ko dùng thì sẽ có phân biệt hoa thường
// m: multipe lines có nghĩa là nhiều hàng
console.log(str3.match(/colou?r/g));

const str4 = "12345";
// console.log(str4.match(/\d/)); -> chỉ lấy đc 1 chữ số 1
console.log(str4.match(/\d*/)); //-> lấy hết

/** LƯU Ý*/
console.log("welcome 123".match(/\d{3}?/g)); // trường hợp đặc biệt ? ở đây là nó chỉ ưu tiên lấy chuỗi ngắn nhất có thể chớ k phải là có thể có hoặc ko có, nếu ko có 123 trong chuỗi sẽ trả về null

console.log("--------------- khác nhau giữa + và * --------------");
// dấu + là tối thiểu phải có 1 cái nếu ko thì nó sẽ trả về null
// dấu * thì lấy luôn chuỗi rỗng [""]
const str5 = "12345";
console.log(str5.match(/\d*/g));
console.log(str5.match(/\d?/g));

console.log("---------------Group--------------");
//Gom nhóm: group()
// là những thứ nằm trong dấu ()
// VD:
console.log(/(\d{3})(\w+)/.test("123")); // false
console.log(/(\d{3})?(\w+)/.test("123")); // true

console.log("---------------escaping --------------");
// làm việc với những ký tự đặc biệt như: \ / [ ] ( ) { } ? + * | . ^ $
//  /?/ để như này thì nó sẽ hiểu dấu ? là regex có hoặc ko
// để regex hiểu đó chỉ là 1 dấu ? bth thôi thì dùng \
// còn khi như này /[$]/ thì ko cần dấu \ đằng trc vì nó đang ở trong []

//LƯU Ý
// khi như này /[[\]]/ khi [] ngoài có thêm [] trong nữa thì cái [] trong phải thêm dấu [\]
console.log(/\?/.test("?"));

console.log("---------------Boundaries --------------");
// \b: khớp với những từ mà đứng 1 mình , đứng đầu hoặc cuối hoặc giữa 1 cái chuỗi
console.log("my is phandat".match(/\bphandat/)); // ["phandat"];

// \B: ngược lại là nó sẽ ko đứng 1 mình
console.log("my is phandat".match(/\Bphandat/)); //null vì phandat đang đứng 1 mình
console.log("my isphandat".match(/\Bphandat/)); // ["phandat"] vì lúc này nó ko đứng 1 mình

console.log("---------------replace với Regex--------------");
const str6 = "hello welcome hello to my hello";
console.log(str6.replace("hello", "hi")); // chỉ replace đc cái đầu tiên vì vậy nên dùng regex
console.log(str6.replace(/hello/g, "phandat"));
console.log("welcome 1234567".match(/\d+/g));
