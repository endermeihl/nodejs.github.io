/**
 * Created by ender on 2017/3/5.
 */
var addon = require('bindings')('hello');

console.log(addon.hello()); // 'world'
