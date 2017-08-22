/**
 * Created by ender on 2017/6/8.
 */

var color = "red";
var name = "mei";

var person = {
    name: "ender",
    age: 32,
    showName: function () {
        return this.name;
    }
}

function arTess() {
    // for (var argu in arguments) {
    //     console.log(argu);
    // }
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

function getColor() {
    var color = "blue";
    return color;
}

console.log(getColor());
console.log(color);
//console.log(window.color);

console.log(person.showName());
arTess(1);
arTess(1, 2);
arTess();


function compare(value1, value2) {
    return value1 - value2;
}

var numArray = [1, 3, 2, 4, 7, 5, 6]
console.log(numArray.sort(compare));