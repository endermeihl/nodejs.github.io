/**
 * Created by ender on 2017/6/8.
 */

var numArray = [1, 3, 2, 4, 7, 5, 6]

function chaneArray(item, index, array) {
    array[index] = item * 2;
}

function checkItem(item, index, array) {
    return item > 0;
}

function sum(prev, cur, index, array) {
    return prev + cur;
}
//
console.log(numArray.map(checkItem))
console.log(numArray.filter(checkItem))
console.log(numArray.every(checkItem))
numArray.forEach(chaneArray);
console.log(numArray.reduce(sum));
console.log(numArray.reduceRight(sum));