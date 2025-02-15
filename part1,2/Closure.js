function showInfomation(){
    // local excution context
    const myName = 'evondev';

    // khi function return thì nó sẽ xóa cái local excution context đó đi, nó sẽ nhớ đc cái return value
    return myName;
}
console.log(showInfomation());

console.log("----closure")

// closure
function showInfomation2(){
    const myName = 'evondev';

    function getName(){
        return myName;
    }
    return getName;
}

// khi gọi function thì nó sẽ tạo ra local excution context khi return thì cái local excution context bị xóa và nó chỉ nhớ đc cái return là function getName
// nhưng khi tạo ra function thì nó sẽ tạo ra local excution context đồng thời nó cx tạo ra closure luôn và closure sẽ lưu trữ những biến VD ở trên nó sẽ lưu trữ biến myName  
// vì vậy khi return getName nó sẽ lấy biến myName trong closure ra
const info = showInfomation2();
console.log(info());



// unique scope
function t1(){
    var a = 1;
    console.log(a);
}
function t2(){
    var a = 2;
    console.log(a);
}
function t3(){
    var a = 3;
    console.log(a);
}

// ta đều bk var là biến global nhưng khi ở trong function , nếu function đc chạy thì nó sẽ tạo ra unique Scope vì vậy biến var chỉ active trong function đó thôi
t1();
t2();
t3();
