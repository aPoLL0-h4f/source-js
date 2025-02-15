// ES6 -> từ phiên bản này mới có class
// so sánh cách viết constructor/prototype và class

// 1. constructor/prototype

// function Person(name){
//     this.name = name;
// }   
// Person.prototype.getName = function (){
//     console.log(this.name);
// }
// const pd = new Person("Phan Dat");
// pd.getName();

// 2. class
class Person{
    constructor(name){
        this.name=name;
    }

    // thay vì viết vậy
    // getName(){
    //    return this.name;
    // }

    // thì ta sẽ viết vậy
    get name(){
        return this._name;
    }

    // thay vì viết vậy
    // setName(newName){
    //     this.name= newName;
    // }

    // thì ta sẽ viết vậy
    set name(newName){
        return this._name = newName;
    }
}

const pd = new Person("Phan Dat");

console.log("----------setter&getter----------")
// giống oop vì ko muốn truy xuất trực tiếp thì sẽ dùng 2 phương thức này
console.log(pd.name);
pd.name = "Thuy Kha";
console.log(pd.name);

console.log("----------class expression----------")
let Student = class {
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        return this._name= newName;
    }
}

const tk = new Student("Thuy Do");
console.log(tk);
console.log(tk.name);

console.log("---------Class sử dụng trong function dưới dạng argument-----------");
function company(aclass){
    return new aclass();
}
let hello = company(class{
    sayHello(){
        console.log("hello");
    }
});

hello.sayHello();

console.log("---------static method-----------");
// đôi khi chúng ta cần sử dụng 1 method trực tiếp từ class luôn mà ko cần phải thông qua object
// khi sử dụng static method thì ko cần sử dụng từ khóa new
// nếu mà sử dụng từ khóa new thì cái method có có static sẽ ko dùng đc


class Article{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }

    static compare(a,b){
        return a.date - b.date;
    }
}

let articles = [
    new Article("HTML" , new Date(2021, 1, 1)),
    new Article("CSS" , new Date(2021, 0, 1)),
    new Article("JS" , new Date(2021, 11, 1)),
]


// articles.sort((a,b) => a.date - b.date); 
articles.sort(Article.compare); // Article.compare khúc này tương ứng với khúc trên
console.log(articles[0].title);

console.log("---------static property -----------");
// giống như static method
class Item{
    constructor(name){
        this.name = name;
        // this.constructor.propertyName nó chỉ hoạt động trong constructor thôi
        this.constructor.count++;
    }

    static count = 0;
    static getCount(){
        //className.propertyName
        return Item.count; // vì static nên dùng trực tiếp tên lớp rồi .
    }
}

const pencil = new Item("Pencil");
const Laptop = new Item("Laptop");
console.log(Item.getCount());

console.log("---------super&extends -----------");
class Animal{
    constructor(legs){
        this.legs = legs;
    }
    walking(){
        console.log(`Walking on ${this.legs} legs`);
    }
}

class Bird extends Animal{
    // kế thừa từ class Animal
    constructor(legs){
        super(legs);
    }
    fly(){
        console.log("I Can fly");
    }
}

let bird = new Bird(2);
console.log(bird);
bird.fly();
bird.walking();