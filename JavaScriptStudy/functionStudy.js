/**
 * Created by ender on 2017/6/8.
 */


function sum() {
    var num1 = 1;
    var num2 = 1;
    return num1 + num2
}

function callSum1() {
    var num1 = 2;
    var num2 = 3;
    return sum.apply(this);
}
console.log(sum());
console.log(callSum1());


var b = {color: "red"};
var o = {color: "blue"};
function sayColor() {
    console.log(this.color);
}
sayColor.apply(b);
sayColor.apply(o);

//组合使用构造函数模式和原型模式
function Person3(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["ender", "teddy"]
}

Person3.prototype = {
    constructor: Person3,
    sayName: function () {
        console.log(this.name);
    }
}

var person1 = new Person3("ender", 29, "Enginner");
var person2 = new Person3("Teddy", 28, "Docter");

person1.friends.push("who");
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends === person2.friends);
console.log(person1.sayName === person2.sayName);

