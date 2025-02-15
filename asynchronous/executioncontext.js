let x = 10;
function timeTen(a){
    return a*10;
}
let y = timeTen(x);
console.log(y);
// -Global execution context
// + The creation phase
/**
 * tạo ra global Object: window
 * sau đó tạo ra this : window
 * x : undefined
 * timesTen: function(){}
 * y: undefined
 */


// + The execution phase
/**
 * global Object: window
 * this: window
 * x: 10
 * timesTen: function(){}
 * y: timesTen(x) -> 100
 * 
 */

console.log("------------Function execution context");
// -----------------Function execution context
// + The creation phase
/**
 *  global Object: arguments
 *  this : window
 * a: undefined 
 */

// + The execution phase
/**
 *  global Object: arguments
 *  this : window
 *  a: 10 
 */

console.log("------------Callstack");
// nó sẽ quản lý những cái execution context
function add(a,b){
    return a+b;
}

function average(a, b){
    return add(a,b) / 2;
}

let result = average(10, 20);

/**
 * 
 * add() 
 * average()
 * global()
 */

// result
/**
 * average()
 * global()
 */
/**
 * global()
 */
/**

*/

