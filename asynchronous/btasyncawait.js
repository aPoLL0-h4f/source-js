// refactor
function makeTimer(timer = 1000, str){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve(str);
        }, timer);
    }) 
}
// const timer1 = makeTimer(1000, "first time");
// const timer2 = makeTimer(2000, "second time");
// const timer3 = makeTimer(3000, "third time");
// const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) =>{
//     console.log(data);
// });

async function allTimer(){
    // muốn nó trả ra kết quả thì dùng await
    // const timer1 = await makeTimer(1000, "first time");
    // console.log(timer1);
    // timer2 = await makeTimer(2000, "second time");
    // console.log(timer2);

    // Muốn cả 2 cái chạy xong thì sẽ làm việc gì đó thì
    const timer1 = makeTimer(1000, "first time");
    const timer2 = makeTimer(2000, "second time");
    const timers = await Promise.all([timer1, timer2]);
    console.log(timers)
}
// allTimer();


console.log("_----bắt lỗi")
// bắt lỗi trong async await
function isFrontendDev2(languages){
    return new Promise(function(resolve, reject){
        if(!languages.includes("html")){
            throw new Error("You are not Frontend developer");
        }
        setTimeout(()=> {
            resolve("You are Frontend developer");
        },1000)
    });
}


async function go(){
    try {
        const dev1 = await isFrontendDev2(["css"]);
        console.log(dev1);
    } catch (error) {
        console.log(error);
    }
}
go();

// cách 2 bắt lỗi
// async function go(){
//     const dev1 = await isFrontendDev2(["css"]);
//     console.log(dev1);
// }
// go().then().catch((err) => console.log(err));