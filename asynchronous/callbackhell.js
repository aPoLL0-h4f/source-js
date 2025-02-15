// setTimeout(()=>{
//     console.log("run the first time");
//     setTimeout(() => {
//         console.log("run the second time");
//         setTimeout(()=>{
//             console.log("run the third time");
//             setTimeout(()=>{
//                 console.log("run the fourth time");
//                 setTimeout(()=>{
//                     console.log("run the fifth time");
//                 }, 2000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 3000);
// cái này là callback hell , khó đọc và khó quản lý


//refactor lại bằng promise
new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("1. run the first time");
    }, 3000);
}).then((data) => {
    console.log(data);
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("2. run the second time");
        }, 3000);
    }) 
}).then((data) => {
    console.log(data);
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("3. run the third time");
        }, 3000);
    }) 
}).then((data) => {
    console.log(data);
})