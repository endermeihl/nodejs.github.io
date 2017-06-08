/**
 * Created by ender on 2017/6/8.
 */

function sum(num1, num2) {
    return num1 + num2
}

function callSum1(num1, num2) {
    return sum.apply(this, arguments);
}

function callSum2(num1, num2) {
    return sum.apply(this, [num1, num2])
}

console.log(callSum1(1, 2));
console.log(callSum2(3, 5));
