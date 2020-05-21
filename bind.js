/*
 * @Author: your name
 * @Date: 2020-05-20 11:24:57
 * @LastEditTime: 2020-05-21 17:42:26
 * @LastEditors: Please set LastEditors
 * @Description: .call()和.apply()方法的区别除了第二个传的参数不一样以外，作用都是改变this的指向，然后执行函数
 *               也就是对象调用一个函数
 *               第一个参数如果不传就是当前的执行环境 window/global
 * @FilePath: /axzo-oms/Users/fgl/functional/bind.js
 */

// .call()第二个参数是可以传入多个参数的   .apply 的第二个参数是数组
Function.prototype.call2 = function (context = window, ...args) {
  console.log(this);
  console.log(context);
  context.fn = this;
  console.log(context);

  let result = context.fn(...args);
  delete context.fn;
  console.log(context);
  return result;
};

let obj = { a: 1, b: 2 };

/**
 * @description:
 * @param {type}
 * @return:
 */
function bar(name, age) {
  return {
    a: this.a,
    b: this.b,
    age,
    name,
  };
}

let res = bar.call2(obj, "fgl", 24);
var name = "dmy";
name = "wql";
console.log(res);
console.log(this);
this.name = "fgl";
console.log(this);
// console.log(global);
console.log(this === globalThis);

const test = {
  outer: function () {
    function inner() {
      // 此时this指向window
      console.log(this);
    }
    inner();
  },
};
test.outer();

this.x = 9;
function Module(x) {
  this.x = x;
  this.getX = () => {
    console.log(this);
    return this.x;
  };
}
const mo = new Module(81);
mo.getX(); // 81
const retrieveX = mo.getX;
retrieveX();
