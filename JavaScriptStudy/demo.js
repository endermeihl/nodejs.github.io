/**
 * Created by ender on 2017/6/9.
 */
var b = false;
var c = true;

var a = b || c;

console.log(a);

function test() {
    console.log(1);
}
function test(a, b) {
    console.log(2);
}

function test(a) {

    console.log(c)
    console.log(arguments[1]);
}

test(1, 1);


Array.prototype.unique = function () {
    var res = [];
    var json = {};
    for (var i = 0; i < this.length; i++) {
        if (!json[this[i]]) {
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    console.log(json);
    return res;
}

var a = ["1", "1"];
var b = a.unique();
console.log(b);
