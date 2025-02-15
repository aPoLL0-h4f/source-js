/**
 * status: pending
 * status: success (resolve)
 * status: reject
 */
// nó chỉ dừng khi nó đc resolve hay reject
// new Promise(function(resolve, reject))
// let buyIphone = true;
// let willBuyIphone = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         if(buyIphone){
//             resolve("Oh yeah, I have new Iphone");
//             console.log("OK");
//         }else{
//             reject("Oh no, I don't have new Iphone")
//             console.log("not OK");
//         }
//     }, 5000);
// });
// console.log(willBuyIphone);

console.log("---------then-----------");
// là một hàm chạy khi promise được giải quyết và nhận kết quả.
// .then(onFullfilled, onRejected)
//onFullfilled -> resolve
//onRejected -> reject
// function makePromise(buyIphone){
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             if(buyIphone){
//                 resolve("Oh yeah, I have new Iphone");
//             }else{
//                 reject("Oh no, I don't have new Iphone")
//             }
//         },5000);
//     });
// }

// let haveIphone = makePromise(true);
// haveIphone.then(
//     (success) => console.log(success),
//     (reason) => console.log(reason)
// )

// nếu ko muốn sử dụng reason thì phải để undefined
// haveIphone.then(
//     (success) => console.log(success),
//     undefined
// )
// nếu ko muốn sử dụng success ngược lại với cái trên

console.log("---------catch & finally-----------");
//catch: dùng để bắt lỗi
// nếu muốn xóa reason hay success thì phải dùng catch để bắt lỗi cái đó

// haveIphone.then(
//     (success) => console.log(success)
// ) để như này mà truyền vào false sẽ bị lỗi

// làm như này 
// haveIphone.then(
//     (success) => console.log(success)
// ).catch((err) =>{
//     console.log(err);
// }).finally(() => {
//     console.log("Im still happy");
// })
//finally: tức là dù có thất bại hay thành công thì nó cx sẽ chạy vào

console.log("---------promise.allSettled-----------");
// nó sẽ trả về 1 mảng object hết tất cả cho dù thành công hay ko thành công
// function isFrontendDev(languages){
//     return new Promise(function(resolve, reject){
//         if(!languages.includes("html")){
//             reject("You are not Frontend developer");
//         }
//         setTimeout(()=> {
//             resolve("You are Frontend developer");
//         },1000)
//     });
// }

// const dev1 = isFrontendDev(["html", "css"]);
// const dev2 = isFrontendDev(["css"]);
// const dev = Promise.allSettled([dev1, dev2]).then(
//     (data) =>{
//         console.log(data);
//     }
// )


console.log("---------promise.all-----------");
// đoạn code này nó sẽ chạy tuần tự
// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve("1. run the first time");
//     }, 3000);
// }).then((data) => {
//     console.log(data);
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             resolve("2. run the second time");
//         }, 3000);
//     }) 
// }).then((data) => {
//     console.log(data);
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             resolve("3. run the third time");
//         }, 3000);
//     }) 
// }).then((data) => {
//     console.log(data);
// })


// nếu ta muốn tất cả đều chạy xong r làm 1 việc gì đó , chớ k phải chạy theo tuần tự
// promise.all() sẽ trả về resolve khi tất cả promise truyền vào đều là resolve
//trả về rejected khi có 1 cái promise bị reject
function makeTimer(timer = 1000, str){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve(str);
        }, timer);
    }) 
}
const timer1 = makeTimer(1000, "first time");
const timer2 = makeTimer(2000, "second time");
const timer3 = makeTimer(3000, "third time");
// .all() nó chấp nhận 1 cái mảng
const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) =>{
    // console.log(data);
});

console.log("---------promise.race-----------");
// nếu ta muốn thằng nào chạy xong nhanh nhất thì làm 1 cái gì đó , nó sẽ trả về cả 2 resolve cũng đc hoặc reject cũng đc đó là điểm khác nhau với all
// .race() nó chấp nhận 1 cái mảng
const timerTotal2 = Promise.race([timer1, timer2, timer3]).then((data) =>{
    // console.log(data);
});


console.log("---------try catch-----------");
//throw new Error là nó trả ra 1 cái lỗi
// viết như này sẽ bị lỗi nên cái Promise ko chạy
function isFrontendDev2(languages){
    if(!languages.includes("html")){
        throw new Error("You are not Frontend developer");
    }
    return new Promise(function(resolve, reject){
        setTimeout(()=> {
            resolve("You are Frontend developer");
        },1000)
    });
}
// isFrontendDev2(["css"]).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// nên sẽ sử dụng try
try {
    isFrontendDev2(["css"]).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
} catch (error) {
    console.log("oh noooooooooo");
} finally{ // dù lỗi hay ko lỗi nó cx sẽ vào đây
    console.log("demo");
}


