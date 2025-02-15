// ArrayReplace
//[1,2,3,1,1] -> thay đổi toàn bộ số 1 thành 5
function arrayReplace(array, elementToplace, newElement){
    for(let i=0 ;i < array.length ; i++){
        if(array[i] === elementToplace){
            array[i] = newElement;
        }
    }
    return array;
}
console.log(arrayReplace([1,2,3,1,1],1,5));

//Palindrome
// aaBAA -> đảo ngược vẫn như cũ chỉ là in hoa thôi AABaa
// aaBAc -> cABaa ko phải 
function isPalindrome(str){
    const newStr = str.toLowerCase();
    //C1
    // const reverseStr = newStr.split("").reverse().join("");
    
    //C2
    let reverseStr = "";
    for(let i = newStr.length - 1 ; i>=0 ; i--){
        reverseStr += newStr[i];
    }
    return newStr === reverseStr;
}
console.log(isPalindrome("aaBAA"));

//Array Chunking
//[1,2,3,4,5,6,7,8], size:3
// nó sẽ trả ra như này 1 mảng lớn có những mảng con có size=3 [[1,2,3], [4,5,6], [7,8]]

function chunk(array , size){
    let result = [];
    for(let i = 0 ; i<array.length - 1; i+=size){
        result.push(array.slice(i, i + size));
    }
    return result;
}
const chunkArr= chunk([1,2,3,4,5,6,7,8], 3);
console.log(chunkArr);

//Array Reverse
// [1,2,3,4,5] -> [5,4,3,2,1]
// cách mới 
// cách này sẽ chạy tới / 2 
function reverse(array){
    for(let i=0 ; i < array.length / 2; i++){
        [array[i], array[array.length-1-i]] = [array[array.length-1-i], array[i]];
    }
    return array;
}
const reverseArr= reverse([1,2,3,4,5,6,7,8]);
console.log(reverseArr);