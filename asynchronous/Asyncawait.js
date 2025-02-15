// bản chất vẫn là Promise nó sinh ra để làm cho code chúng ta gọn gàng và dễ nhìn hơn
//await : chỉ sử dụng đc bên trong function mà function sử có dụng async(tức là có async phía trc)

function wait(timer = 0){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, timer);
    });
}

// function expression
async function run(){ // phải ghi async trc thì await mới chạy đc
    console.log("starting");
    await wait(2000); // khúc này nghĩa là đợi 2 dây rồi mới chạy khúc bên dưới
    console.log("running");
    await wait(2000);
    console.log("End");
}
// run();




// arrow function
const fn = async () =>{};

// object
const student = {
    fullname: async function(){},
    // function dạng viết rút gọn
    async caclAge(){},
}