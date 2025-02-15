// BT1. viết 1 function kiểm tra value có phải là object hay ko? 
// CHÚ Ý {} [] null => typeof đều là object
function isObject(value){
    if(typeof value ==="object" && !Array.isArray(value) && value !==null){
        return true;
    }
    return false;
}
// {}
console.log(isObject([]));

// BT2. viết 1 function trả về 1 mảng key và value dựa vào object
// Ex: {a: 1, b: 2} => [["a", 1], ["b", 2]]
//C1
function objectToArray(obj){
    if(!isObject(obj)){
        console.log("Enter valid object");
        return;
    }
    return Object.entries(obj);
}
const newO={
    name: "Dat",
    age: 20,
    wife: "Kha",
};
// console.log(objectToArray(newO));

//C2
function objectToArray2(obj){
    if(!isObject(obj)){
        console.log("Enter valid object");
        return;
    }
    const value = Object.keys(obj).map((key) => [key,obj[key]]);
    return value;
}
console.log(objectToArray2(newO));

//C3
function objectToArray3(obj){
    if(!isObject(obj)){
        console.log("Enter valid object");
        return;
    }
    let result = [];
    for(let item in obj){
        if(obj.hasOwnProperty(item)){// tức là nếu obj có chứa item(tức là key) trong cái Object obj thì thực hiện trong if
            result.push( [item, obj[item]] );
        } 
    }
    return result;
}
console.log(objectToArray3(newO));

 
//BT3 viết function truyền vào ({a: 1, b: 2}, 'b') object và 1 biến kết quả sẽ là => {a: 1}
function objectTranslate(obj, c){
    if(!isObject(obj)){
        console.log("Please Enter valid Object");
        return;
    }
    // for(let item in obj){
    //     if(item === c){
    //         // delete obj.item; // ko dùng được vì khúc này nghĩa là obj sẽ cố gắng xóa một thuộc tính có tên là "item" từ đối tượng, chứ không phải là thuộc tính với khóa được lưu trữ trong biến item 
    //         delete obj[item]; => dùng cách xóa này
    //     }
    // }
    delete obj[c];
    return obj;
}
console.log(objectTranslate({a: 1, b: 2}, "b"));


// nếu muốn xóa nhiều 
function objectTranslate(obj, ...rest){  // ...rest sẽ tự đưa vào 1 cái mảng
    if(!isObject(obj)){
        console.log("Please Enter valid Object");
        return;
    }
    const newObject = {...obj};
    // for(let n of rest){
    //     delete obj[n];
    // }
    // return obj;
    rest.forEach(item => {
        delete newObject[item];
    });
    console.log(obj);
    return newObject;
}
console.log(objectTranslate({a: 1, b: 2, c: 3, d: 4,}, "b", "d"));

// BT4 kiểm tra 2 object tuyền vào có bằng nhau hay ko
// {a:1 , b:2 }, {a:1, b:2} => true
// {a:1 , b:2 }, {a:1, b:2, c:3} => false
function compareObject(obj1, obj2){
    const objL1= Object.keys(obj1);
    const objL2 = Object.keys(obj2);
    if(!isObject(obj1) && !isObject(obj2)){
        return;
    }
    if(objL1.length !== objL2.length) return false;
    
    let check = objL1.every((key) => obj1[key] === obj2[key]);
    return check;
}
console.log(compareObject({a:1, b:2},{a:1, b:2}));

