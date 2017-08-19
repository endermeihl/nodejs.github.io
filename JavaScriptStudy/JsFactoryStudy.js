/**
 * Created by ender on 2017/6/9.
 */
//工厂模式
function createPerson(name, age, job) {
    const o = Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}

let person1 = createPerson("ender", 33, "engineer");
person1.sayName();
//构造函数模式
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}
//原型模式
function Person2() {
}

Person2.prototype.name = "ender";
Person2.prototype.age = 33;
Person2.prototype.job = "Engineer";
Person2.prototype.sayName = function () {
    console.log(this.name);
}

const person2 = new Person2();
person2.name = "meihl";
console.log(person2.hasOwnProperty("name"));
person2.sayName();
delete person2.name;
console.log(person2.hasOwnProperty("name"));
person2.sayName()

//动态原型模式
function Person4(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    if (typeof this.sayName != "function") {
        Person4.prototype.sayName = function () {
            console.log(this.name);
        };
    }
}

var friend = new Person4("mei", 29, "docter");
friend.sayName();


