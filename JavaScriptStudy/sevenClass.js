/**
 * Created by ender on 2017/8/19.
 */

(function () {
    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction() {
        return false;
    }

    MyObject = function () {
    };
    MyObject.prototype.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    }
})();

var myObject = new MyObject();
myObject.publicMethod();