/**
 * Created by ender on 2017/3/5.
 */
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
    this.say=function (word) {
        console.log(word);
    }
    this.execute=function(someFunction, value) {
        someFunction(value);
    }
};



module.exports = Hello;
